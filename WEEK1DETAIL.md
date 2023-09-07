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

#

# Week 1: Frontend Routes and UX Requirements

## Overview

During the first week, the focus will be on setting up the project and developing essential user interface components, particularly focusing on user authentication and profile management. Below are the proposed frontend routes and their respective UX requirements:

## Routes

### 1. Home Page (`/`)
- **UX Requirements**:
  - A welcoming page with an overview of the platform.
  - A navigation bar with links to Login, Signup, and possibly a brief FAQ or About section.
  - High-quality images or illustrations representing the core functionalities of the platform (buying, selling, auctioning).
  - Footer with necessary links and contact information.

### 2. Login Page (`/login`)
- **UX Requirements**:
  - A form to allow users to login using their Google account.
  - Options to navigate to the signup page if the user is not registered.
  - Forgotten password recovery option (to be implemented in later sprints).
  - Clearly displayed error messages for login failures.

### 3. Signup Page (`/signup`)
- **UX Requirements**:
  - A form to allow new users to register using their Google account.
  - Options to navigate to the login page if the user is already registered.
  - Clearly displayed error messages for signup failures.
  - A link to the terms of service and privacy policy.

### 4. User Profile Page (`/user/profile`)
- **UX Requirements**:
  - Display user's profile picture and basic information (fetched from Google account).
  - Option to edit profile information (name, contact information, etc.).
  - Display a list of user’s current listings, offers, and transactions (placeholders for now, detailed implementation in subsequent sprints).
  - A sidebar or navigation for quick access to different sections of the profile.

## Additional UX Requirements

- **Responsiveness**: Ensure that the website is responsive and provides a good user experience on various devices (desktop, tablet, mobile).
- **Loading States**: Implement loading states to give users feedback when data is being loaded.
- **Error Handling**: Develop error handling mechanisms to gracefully handle and display errors to users.
- **Color Scheme and Typography**: Choose a pleasant color scheme and typography to enhance the user experience.

## Note

- **Collaboration with Backend Team**: Constant collaboration with the backend team is necessary to ensure the seamless integration of frontend and backend.
- **Feedback and Adjustments**: Be ready to make adjustments based on feedback and unexpected challenges.


