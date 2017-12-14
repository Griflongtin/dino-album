function Dino(dinoName, dinoAttack, dinoArmor, dinoFavorite) {
  this.name = dinoName;
  this.attack = dinoAttack;
  this.armor = dinoArmor;
  this.favorite = dinoFavorite;
}

$(document).ready(function(){
  var dinos = [];
  $('#new-dino').submit(function(event){
    event.preventDefault();
    var dinoName = $('#dino-name').val();
    var dinoAttack = $('#dino-attack').val();
    var dinoArmor = $('#dino-armor').val();
    var dinoFavorite = $('#dino-favorite').val();
    var dino = new Dino(dinoName, dinoAttack, dinoArmor, dinoFavorite);
    dinos.push(dino);
  });
});
