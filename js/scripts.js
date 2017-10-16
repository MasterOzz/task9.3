var txt = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';

var dinosaurUpperCased = dinosaur.toUpperCase();
//console.log(dinosaurUpperCased);

var txtCharsAfter = txt.replace('Velociraptor',dinosaurUpperCased);
//console.log(txtCharsAfter);

var txtCharsAfter = txtCharsAfter.substr(0,txtCharsAfter.length/2);
console.log(txtCharsAfter);
