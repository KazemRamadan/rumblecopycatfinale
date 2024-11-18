# RMBL CopyCat

## Stack Used

- Next.js
- MongoDB
- Kinde

## How to Run the App

1. Clone the repository
2. Install the dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Endpoints

### Users

- `GET /api/users` - Get all users (Used in `src/lib/actions/user.actions.ts` to retrieve a list of users)
- `PUT /api/users/:id` - Update a user (Used in `src/lib/actions/user.actions.ts` to update a user's information)

### Posts

- `GET /api/posts` - Get all posts (Used in `src/lib/actions/post.actions.ts` to retrieve a list of posts)
- `GET /api/posts/:id` - Get a post by ID (Used in `src/lib/actions/post.actions.ts` to retrieve a specific post)
- `POST /api/posts` - Create a new post (Used in `src/lib/actions/post.actions.ts` to create a new post)
- `PUT /api/posts/:id` - Update a post (Not currently used in the provided code)
- `DELETE /api/posts/:id` - Delete a post (Not currently used in the provided code)



