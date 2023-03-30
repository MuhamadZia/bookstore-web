# bookstore-web
Welcome to Book Store, where you can find ur desire books
<br>
<br>

# Introduction

Book Store was built from the ground-up with a JSON API that makes it easy for people to find a book they like.
<br>
<br>
# API

## Books API
```http
GET URL/book
```
```http
POST URL/book/add
```
```http
GET URL/delete/:id
```
```http
POST URL/book/update:id
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `integer` | **Required**. ID of Book |

## Author API
```http
GET URL/author
```
```http
POST URL/author/add
```
```http
GET URL/author/delete/:id
```
```http
POST URL/author/update:id
```
```http
GET URL/author/information/:id
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `integer` | **Required**. ID of Author |

## Genre API
```http
GET URL/book
```
```http
POST URL/author/add
```
```http
GET URL/author/delete/:id
```
```http
POST URL/author/update:id
```
```http
GET URL/genre/information/:id
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `integer` | **Required**. ID of Genre |

## Responses
Book Store returns a JSON response in the following format:


```http
GET URL/book
```
```javascript
{
    "book_id": 36,
    "genre_id": 1,
    "createdAt": "2023-03-30T17:13:35.785Z",
    "updatedAt": "2023-03-30T17:13:35.785Z",
    "book": {
        "id": 3,
        "name": "Boku no Hero 36",
        "price": "30000",
        "book_id": 36,
        "pages": 200,
        "rating": "11",
        "createdAt": "2023-03-30T17:13:35.744Z",
        "updatedAt": "2023-03-30T17:13:35.744Z"
     },
    "genre": {
        "id": 1,
        "name": "Manga",
        "genre_id": 1,
        "createdAt": "2023-03-30T16:45:01.340Z",
        "updatedAt": "2023-03-30T16:45:01.340Z"
    }
},
```
<br>

```http
GET URL/author
```
```javascript
{
    "id": 1,
    "name": "Kohei Horikoshi",
    "gender": "Male",
    "author_id": 1,
    "country_code": "JPN",
    "createdAt": "2023-03-30T16:45:14.724Z",
    "updatedAt": "2023-03-30T16:45:14.724Z"
}
```

<br>

```http
GET URL/genre
```
```javascript
{
    "id": 1,
    "name": "Manga",
    "genre_id": 1,
    "createdAt": "2023-03-30T16:45:01.340Z",
    "updatedAt": "2023-03-30T16:45:01.340Z"
},
```




