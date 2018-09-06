var movie_db = [
    {
        name: "Ocean's 8",
        seen: true,
        rating: 4,
    },
    {
        name: "Grand Budapest Hotel",
        seen: true,
        rating: 5,
    },
    {
        name: "Mission Impossible: Fallout",
        seen: false,
        rating: 3,
    },
    {
        name: "The sound of music",
        seen: true,
        rating: 5,
    }
];

movie_db.forEach(function(movie) {
    
    console.log(build_string(movie));
});

function build_string(movie) {

    result = "You ";
    result += movie.seen? "have seen \"" : "haven't seen \"";
    result += movie.name + "\". ";
    result += "It has an average rating of " + movie.rating + " stars.";

    return result;
}