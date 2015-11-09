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


/* https://github.com/bgando/array-exercises/ */
var noiseArray = ['ribbit']

noiseArray.unshift('croak')
noiseArray.push('caw')

noiseArray[3] = 'moo'

console.log(noiseArray.length)
console.log(noiseArray[noiseArray.length - 1])

animal.noises = noiseArray // nested data structure

// What are the different ways you can add properties and values to arrays?
// You can add items using bracket notation or via the methods special to an array like push and unshift

// What are the different ways you can add properties and values to arrays?
//  You could use array[array.length] = 'new value' or array.push('new value')

var animals = []
animals.push(animal)

var quackers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] }
animals[animals.length] = quackers

animals.push({ username: 'Sassy', tagline: 'Sweetpea is sooooo lame', noises: ['squeek', 'huff', 'sneeze', 'growl'] })
animals.push({ username: 'Sweetpea', tagline: 'Whaaaaattttt?', noises: ['ruff', 'rawr', 'click', 'zing'] })
