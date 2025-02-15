class MyString {
  static removeCharacterOfEscapeInAllString(stringValue, stringOfEscape) {
    let listOfEscape = this.removeCharacterOfEscapeNotAllowed(stringOfEscape);
    let newstringValue = '';

    if(listOfEscape == undefined)
      return stringValue;
      
    Array.from(stringValue).forEach(element => {
      if(!listOfEscape.includes(element))
        newstringValue += element;
    });

    

    return newstringValue;
  }

  static removeEmptyWhiteSpaceChars(input) {
    // Remove empty white space
    input = decodeURIComponent(encodeURIComponent(input).replace('%E2%80%8B', ''));

    return input;
  }

  static convertOneCharInHexToDec(value) {
    if(value.length != 1)
      return undefined;

    else if(value >= '0' && value <= '9')
      return value;

    else if(value.toUpperCase() >= 'A' && value.toUpperCase() <= 'F') {
      value = value.toUpperCase();
      let number;
      switch(value) {
        case 'A': number = '10'; break;
        case 'B': number = '11'; break;
        case 'C': number = '12'; break;
        case 'D': number = '13'; break;
        case 'E': number = '14'; break;
        case 'F': number = '15'; break;
      }
      return number;
    }
    else
      return undefined;
  }

  static removeCharacterOfEscapeNotAllowed(stringOfEscape) {
    let listOfCharacterOfEscape = ['\n', '\r', '\t', '\f'];
    let newStringOfEscape = [];

    Array.from(stringOfEscape).forEach(elem => {
      if(listOfCharacterOfEscape.includes(elem))
        newStringOfEscape.push(elem);
    });

    

    return newStringOfEscape.length > 0 ? newStringOfEscape : undefined;
  }

  static hasOnlyWhiteSpace(content) {
    // Remove empty white space strings
    //content = decodeURIComponent(encodeURIComponent(content).replace('%E2%80%8B', ''));
    return (content.replace(/\s/g, '').length == 0) ? true : false;
  } 

}
module.exports = MyString;