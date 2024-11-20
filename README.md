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
- `POST /api/users` - Insert users (Used in `src/lib/actions/user.actions.ts` to check if the the user exists and insert it in the db in case they're not)

### Posts

- `GET /api/posts` - Get all posts (Used in `src/lib/actions/post.actions.ts` to retrieve a list of posts)
- `GET /api/users/myposts` - Get my posts (Used in `src/lib/actions/posts.actions.ts` to retrieve a list posts you've created)
- `POST /api/posts` - Create a new post (Used in `src/lib/actions/post.actions.ts` to create a new post)

### Follow
- `GET /api/follow` - Get my followers (Used in `src/lib/actions/user.actions.ts` to retrieve a list of your follower)
- `POST /api/follow` - Follow a user (Used in `src/lib/actions/user.actions.ts` to follow someone by their id)




