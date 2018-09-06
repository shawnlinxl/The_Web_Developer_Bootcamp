var movie_db = [
    {
        name: "Ocean's 8",
        watched: true,
        rating: 4,
    },
    {
        name: "Grand Budapest Hotel",
        watched: true,
        rating: 5,
    },
    {
        name: "Mission Impossible: Fallout",
        watched: false,
        rating: 3,
    },
    {
        name: "The sound of music",
        watched: true,
        rating: 5,
    }
];

movie_db.forEach(function(entry) {
    watched = entry.watched? "have watched" : "haven't watched";
    console.log("You " + watched + " " + entry.name + ". It has an average rating of " +  entry.rating + " stars.");
})