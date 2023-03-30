const should  = require('should');
const fs 			= require('fs');
const Rtf     = require('../rtf/rtf.class');

describe('ImageTest', () => {
  it('appendPNG', () => {
    let imgHTML = fs.readFileSync(__dirname + '/appendPNG.html', 'utf8');
    let imgTest = fs.readFileSync(__dirname + '/appendPNG.rtf', 'utf8');

    let rtf = new Rtf();

    should(rtf.convertHtmlToRtf(imgHTML)).be.equal(imgTest);
  });
});
