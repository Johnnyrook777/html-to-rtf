
class Image {
  static  getImageCode(tag) {
    let attribs = tag.attribs;

    var imageType = this.getImageType(attribs.src);
    var height = attribs.height;
    var width = attribs.width;

    var bufString = this.getImageData(attribs.src);

    let result = `\\*\\shppict{\\pict${width ? '\\picw' + width : ''}${height ? '\\pich' + height : ''}${imageType} ${bufString}}}`;

    return result;
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

  static getImageData(src) {
    src = src.substring(src.indexOf('base64,') + 7);

    const buffer = Buffer.from(src, 'base64');
    const bufString = buffer.toString('hex');

    return bufString;
  }
}

module.exports = Image;