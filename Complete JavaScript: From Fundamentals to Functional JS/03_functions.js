// A function is an object that does something, can assign them as variables and pass them around
// arguments returns all of the arguments in an array like object, you can't use some array functions

// function with capital means it's a constructor

function AnimalMaker (name) {
  return {
    speak: function () {
      console.log('my name is', name)
    },
    name: name,
    owner: 'Matt'
  } // object literal
}

var animalNames = ['Chameleon', 'Frog', 'Dog']

var farm = []

for (var i = 0; i < animalNames.length; i++) {
  farm.push(AnimalMaker(animalNames[i]))
}

for (i = 0; i < farm.length; i++) {
  farm[i].speak()
}
