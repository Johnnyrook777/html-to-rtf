const should  = require('should');
const Rtf     = require('./rtf.class');
const Style   = require('../style/style.class');
const Color   = require('../color/color.class');
const fs 			= require('fs');

describe('ApolloScribe_H1', () => {
  it('convertHtmlToRtf()', () => {
    var html = `
    <html>
    <body>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
    </body>
  </html>`;

    let rtf = new Rtf();
    let rtfTest = fs.readFileSync(__dirname + '/ApolloScribe_H1-test.rtf', 'utf8');

    should(rtf.convertHtmlToRtf(html)).be.equal(rtfTest);
  });


});