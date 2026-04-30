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

## Decyzje projektowe

**Embedded vs. osobna kolekcja dla recenzji:**
Recenzje przechowujemy w osobnej kolekcji `reviews` (nie zagnieżdżone w filmie), ponieważ umożliwia to łatwe tworzenie unikalnego indeksu na parze `(movie_id, user_id)`, co zapewnia zasadę "jeden widz, jedna recenzja".

**Unikalność recenzji:**
Indeks `{ movie_id: 1, user_id: 1 }` z opcją `{ unique: true }` na kolekcji `reviews` uniemożliwia wstawienie drugiej recenzji tego samego użytkownika dla tego samego filmu na poziomie bazy danych.

**Reżyser i aktorzy:**
Reżyser (`director_id`) i aktorzy (`actor_ids`) to referencje do kolekcji `people`, co eliminuje duplikację danych osobowych.
