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
      <h3 templateid="Jb587XSd7fET94Q43xDA" title="Template: Jb587XSd7fET94Q43xDA">Presenting Complaint</h3><ul templateid="Zq3iaqQJ9l5xiNUyuhsN" title="Template: Zq3iaqQJ9l5xiNUyuhsN"><li title="Template: Zq3iaqQJ9l5xiNUyuhsN" templateid="Zq3iaqQJ9l5xiNUyuhsN">Otalgia</li></ul><h3 templateid="gSDaM98aPzxwwiHKdVke" title="Template: gSDaM98aPzxwwiHKdVke">Plan</h3><p><span templateid="fDLRw4VZNV8A1crP7biW" title="Template: fDLRw4VZNV8A1crP7biW">&nbsp;</span><br class="k-br" templateid="fDLRw4VZNV8A1crP7biW" title="Template: fDLRw4VZNV8A1crP7biW"></p><p><span templateid="VbyCR3URPJkVNsrfnXl1" title="Template: VbyCR3URPJkVNsrfnXl1">Dear Billy,</span><br class="k-br" templateid="VbyCR3URPJkVNsrfnXl1" title="Template: VbyCR3URPJkVNsrfnXl1"></p><p><span templateid="M7QetYonT13W55xhavnO" title="Template: M7QetYonT13W55xhavnO">Thanks for referring Eloise Walls, a 3 year old girl for her ENT consultation. </span></p><h3 templateid="Q7VqCPbcq9PsLwubdwPL" title="Template: Q7VqCPbcq9PsLwubdwPL">Background</h3><h4 templateid="YmdZ2IN5GcoKWxmZeLCY" title="Template: YmdZ2IN5GcoKWxmZeLCY">Ears and Hearing</h4><h3 templateid="VEubbR8r9f95SZFtrfSw" title="Template: VEubbR8r9f95SZFtrfSw">General Medical History</h3><p><span templateid="krahg8YKIcJqzmwd7nsG" title="Template: krahg8YKIcJqzmwd7nsG">Eloise has not indicated any previous ENT issues requiring treatment. </span></p><p><span templateid="GcVROK3TR9iLpA0vtteQ" title="Template: GcVROK3TR9iLpA0vtteQ">Eloise has a history of bronchiolitis, bronchiectasis and asthma. </span><span templateid="KSC4jSUdpBrabRwUN5TP" title="Template: KSC4jSUdpBrabRwUN5TP">She has indicated that she has exertional symptoms of wheeze. </span><span templateid="FKFj9wFPQMUZ3mZCgrZ5" title="Template: FKFj9wFPQMUZ3mZCgrZ5">She has been admitted to hospital requiring admission to the high dependency ward to treat an exacerbation of asthma in the past. </span><span templateid="noqqlnUbCwkxOtD5TUA6" title="Template: noqqlnUbCwkxOtD5TUA6">She is currently using a preventer and reliever regularly . </span><span templateid="3ml6gRlc87BPGgfjZm9V" title="Template: 3ml6gRlc87BPGgfjZm9V">Cardiovascular issues include a history of hypertension. </span></p><h3 templateid="pyHKo5RWastdZsK9DNWl" title="Template: pyHKo5RWastdZsK9DNWl">Summary</h3><p><br class="k-br modified" templateid="--Letter Suffix--"><br class="k-br"></p>
    </body>
  </html>`;

    let rtf = new Rtf();
    let rtfTest = fs.readFileSync(__dirname + '/ApolloScribe-test.rtf', 'utf8');

    should(rtf.convertHtmlToRtf(html)).be.equal(rtfTest);
  });


});