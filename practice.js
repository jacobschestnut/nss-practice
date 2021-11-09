const favoriteMovies = [
    {
        id: 1,
        title: "The Matrix",
        genre: "Action",
        year: 1999
    },
]

const addNewMovie = (id, title, genre, year) => {
    const newMovie = {
        id: id,
        title: title,
        genre: genre,
        year: year
    }
    favoriteMovies.push (newMovie)
}

addNewMovie(2, "The Lost Boys", "Horror", 1987)

console.log(favoriteMovies)

const function2 = () => {
    for (const movie of favoriteMovies) {
        if (movie.genre === "Horror") {
            console.log (`${movie.title} is scary.`)
        } else {
            console.log (`${movie.title} is not scary.`)
        }
    }
}

function2()

const function3 = (string1, string2, string3) => {
    return string1 + string2 + string3
}

console.log(function3("This is string1. ", "This is string2. ", "This is string3."))

const function4 = (number1, number2) => {
    console.log(number1 * number2)
}

function4(4, 12)

console.log(favoriteMovies[1].genre === "Horror" ? "It is scary." : "It is not scary.")