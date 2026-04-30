db = db.getSiblingDB("mongoflix");

// 1. Filmy z kategorii "Action" po 2020 roku
printjson(
  db.movies
    .aggregate([
      {
        $match: {
          genres: "Action",
          release_date: { $gt: new Date("2020-01-01") },
        },
      },
      { $project: { title: 1, release_date: 1, genres: 1 } },
    ])
    .toArray()
);

// 2. Średnia ocen dla każdego filmu
printjson(
  db.reviews
    .aggregate([
      {
        $group: {
          _id: "$movie_id",
          avg_rating: { $avg: "$rating" },
          review_count: { $sum: 1 },
        },
      },
      { $sort: { avg_rating: -1 } },
    ])
    .toArray()
);

// 3. Łączna liczba wyświetleń per reżyser
printjson(
  db.movies
    .aggregate([
      {
        $group: {
          _id: "$director_id",
          total_views: { $sum: "$views_count" },
        },
      },
      { $sort: { total_views: -1 } },
    ])
    .toArray()
);
