const repeatString = function(string, times) {
    let repeatedString = "";
    while (times > 0) {
      repeatedString += string;
      times--;
    }
    return repeatedString;
  }

  // Cela aide vraiment de d'effectuer une comparaison pour voir si le compteur est plus élevé et de décrémenter.
  // Comme ça, la boucle part de plus haut et valide les tests.

// Do not edit below this line
module.exports = repeatString;
