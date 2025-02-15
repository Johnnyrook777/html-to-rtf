const should   = require('should');
const HtmlTags = require('./html-tags.module');

describe('HtmlTagsTest', () => {
  it('Length of module', () => {
    should(HtmlTags.length).be.equal(39);
  });
  
  HtmlTags.forEach(element => {
    if(element.opening == 'b') {
      it(`<b></b>`, () => {
        should(element.closing).be.equal('/b');
        should(element.openingRtf).be.equal('{\\b');
        should(element.closingRtf).be.equal('}');
      });
    }

    else if(element.opening == 'br') {
      it(`<br> || <br/>`, () => {
        should(element.closing).be.equal('br/');
        should(element.openingRtf).be.equal('\\line');
        should(element.closingRtf).be.equal('');
      });
    }

    else if(element.opening == 'center') {
      it(`<center></center>`, () => {
        should(element.closing).be.equal('/center');
        should(element.openingRtf).be.equal('{\\pard\\qr');
        should(element.closingRtf).be.equal('\\par}');
      });
    }

    else if(element.opening == 'div') {
      it(`<div></div>`, () => {
        should(element.closing).be.equal('/div');
        should(element.openingRtf).be.equal('{\\pard');
        should(element.closingRtf).be.equal('\\par}');
      });
    }

    else if(element.opening == 'font') {
      it(`<font></font>`, () => {
        should(element.closing).be.equal('/font');
        should(element.openingRtf).be.equal('{');
        should(element.closingRtf).be.equal('}');
      });
    }

    else if(element.opening == 'h1') {
      it(`<h1></h1>`, () => {
        should(element.closing).be.equal('/h1');
        should(element.openingRtf).be.equal('{\\pard\\sb240\\sa120\\fs32\\b\\ul');
        should(element.closingRtf).be.equal('\\par}');
      });
    }

    else if(element.opening == 'h2') {
      it(`<h2></h2>`, () => {
        should(element.closing).be.equal('/h2');
        should(element.openingRtf).be.equal('{\\pard\\sb240\\sa120\\fs28\\i\\b');
        should(element.closingRtf).be.equal('\\par}');
      });
    }

    else if(element.opening == 'h3') {
      it(`<h3></h3>`, () => {
        should(element.closing).be.equal('/h3');
        should(element.openingRtf).be.equal('{\\pard\\sb240\\sa120\\fs28\\b');
        should(element.closingRtf).be.equal('\\par}');
      });
    }

    else if(element.opening == 'h4') {
      it(`<h4></h4>`, () => {
        should(element.closing).be.equal('/h4');
        should(element.openingRtf).be.equal('{\\pard\\sb240\\sa120\\fs23\\i\\b');
        should(element.closingRtf).be.equal('\\par}');
      });
    }

    else if(element.opening == 'h5') {
      it(`<h5></h5>`, () => {
        should(element.closing).be.equal('/h5');
        should(element.openingRtf).be.equal('{\\pard\\sb240\\sa120\\fs23\\b');
        should(element.closingRtf).be.equal('\\par}');
      });
    }

    else if(element.opening == 'h6') {
      it(`<h6></h6>`, () => {
        should(element.closing).be.equal('/h6');
        should(element.openingRtf).be.equal('{\\pard\\sb240\\sa120\\fs21\\b');
        should(element.closingRtf).be.equal('\\par}');
      });
    }

    else if(element.opening == 'i') {
      it(`<i></i>`, () => {
        should(element.closing).be.equal('/i');
        should(element.openingRtf).be.equal('{\\i');
        should(element.closingRtf).be.equal('}');
      });
    }

    else if(element.opening == 'li') {
      it(`<li></li>`, () => {
        should(element.closing).be.equal('/li');
        should(element.openingRtf).be.equal('{\\pntext\\li100\\bullet}{\\tab}');
        should(element.closingRtf).be.equal('\\par');
      });
    }

    else if(element.opening == 'p') {
      it(`<p></p>`, () => {
        should(element.closing).be.equal('/p');
        should(element.openingRtf).be.equal('{\\pard');
        should(element.closingRtf).be.equal('\\par}');
      });
    }

    else if(element.opening == 'ol') {
      it(`<ol></ol>`, () => {
        should(element.closing).be.equal('/ol');
        should(element.openingRtf).be.equal('{{\\*\\pn\\pnlvlbody\\pnf0\\pnindent0\\pnstart1\\pndec{\\pntxta.}}\\fi-360\\li720\\sa200\\sl276\\slmult1');
        should(element.closingRtf).be.equal('}');
      });
    }

    else if(element.opening == 's') {
      it(`<s></s>`, () => {
        should(element.closing).be.equal('/s');
        should(element.openingRtf).be.equal('{\\strike');
        should(element.closingRtf).be.equal('}');
      });
    }

    else if(element.opening == 'span') {
      it(`<span></span>`, () => {
        should(element.closing).be.equal('/span');
        should(element.openingRtf).be.equal('{');
        should(element.closingRtf).be.equal('}');
      });
    }

    else if(element.opening == 'sub') {
      it(`<sub></sub>`, () => {
        should(element.closing).be.equal('/sub');
        should(element.openingRtf).be.equal('{\\sub');
        should(element.closingRtf).be.equal('}');
      });
    }

    else if(element.opening == 'sup') {
      it(`<sup></sup>`, () => {
        should(element.closing).be.equal('/sup');
        should(element.openingRtf).be.equal('{\\super');
        should(element.closingRtf).be.equal('}');
      });
    }

    else if(element.opening == 'strong') {
      it(`<strong></strong>`, () => {
        should(element.closing).be.equal('/strong');
        should(element.openingRtf).be.equal('{\\b');
        should(element.closingRtf).be.equal('}');
      });
    }

    else if(element.opening == 'table') {
      it(`<table></table>`, () => {
        should(element.closing).be.equal('/table');
        should(element.openingRtf).be.equal('{');
        should(element.closingRtf).be.equal('}');
      });
    }

    else if(element.opening == 'td') {
      it(`<td></td>`, () => {
        should(element.closing).be.equal('/td');
        should(element.openingRtf).be.equal('{\\pard\\intbl\\qc');
        should(element.closingRtf).be.equal('\\cell}');
      });
    }

    else if(element.opening == 'th') {
      it(`<th></th>`, () => {
        should(element.closing).be.equal('/th');
        should(element.openingRtf).be.equal('{\\pard\\intbl\\qc');
        should(element.closingRtf).be.equal('\\cell}');
      });
    }

    else if(element.opening == 'tr') {
      it(`<tr></tr>`, () => {
        should(element.closing).be.equal('/tr');
        should(element.openingRtf).be.equal('{\\trowd\\trgaph10');
        should(element.closingRtf).be.equal('\\row}');
      });
    }

    else if(element.opening == 'u') {
      it(`<u></u>`, () => {
        should(element.closing).be.equal('/u');
        should(element.openingRtf).be.equal('{\\ul');
        should(element.closingRtf).be.equal('}');
      });
    }

    else if(element.opening == 'ul') {
      it(`<ul></ul>`, () => {
        should(element.closing).be.equal('/ul');
        should(element.openingRtf).be.equal('{{\\*\\pn\\pnlvlblt\\pnf1\\pnindent0{\\pntxtb\\\'B7}}\\fi-360\\li720\\sl276\\slmult1\\lang22\\f0\\fs22');
        should(element.closingRtf).be.equal('}');
      });
    }
  });
});