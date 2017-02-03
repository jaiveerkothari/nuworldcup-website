window.onload = function() {

  // Initialize the playerNumber
  var playerNumber = 3;

  // Select the add_player button
  var addButton = document.getElementById("add_player");

  // Select the table element
  var playerTable = document.getElementById("players");

  // Attach handler to the button click event
  addButton.onclick = function() {

    if (playerNumber<16){
      var newdiv = document.createElement('div');
      newdiv.innerHTML = '<div class="container"><div class="row"><div class="col-sm-3">Player '+playerNumber+' Name* <br/> <input type="text" name="player'+playerNumber+'" > </div><div class="col-sm-3">Player '+playerNumber+' Email* <br><input type="text" name="player'+playerNumber+'" > </div><div class="col-sm-3">Has Player '+playerNumber+' ever been on the Northwestern Club Soccer Roster?<br><input type="radio" name="clubsoccer" value="clubsocceryes"> Yes<input type="radio" name="clubsoccer" value="clubsoccerno"> No </div></div></div>';
      document.getElementById('players').appendChild(newdiv);
      playerNumber++;
    }
    else {
      alert("Max 16 players");
    }
  }


};
