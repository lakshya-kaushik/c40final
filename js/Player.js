class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    //rank property is tell us which player reaches the end first,second,third,fourth
    this.rank=null;
  }
  //reads the value of vcars at the end from the database and store it at the rank of the player 
  //carsatend is the number of the cars that reach the end of the track 
  getCarsAtEnd(){
    database.ref('CarsAtEnd').on("value",(data)=>{
     this.rank = data.val();
    })
  }
  //this function is common to all the object, so we write static
  //update the number of the cars that have fineched the race
  static updateCarsAtEnd(rank){
    database.ref('/').update({
      CarsAtEnd: rank
    });
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
