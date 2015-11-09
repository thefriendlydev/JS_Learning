/* https://github.com/bgando/object-exercises/ */

var animal = {}

animal.username = 'Chameleon007'
animal['tagline'] = 'when you see me it\'ll be to late!'

var noises = []
animal.noises = noises

console.log(animal)

var count = 0
for (var key in animal) {
  count++
  if (key === 'username') {
    console.log('Hi my name is ' + animal[key])
  } else if (key === 'tagline') {
    console.log('I like to say ' + animal[key])
  }
}

/* What happens if you return 'Hi my name is ' + ___ instead of using console.log() inside the loop? */
// You wouldn't print the 'I like to say ' statement because you've returned from the loop