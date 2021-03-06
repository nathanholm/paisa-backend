# API Setup

This is a initializing starting point for making an API.

### Example Model

| Column Name | Data Type | Notes |
| --------------- | ------------- | ------------------------------ |
| id | ObjectId | Made by MongoDB |
| name | String | Optional in this case |
| completed | Boolean | `true` or `false` |
| __v | Number | Made by Mongoose |

### Examples - Default Routes

| Method | Path | Location | Purpose |
| ------ | ---------------- | -------------- | ------------------- |
| GET | /api | app.js | Welcome to API |
| GET | /api/examples | example.js | Get all examples |
| GET | /api/examples/:id | example.js | Get one example |
| POST | /api/examples | example.js | Create an example |
| PUT | /api/examples/:id | example.js | Update an example |
| DELETE | /api/examples/:id | example.js | Delete an example |

## Examples - Detailed Info

Detailed info for serialized examples
- Get all examples : GET /examples
- Get one example : GET /examples/:id
- Create a capsule : POST /examples
- Update a capsule : PUT /examples/:id
- Delete a capsule : DELETE /examples/:id


## Users

| Column Name | Data Type | Notes |
| --------------- | ------------- | ------------------------------ |
| id | ObjectId | Made by MongoDB |
| name | String | required |
| email | String | required |
| password | String | required (hash) |
| date | Date | Set default date  |
| __v | Number | Made by Mongoose |

## Users - Default Routes

| Method | Path | Location | Purpose |
| ------ | ---------------- | -------------- | ------------------- |
| GET | /api/users/test | user.js | Test route for users, no user returned |
| POST | /api/users/register | user.js | Create a new user and add to DB |
| POST | /api/users/login | user.js | Logs user in via credentials, returns user |
| GET | /api/users/profile | user.js | Protected route, need token to access |

# Users - Detailed Info

Detailed info for serialized examples
- Test user routes : GET /users/test
- Create a user : POST /users/register
- Login a user : POST /users/login
- Return user data (must login beforehand and use token) : GET /users/profile


# How to Use the Spotify API

- [ ] Install `axios`
```text
npm install axios
```

