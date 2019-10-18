function decryptCaesar(message) {
  const lowerString = message.toLowerCase()
  const alphabets = ['a', 'b' , 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'å', 'ä', 'ö'];
  for(var i = 1; i < 29; i++) {
    let decryptedString = "";
    for(var j = 0; j < lowerString.length; j++) {
      const shift = (29 - i) % 29
      if(lowerString.charAt(j) === ' ' || lowerString.charAt(j) === '.'){
        decryptedString += lowerString.charAt(j)
      } else {
        const charFromArray = alphabets.indexOf(lowerString.charAt(j));
        const decryptedAplhabetValue= (charFromArray + shift) % 29
        const decryptedAlphabet= alphabets[decryptedAplhabetValue];
        decryptedString += decryptedAlphabet
      }
    }
    if(checkDictionary(decryptedString)) {
      return decryptedString;
    }
  }
  return 'Wont decrypt with any key: ' + message;
};

function checkDictionary(string) {
  const wordArray = string.split(" ");
  const dictionary = ['neljän', 'mutta', 'koska', 'osan', 'kun', 'kuin','minä', 'sinä', 'miksi', 'kuka', 'jopa', 'käyty', 'ollut', 'enemmän', 'raha', 'siellä', 'täällä', 'tuolla', 'saanut', 'samat' , 'ilman' ,
  'myös', 'asti', 'aika', 'mukaan', 'kun', 'ei', 'kyllä', 'jos', 'ehkä', 'on' ,'se', 'ilman', 'voi', 'olla', 'auton', 'pian', 'ovat', 'että', 'ja' ,'tai', 'oli', 'saivat', 'ottaa', 'muun', 'josta', 'tulee', 'niin', 'jolla',
  'ole', 'vain', 'alta', 'etsineet', 'tehdä', 'lisäksi', 'moni']
  const foundWords = [];
  dictionary.forEach((wordInDictionary) => wordArray.forEach((inComingWord) => {
    if(wordInDictionary === inComingWord) {
      foundWords.push(inComingWord);
    }
  }));
  if (foundWords.length >= 2){
    return true;
  }
  return false;
}

export {decryptCaesar}