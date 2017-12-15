function insertDino(dino){
  return '<div class="dino-card"><div class="card-content"><div class="card-img"><img src="' + dino.image + '" alt="a dinosaur picture"></div><div class="card-slide-box"><div class="card-slide-body"><h2>' + dino.name + '</h2><p>Attack: ' + dino.attack + '</p><p>Armor: ' + dino.armor + '</p><p>Favorite: ' + dino.favorite + '</p></div></div></div></div>'
}

function Dino(dinoName, dinoAttack, dinoArmor, dinoFavorite, dinoImage) {
  this.name = dinoName;
  this.attack = dinoAttack;
  this.armor = dinoArmor;
  this.favorite = dinoFavorite;
  this.image = dinoImage;
}

$(document).ready(function(){
  var dinos = JSON.parse(localStorage.dinoStorage) || [];
  $('button#load-dinos').click(function(){
    dinos.forEach(function(eachDino){
      $('.new-dino').append(insertDino(eachDino));
    });
  });
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
    localStorage.setItem("dinoStorage", JSON.stringify(dinos));
    $('.new-dino').append(insertDino(dino));
  });
});
