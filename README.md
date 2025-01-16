# TripApp (Travel Application)

### Tech Stack Used : 
Fullstack , Next.js , TypeScript , Node.js , MongoDB , Tailwind CSS , GitHub

### Description:
TripApp is a comprehensive travel management platform designed to simplify and enhance the travel experience for users. With a user-friendly interface and robust functionality, it caters to individual travelers, groups, and those seeking to explore shared travel experiences.

### Key Features:

* Add and Manage Trip Details:
```Users can easily create, edit, and manage their travel plans, including trip dates, destinations, and activities.```

* Invite Travel Companions:
```
- The app allows users to invite others (friends, family, or even strangers) to join their trips after completing secure authentication.
- This feature helps travelers reduce costs and share memorable experiences.
```
* Find Verified Travel Guides:
```
- Users can search for reliable travel guides based on their destination.
- Guides are carefully verified to ensure high-quality service and safety.
```
* Discover Hotels and Stays:
```
- Explore and book accommodations with detailed reviews and ratings.
- The app provides verified recommendations, ensuring users can trust the quality and safety of the listed hotels or stay options.
```
* Responsive and Adaptable Design:
```
- The UI is designed with Tailwind CSS, ensuring a pixel-perfect, responsive layout compatible across devices.
```
* Performance Optimization:
```
- Leveraged Next.js static site generation (SSG) for frequently accessed pages, such as the home page and trip-planning sections, improving page load speeds by 70%.
```
* Secure User Authentication:
  
```- Integrated a robust authentication system using JSON Web Tokens (JWT) to ensure secure login and session management.```

* Type-Safe Development:
  
``` - Used TypeScript for strong typing, enhancing scalability and reducing bugs during development.```

## How code runs :
### Backend (Server)
1. Navigate to the server folder:

- cd server

2. Install dependencies:

- npm install
3. Add the MongoDB connection string in .env:

- MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<database-name>?retryWrites=true&w=majority
4. Start the server using Nodemon:

- nodemon path.tsx
- The server runs on http://localhost:3005.
### Frontend
1. Navigate to the frontend folder:

- Go to App folder
- Install dependencies:

``` npm install```
- Add the backend API URL and other variables in .env:
- NEXT_PUBLIC_API_URL=http://localhost:5000
2. Start the frontend server:

- npm run dev
- The app runs on http://localhost:3000.

