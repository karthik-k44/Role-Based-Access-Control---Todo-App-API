# Role-Based Access Control - Todo App API

This is a Role-Based Access Control (RBAC) Todo App API built with Node.js, Express, and MongoDB. It allows users to sign up, log in, and manage their todo tasks. Admin users have additional privileges to access all tasks.

## Project Structure

```
.env
package.json
server.js
config/
    db.js
controllers/
    adminControllers.js
    authControllers.js
    todoContollers.js
middlewares/
    adminMiddleware.js
    authMiddlewares.js
models/
    todoModel.js
    userModel.js
routes/
    adminRoutes.js
    authRouters.js
    todoRoutes.js
utils/
    tokenUtils.js
```

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```
    DBURL=your_mongodb_connection_string
    SECRET_KEY=your_secret_key
    ```

4. Start the server:
    ```sh
    npm start
    ```

## API Endpoints

### Authentication

- **Sign Up**
    - URL: `/auth/signup`
    - Method: `POST`
    - Body:
        ```json
        {
            "name": "string",
            "email": "string",
            "password": "string",
            "role": "string" // Optional, default is "User"
        }
        ```

- **Log In**
    - URL: `/auth/login`
    - Method: `POST`
    - Body:
        ```json
        {
            "email": "string",
            "password": "string"
        }
        ```

### Todo Tasks

- **Create Task**
    - URL: `/todo`
    - Method: `POST`
    - Headers: `Authorization: Bearer <token>`
    - Body:
        ```json
        {
            "title": "string",
            "description": "string",
            "completed": "boolean" // Optional, default is false
        }
        ```

- **Get Tasks**
    - URL: `/todo`
    - Method: `GET`
    - Headers: `Authorization: Bearer <token>`

- **Update Task**
    - URL: `/todo/:id`
    - Method: `PUT`
    - Headers: `Authorization: Bearer <token>`
    - Body:
        ```json
        {
            "title": "string",
            "description": "string",
            "completed": "boolean"
        }
        ```

- **Delete Task**
    - URL: `/todo/:id`
    - Method: `DELETE`
    - Headers: `Authorization: Bearer <token>`

### Admin

- **Get All Tasks**
    - URL: `/admin`
    - Method: `GET`
    - Headers: `Authorization: Bearer <token>`

## Middleware

- **Authentication Middleware** (`middlewares/authMiddlewares.js`): Verifies the JWT token and attaches the user to the request object.
- **Admin Middleware** (`middlewares/adminMiddleware.js`): Checks if the user has the "Admin" role.

## Models

- **User Model** (`models/userModel.js`): Defines the schema for user documents.
- **Todo Model** (`models/todoModel.js`): Defines the schema for todo task documents.

## Utils

- **Token Utils** (`utils/tokenUtils.js`): Contains utility functions for generating JWT tokens.

## Database

- **Database Configuration** (`config/db.js`): Connects to the MongoDB database using Mongoose.

## License

This project is licensed under the MIT License.