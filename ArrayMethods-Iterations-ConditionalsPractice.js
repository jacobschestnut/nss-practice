/* For each of the sections, consider the array and the method.  What would you expect the output to be? */

let letters = ['l', 's', 'a', 'r', 'd', 'f']

// // letters.sort()
// a, d, f, l, r, s
// console.log(letters)
// // letters.pop()
// l, s, a, r, d
// console.log(letters)
// // letters.push('q')
// l, s, a, r, d, f, q
// console.log(letters)
// // letters.shift()
// s, a, r, d, f
// console.log(letters)
// // letters.unshift('y')
// y, l, s, a, r, d, f
// console.log(letters)
// // letters.slice(1,2)
// l, s, a, r, d, f
// console.log(letters)

// let names = ['John', 'Mandeep', 'Ruby', 'Rose', 'Jackson']

// // names.concat(letters)
// John, Mandeep, Ruby, Rose, Jackson, l, s, a, r, d, f
// // names.join(' ')
// JohnMandeepRubyRoseJackson
// // names.reverse()
// Jackson, Rose, Ruby, Mandeep, John

let superheroes = ['Wonder Woman', 'Captain America', 'Spiderman', 'Batman', 'The Flash']

for (superhero of superheroes) {
  console.log(`${superhero} is a superhero!`)
}

// iterate over superheroes and console log the superhero's name in the following sentance "<NAME> is a superhero!".


let superheroesDetails = [
  {
    id: 1,
    name: 'Wonder Woman',
    isDC: true
  },
  {
    id: 1,
    name: 'Captain America',
    isDC: true
  },
  {
    id: 1,
    name: 'Batman',
    isDC: true
  },
  {
    id: 1,
    name: 'The Flash',
    isDC: true
  },
  {
    id: 1,
    name: 'Spiderman',
    isDC: false
  }
]

// iterate over superheroesDetails if the superhero is a DC character (isDC = true)  console log "<the heros name> is in the Justice League.".  Otherwise console log "<the heros name> is a superhero" in the following sentance "<NAME> is a superhero!".

for (superhero of superheroesDetails) {
  if (superhero.isDC === true) {
    console.log(`${superhero.name} is in the Justice League.`)
  } else {
    console.log(`${superhero.name} is a superhero!`)
  }
}

const animals = [
  {
    id: 3,
    name: "Rex",
    trait: "mischievous",
    species: "dog",
    isReal: true
  },
  {
    id: 9,
    name: "Joel",
    trait: "playful",
    species: "dog",
    isReal: true
  },
  {
    id: 5,
    name: "Cleo",
    trait: "friendly",
    species: "rat",
    isReal: true
  },
  {
    id: 8,
    name: "Draco",
    trait: "grumpy",
    species: "dragon",
    isReal: false
  },
  {
    id: 2,
    name: "George",
    trait: "curious",
    species: "monkey",
    isReal: true
  },
  {
    id: 1,
    name: "Peanut",
    trait: "needy",
    species: "cat",
    isReal: true
  },
  {
    id: 1,
    name: "Lexi",
    trait: "shy",
    species: "cat",
    isReal: true
  }
]

// iterate over animals and console log each animal by the following conditions:

animals.sort(function(a, b) {
  return parseFloat(a.id) - parseFloat(b.id);
});

for (animal of animals) {
  if (animal.species === "dragon") {
    console.log(`I am mythical.`)
  } else if (animal.species === "dog") {
    console.log(`I bark.`)
  } else if (animal.species === "monkey" || animal.species === "rat") {
    console.log(`I am a rat or monkey.`)
  } else if (animal.species === "cat" && animal.trait === "needy") {
    console.log(`I am Sydney's cat.`)
  } else {
    console.log(`${animal.name}, ${animal.trait}, ${animal.species}.`)
  }
}

// if the animal is a dragon console log "I am mythical."
// if the animal is a dog console log "I bark."
// if the animal is a monkey or a rat console log the animals name and "I am a rat or monkey."
// if the animal is a cat  is needy console log "I am Sydney's cat."
// if the animal does not meet any of the above conditions console log the animals name, trait and species


// BONUS:  Sort the array of animals by id.