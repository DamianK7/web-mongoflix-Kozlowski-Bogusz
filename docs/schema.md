## 1. Kolekcja: `movies`
| Pole           | Typ                 | Opis                                           | Przykład                  |
| :------------- | :------------------ | :--------------------------------------------- | :------------------------ |
| `title`        | **String**          | Tytuł filmu.                                   | `"Mongoflix Origins"`     |
| `release_date` | **Date**            | Data wejścia do kin.                           | `ISODate("2023-10-12")`   |
| `genres`       | **Array<String>**   | Film może mieć wiele gatunków.                 | `["Komedia", "Horror"]`   |
| `director_id`  | **ObjectId**        | Referencja do `people._id`.                    | `ObjectId("507f1f...")`   |
| `actor_ids`    | **Array<ObjectId>** | Lista aktorów (referencje do `people`).        | `[ObjectId("609a3c...")]` |
| `access_type`  | **String (enum)**   | `"Public"` lub `"Premium"`.                    | `"Premium"`               |
| `views_count`  | **Int (>=0)**       | Licznik odtworzeń. Aktualizowany przez `$inc`. | `15432`                   |
| `created_at`   | **Date**            | Data dodania filmu.                            | `ISODate("2024-01-01")`   |


## 2. Kolekcja: `people`
| Pole         | Typ        | Opis                          | Przykład                |
| :----------- | :--------- | :---------------------------- | :---------------------- |
| `name`       | **String** | Imię i nazwisko osoby.        | `"Anna Nowak"`          |
| `birth_date` | **Date**   | Data urodzenia (opcjonalnie). | `ISODate("1985-04-12")` |


## 3. Kolekcja: `users`
| Pole         | Typ                 | Opis                     | Przykład                |
| :----------- | :------------------ | :----------------------- | :---------------------- |
| `username`   | **String (unique)** | Unikalna nazwa widza.    | `"kinoFan99"`           |
| `email`      | **String**          | Adres email użytkownika. | `"jan@mongoflix.pl"`    |
| `created_at` | **Date**            | Data rejestracji.        | `ISODate("2025-02-10")` |


## 4. Kolekcja: `reviews`
| Pole          | Typ            | Opis                         | Przykład                |
| :------------ | :------------- | :--------------------------- | :---------------------- |
| `movie_id`    | **ObjectId**   | Referencja do `movies._id`.  | `ObjectId("507f1f...")` |
| `user_id`     | **ObjectId**   | Referencja do `users._id`.   | `ObjectId("609a3c...")` |
| `rating`      | **Int (1–10)** | Ocena filmu w zakresie 1–10. | `8`                     |
| `review_text` | **String**     | Krótka recenzja.             | `"Świetny klimat!"`     |
| `created_at`  | **Date**       | Data dodania opinii.         | `ISODate("2025-02-11")` |
