const sizeOf = require('image-size')

class Image {

  static  getImageCode(tag) {
    const maxPageWidth = 642;
    const twipsRatio = 15; // 15 twips per pixel at 96dpi

    let attribs = tag.attribs;

    var imageType = this.getImageType(attribs.src);
    var height = parseInt(attribs.height);
    var width = parseInt(attribs.width);

    if (attribs.width?.endsWith('%')) {
      width = maxPageWidth * width / 100; // Convert the width to a percentage of the max width
    }

    var imageBase64 = this.bufferFromBase64(attribs.src);

    var dimensions = this.getImageSize(imageBase64);

    // Need both width and height
    if (!width && height) {
      width = height / dimensions.height * dimensions.width;
    }

    if (!height && width) {
      height = width / dimensions.width * dimensions.height;
    }

    if (width > maxPageWidth) {
      // Resize so it doesn't exceed the max width of a page
      let ratio = maxPageWidth / width;
      width = width * ratio;
      height = height * ratio;
    }

    let widthT = parseInt(width * twipsRatio);
    let heightT = parseInt(height * twipsRatio);

    var bufString = this.getImageDataAsHex(imageBase64);

    let result = `\\*\\shppict{\\pict\\picw${dimensions.width}\\pich${dimensions.height}\\picwgoal${widthT}\\pichgoal${heightT}${imageType} ${bufString}}}`;

    return result;
  }

  static bufferFromBase64(src) {
    src = src.substring(src.indexOf('base64,') + 7);
    const buffer = Buffer.from(src, 'base64');
    return buffer;
  }

  static getImageSize(imageBuffer) {
    var dimensions = sizeOf(imageBuffer);
    console.log(dimensions.width, dimensions.height);

    return dimensions;
  }

  static getImageType(src) {
    if (src.startsWith('data:image/png;')) {
      return '\\pngblip'
    }

    if (src.startsWith('data:image/jpeg;')) {
      return '\\jpegblip'
    }
   
    throw new Error('Unsupported image type');
  }

  static getImageDataAsHex(imageBuffer) {
    const bufString = imageBuffer.toString('hex');

    return bufString;
  }
}

module.exports = Image;