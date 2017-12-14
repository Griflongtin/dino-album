function insertDino(dino){
  return '<div class="dino-card"><div class="card-content"><div class="card-img"><img src="' + dino.image + '" alt="a dinosaur picture"></div><div class="card-slide-box"><div class="card-slide-body"></div></div></div></div>'
}


function Dino(dinoName, dinoAttack, dinoArmor, dinoFavorite, dinoImage) {
  this.name = dinoName;
  this.attack = dinoAttack;
  this.armor = dinoArmor;
  this.favorite = dinoFavorite;
  this.image = dinoImage;
}

$(document).ready(function(){
  var dinos = [];
  $('#new-dino').submit(function(event){
    console.log('submit');
    event.preventDefault();
    var dinoName = $('#dino-name').val();
    var dinoAttack = $('#dino-attack').val();
    var dinoArmor = $('#dino-armor').val();
    var dinoFavorite = $('#dino-favorite').val();
    var dinoImage = $('#dino-image').val();
    var dino = new Dino(dinoName, dinoAttack, dinoArmor, dinoFavorite, dinoImage);
    dinos.push(dino);
    console.log(dinos);
    $('#area-dino-fights').append(insertDino(dino));
  });
});
