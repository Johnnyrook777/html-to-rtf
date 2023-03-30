const sizeOf = require('image-size')

class Image {

  static  getImageCode(tag) {
    let attribs = tag.attribs;

    var imageType = this.getImageType(attribs.src);
    var height = attribs.height;
    var width = attribs.width;

    var imageBase64 = this.bufferFromBase64(attribs.src);

    var dimensions = this.getImageSize(imageBase64);

    // Need both width and height
    if (!width) {
      width = parseInt((height / dimensions.height * dimensions.width));
    }

    if (!height) {
      height = parseInt((width / dimensions.width * dimensions.width));
    }

    let ratio = 100;
    if (width > 1200) {
      // Resize so it doesn't exceed the max width of a page
      ratio = parseInt((1200 / width) * 100);
    }

    var bufString = this.getImageDataAsHex(imageBase64);


    // \picscalex80\picscaley80
    let result = `\\*\\shppict{\\pict\\picscalex${ratio}\\picscaley${ratio}${width ? '\\picw' + width : ''}${height ? '\\pich' + height : ''}${imageType} ${bufString}}}`;

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