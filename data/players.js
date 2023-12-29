export async function loadPlayers() {
    const response = await fetch('https://hockeyplayers.systementor.se/stefan/player');
    const players = await response.json();
  
    return players
  }

  export async function addPlayer(player) {
    console.log(JSON.stringify(player))
    const response = await fetch('https://hockeyplayers.systementor.se/stefan/player',{
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        method:"POST",
       body:JSON.stringify(player)
    });
    console.log(response)
  }  


  export async function updatePlayer(player) {
    const response = await fetch('https://hockeyplayers.systementor.se/stefan/player/'+player.id,{
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        method:"PUT",
       body:JSON.stringify(player)
    });
    console.log(response)
  }    