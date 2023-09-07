# Week 1: Backend API Routes

## Overview

During the first week, the focus will be on setting up the project and implementing user authentication and profiles. The following API URL routes are suggested to be developed in this sprint:

## User Authentication

- `POST /api/auth/google`
  - **Description**: Endpoint to handle Google authentication using Google's OAuth2.0.
  - **Response**: JSON containing user data and a token.

- `GET /api/auth/logout`
  - **Description**: Endpoint to handle user logout and clear the session/token.
  - **Response**: JSON message indicating successful logout.

## User Profiles

- `GET /api/users/me`
  - **Description**: Endpoint to get the authenticated user's profile information.
  - **Response**: JSON containing user profile information.

- `PUT /api/users/me`
  - **Description**: Endpoint to allow users to update their own profile information.
  - **Request**: JSON containing new user details.
  - **Response**: JSON containing updated user details.

- `GET /api/users/:id` *(optional)*
  - **Description**: Endpoint to get a specific user's details based on user ID. Useful for admin functionalities to view user profiles.
  - **Response**: JSON containing the specified user's details.

## Admin Routes (optional for the first week, but good to consider)

- `GET /api/admin/users`
  - **Description**: Endpoint to get a list of all users (for admin use).
  - **Response**: JSON containing a list of all user profiles.

- `PUT /api/admin/users/:id`
  - **Description**: Endpoint to allow admins to update user profiles (for admin use).
  - **Request**: JSON containing new user details.
  - **Response**: JSON containing updated user details.

- `DELETE /api/admin/users/:id`
  - **Description**: Endpoint to allow admins to delete user profiles (for admin use).
  - **Response**: JSON message indicating successful deletion.

## Note

These routes should be protected using appropriate middleware that checks for authenticated sessions or valid JWTs, except for the Google authentication route, which will be the entry point to obtaining a valid session or token.

**Good Practices**:
- Follow RESTful API principles for structured and predictable routes.
- Version your API using prefixes like `/api`.

