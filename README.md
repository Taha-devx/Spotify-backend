# Spotify Backend

A Spotify-inspired music streaming backend built with **Node.js, Express.js, and MongoDB**. The project includes user authentication, artist-specific access control, music uploads, and album management.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** JavaScript (CommonJS)
- **Database:** MongoDB with Mongoose
- **Authentication:** JSON Web Tokens (JWT)
- **Password Hashing:** bcrypt
- **File Uploads:** Multer
- **Cloud Storage:** ImageKit
- **Cookies:** cookie-parser

## Features

- User registration and login
- Password hashing using bcrypt
- JWT-based authentication using cookies
- Role-based access control for users and artists
- Music file upload through ImageKit
- MongoDB models for users, music, and albums
- API endpoints for retrieving music and albums
- Artist information associated with uploaded music

*Note: Features are based on the current code structure; individual endpoints should be tested before being considered production-ready.*

## Project Structure

```text
Spotify-backend/
├── src/
│   ├── app.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── music.controller.js
│   ├── db/
│   │   └── db.js
│   ├── middleware/
│   │   └── auth.middleware.js
│   ├── models/
│   │   ├── album.model.js
│   │   ├── music.model.js
│   │   └── user.model.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── music.routes.js
│   └── service/
│       └── storage.service.js
├── .gitignore
├── package.json
├── server.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB connection
- ImageKit account and API credentials

### Installation

Clone the repository:

```bash
git clone https://github.com/Taha-devx/Spotify-backend.git
cd Spotify-backend
```

Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root. Configure the following variables using your own credentials:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_SECRET_KEY=your_jwt_secret
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

**Important:** The current code uses `JWT_SECRET` when signing tokens and `JWT_SECRET_KEY` when verifying them. Use the same secret for both, or update the code to use one consistent variable.

Never commit your `.env` file or expose your credentials publicly.

### Run the Server

Development mode:

```bash
npm run dev
```

Production-style start:

```bash
npm start
```

The server is configured to listen on port `3000`.

## API Endpoints

Base URL: `http://localhost:3000`

### Authentication

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/auth/register` | Register a user or artist |
| POST | `/api/auth/login` | Log in with username or email |
| POST | `/api/auth/logout` | Log out |

### Music and Albums

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/music/upload` | Upload music as an artist |
| POST | `/api/music/album` | Create an album as an artist |
| GET | `/api/music/` | Retrieve music |
| GET | `/api/music/albums` | Retrieve albums (requires verification and fixes in the current implementation) |

### Uploading Music

The music upload endpoint expects a `multipart/form-data` request containing:

- `title`: The music title
- `music`: The audio file

Artist authentication is required.

## Future Improvements

- Add request validation and consistent error handling
- Fix and test album retrieval and logout functionality
- Add automated API tests
- Improve cookie security and authentication configuration
- Add API documentation with Swagger
- Deploy the application

## Author

**Taha Ansari**

[GitHub Profile](https://github.com/Taha-devx)

---

This is an independent learning project inspired by music streaming platforms. It is not affiliated with or endorsed by Spotify.
