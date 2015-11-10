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

/* https://github.com/bgando/function-exercises/ */
// questions 1/2
var AnimalTestUser = function (username) {
  var numArgs = arguments.length
  if (numArgs === 1) {
    return {
      username: username
    }
  } else if (numArgs > 1) {
    var otherArgs = []
    for (var i = 1; i < numArgs; i++) {
      otherArgs.push(arguments[i])
    }

    return {
      username: username,
      otherArgs: otherArgs
    }
  } else {
    console.log('Opps we need some arguments!')
  }
}

var testSheep = AnimalTestUser('CottonBall', {'loves dancing': true}, [1, 2, 3])
console.log(testSheep)

// question 3
var AnimalCreator = function (username, species, tagline, noises) {
  return {
    username: username,
    species: species,
    tagline: tagline,
    noises: noises,
    friends: []
  }
}

var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew'])
console.log(sheep)

var chameleon = AnimalCreator('Pascal', 'chameleon', 'You will never find me!', ['smack', 'blah', 'nomnomnom'])
var dog = AnimalCreator('Sassy', 'pomeranian', 'I am the best!', ['woof', 'bark', 'chomp'])

// questions 4/5
var addFriend = function (animal, friend) {
  animal.friends.push(friend.username)
}
addFriend(sheep, chameleon)
addFriend(sheep, dog)
console.log(sheep)

// question 6
var myFarm = [sheep, dog, chameleon]
addFriend(chameleon, sheep)
addFriend(chameleon, dog)
addFriend(dog, chameleon)
console.log(myFarm)

// question 7
var addMatchesArray = function (farm) {
  for (var i = 0; i < farm.length; i++) {
    farm[i].matches = []
  }
}
addMatchesArray(myFarm)

// question 8
var giveMatches = function (farm) {
  for (var i = 0; i < farm.length; i++) {
    farm[i].matches.push(farm[i].friends[0])
  }
}
giveMatches(myFarm)
console.log(myFarm[0])

/* https://github.com/bgando/nested-data-exercises */
var friends = []
friends.push(animals[0].username, animals[1].username)
console.log(friends)

var relationships = {}
relationships.friends = friends
console.log(relationships)
console.log(Object.keys(relationships).length)

var matches = []
relationships.matches = matches
relationships.matches.push(animals[2].username)
console.log(relationships)

for (i = 0; i < animals.length; i++) {
  animals[i].relationships = relationships
}
console.log(animals)