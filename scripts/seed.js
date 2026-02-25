db = db.getSiblingDB('mongoflix');


db.movies.drop();
db.people.drop();
db.users.drop();
db.reviews.drop();

console.log("--- Start: Inicjalizacja bazy Mongoflix (Wersja z Hitami Kinowymi) ---");


db.people.insertMany([
    // Reżyserzy
    { _id: 1, name: "Christopher Nolan", birth_date: new Date("1970-07-30") },
    { _id: 2, name: "Rob Cohen", birth_date: new Date("1949-03-12") },
    { _id: 3, name: "Robert Zemeckis", birth_date: new Date("1952-05-14") },
    { _id: 4, name: "James Cameron", birth_date: new Date("1954-08-16") },
    { _id: 5, name: "Denis Villeneuve", birth_date: new Date("1967-10-03") },
    { _id: 6, name: "Joseph Kosinski", birth_date: new Date("1974-05-03") },
    { _id: 7, name: "Keenen Ivory Wayans", birth_date: new Date("1958-06-08") },
    // Aktorzy
    { _id: 8, name: "Cillian Murphy", birth_date: new Date("1976-05-25") },
    { _id: 9, name: "Robert Downey Jr.", birth_date: new Date("1965-04-04") },
    { _id: 10, name: "Vin Diesel", birth_date: new Date("1967-07-18") },
    { _id: 11, name: "Paul Walker", birth_date: new Date("1973-09-12") },
    { _id: 12, name: "Tom Hanks", birth_date: new Date("1956-07-09") },
    { _id: 13, name: "Leonardo DiCaprio", birth_date: new Date("1974-11-11") },
    { _id: 14, name: "Kate Winslet", birth_date: new Date("1975-10-05") },
    { _id: 15, name: "Timothée Chalamet", birth_date: new Date("1995-12-27") },
    { _id: 16, name: "Tom Cruise", birth_date: new Date("1962-07-03") },
    { _id: 17, name: "Anna Faris", birth_date: new Date("1976-11-29") }
]);


db.movies.insertMany([
    { _id: 101, title: "Oppenheimer", release_date: new Date("2023-07-21"), genres: ["Biography", "Drama", "History"], director_id: 1, actor_ids: [8, 9], access_type: "Premium", views_count: 45000 },
    { _id: 102, title: "Szybcy i Wściekli", release_date: new Date("2001-06-22"), genres: ["Action", "Crime", "Thriller"], director_id: 2, actor_ids: [10, 11], access_type: "Public", views_count: 55000 },
    { _id: 103, title: "Forrest Gump", release_date: new Date("1994-07-06"), genres: ["Drama", "Romance"], director_id: 3, actor_ids: [12], access_type: "Premium", views_count: 80000 },
    { _id: 104, title: "Titanic", release_date: new Date("1997-12-19"), genres: ["Drama", "Romance"], director_id: 4, actor_ids: [13, 14], access_type: "Premium", views_count: 120000 },
    { _id: 105, title: "Top Gun: Maverick", release_date: new Date("2022-05-27"), genres: ["Action", "Drama"], director_id: 6, actor_ids: [16], access_type: "Premium", views_count: 65000 }, 
    { _id: 106, title: "Dune: Part Two", release_date: new Date("2024-03-01"), genres: ["Action", "Sci-Fi", "Drama"], director_id: 5, actor_ids: [15], access_type: "Premium", views_count: 35000 },
    { _id: 107, title: "Incepcja", release_date: new Date("2010-07-16"), genres: ["Action", "Sci-Fi", "Thriller"], director_id: 1, actor_ids: [8, 13], access_type: "Public", views_count: 90000 },
    { _id: 108, title: "Straszny Film", release_date: new Date("2000-07-07"), genres: ["Comedy", "Horror"], director_id: 7, actor_ids: [17], access_type: "Public", views_count: 25000 },
    { _id: 109, title: "Avatar: Istota Wody", release_date: new Date("2022-12-16"), genres: ["Action", "Sci-Fi", "Adventure"], director_id: 4, actor_ids: [14], access_type: "Public", views_count: 75000 },
    { _id: 110, title: "Mroczny Rycerz", release_date: new Date("2008-07-18"), genres: ["Action", "Crime", "Drama"], director_id: 1, actor_ids: [8], access_type: "Premium", views_count: 95000 }
]);


db.users.insertMany([
    { _id: 501, username: "kinoFan99", email: "jan@mongoflix.pl", created_at: new Date() },
    { _id: 502, username: "popcorn_lover", email: "anna@mongoflix.pl", created_at: new Date() },
    { _id: 503, username: "fast_driver", email: "tomek@mongoflix.pl", created_at: new Date() }
]);


db.reviews.insertMany([
    { movie_id: 101, user_id: 501, rating: 10, review_text: "Oppenheimer to arcydzieło!", created_at: new Date() },
    { movie_id: 102, user_id: 503, rating: 9, review_text: "Szybcy i Wściekli to klasyk dzieciństwa.", created_at: new Date() },
    { movie_id: 104, user_id: 502, rating: 10, review_text: "Płakałam na końcu :(", created_at: new Date() },
    { movie_id: 108, user_id: 501, rating: 6, review_text: "Głupie, ale śmieszne.", created_at: new Date() }
]);

db.reviews.createIndex({ movie_id: 1, user_id: 1 }, { unique: true });

console.log("--- Sukces: Mongoflix gotowy do pracy! ---");