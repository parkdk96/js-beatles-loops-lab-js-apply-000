// add solution here
function theBeatlesPlay(musicians, instruments) {
  var theBand = [];
  var whatTheyPlay = ""
  for (var i = 0; i < musicians.length; i++) {
    whatTheyPlay = musicians[i] + " plays " + instruments[i];
    theBand.push(whatTheyPlay)
  }
  return theBand;
}


