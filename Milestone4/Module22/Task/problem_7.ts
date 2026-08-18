// Problem statement: Create a 'Movie' interface with title: string, rating: number, and director?: string.
// Create two movie objects — one with the 'director' property, and one without.
// Write a function named 'printMovieTitle' that takes a Movie object as a parameter and logs its title.

// Inputs to use for your objects: 
// 1. { title: "Inception", rating: 9.0, director: "Christopher Nolan" }
// 2. { title: "The Matrix", rating: 8.7 }

// Expected Output:
// Inception
// The Matrix


// Write your code below:
// Step 1: Create the 'Movie' interface
// ...

// Step 2: Create two objects using the interface
// ...

// Step 3: Write the function
// ...

// Step 4: Call the function for both objects
// ...




interface Movie {
    title: string;
    rating: number;
    director?: string
}


let mov1: Movie = {
    title: 'Inception',
    rating: 9.0,
    director: 'christopher Nolen'
}

let mov2: Movie = {
    title: 'The Matrix',
    rating: 8.7
}



const printMovieTitle = (item: Movie) =>{
    console.log(item.title);
    
}

printMovieTitle(mov1)
printMovieTitle(mov2)