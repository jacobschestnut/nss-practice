/*
  Use your newfound JavaScript skills to log the requested phrases to the console.

  While you can make everything a string, practice use the variables for any value availble.
  */

  // example:
  const example = {
    id: 4,
    isExample: true,
    text: "example",
    city: "Nashville",
    state: "TN"
  }

  // Output "Nashville"
      console.log(example.city)
  
  // Output "Nasvhille is in TN."
      console.log(`${example.city} is in ${example.state}.`)

const findTheMonkey = [2, "George", "curious", "monkey", true]

// Output "George"
      console.log(findTheMonkey[1])
// Output 2
      console.log(findTheMonkey[0])
// Output true
      console.log(findTheMonkey[4])
// Output "monkey"
      console.log(findTheMonkey[3])
// Output "The monkey is curious."
      console.log("The " + findTheMonkey[3] + " is " + findTheMonkey[2] + ".")
// Output "George is a monkey."
      console.log(findTheMonkey[1] + " is a " + findTheMonkey[3] + ".")

const findTheMonkey2 = {
  id: 2,
  name: "George",
  trait: "curious",
  species: "monkey",
  isReal: true
}

// Output "George"
      console.log(findTheMonkey2.name)
// Output 2
      console.log(findTheMonkey2.id)
// Output true
      console.log(findTheMonkey2.isReal)
// Output "monkey"
      console.log(findTheMonkey2.species)
// Output "The monkey is curious."
      console.log("The " + findTheMonkey2.species + " is " + findTheMonkey2.trait + ".")
// Output "George is a monkey."
      console.log(findTheMonkey2.name + " is a " + findTheMonkey2.species + ".")

const findTheMonkey3 = [
  {
    id: 3,
    name: "Rex",
    trait: "mischievous",
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
  }
]

// Output "monkey"
      console.log(findTheMonkey3[3].species)
// Output "The monkey is George."
      console.log(`The ${findTheMonkey3[3].species} is ${findTheMonkey3[3].name}.`)
// Output "Peanut is a cat."
      console.log(`${findTheMonkey3[4].name} is a ${findTheMonkey3[4].species}.`)
// Output "Cleo is friendly."
      console.log(`${findTheMonkey3[1].name} is ${findTheMonkey3[1].trait}.`)
// output "Rex is a mischievous dog."
      console.log(`${findTheMonkey3[0].name} is a ${findTheMonkey3[0].trait} ${findTheMonkey3[0].species}.`)