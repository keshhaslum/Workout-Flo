# My MVP - My Fitness Journal

## Setup

### Dependencies

- Run 'npm install' in project directory to run dependencies like 'express'
- 'cd client' (go into client folder) and run 'npm install' to install client dependencies (React)

### Database prep

-Access MySQL interface in terminal by running `mysql -u root -p`
-Create a new database `create database test`
-Add a `.env` file to the project folder of this repository containing the MySQL authentication information for 
MySQL user. For example:

DB_HOST=localhost
DB_USER=root
DB_NAME=test
DB_PASS=(your password)

-Run `npm migrate` in the project folder of this repository, in a new terminal window. This will create a table called
'workouts' in your database.
-In your console run `use test` and then `describe workouts` to see how to structure the workouts table

### Devolopment

- Run `npm start` in project directory to start server on port 4000 (this is for Postman API)
- in another terminal do `cd client` and `npm run dev` to start client in development mode with reloading port 5174. In the cd client folder, also run `npm install react router dom` (this is for the routes) and `npm run dev` again for this to run.

### Functionality

The app/ webapp should be able to do the following:
n
- The homepage has the "Go to exercises" button which takes you to the workouts page component where you have a
list of different workouts. At the bottom you have the option to add a new workout to the workout page.
- Once you click on a specific exercise this can take you to the wokout component which gives you information on that specific exercise
- The nav bar at the top also gives you the option to take you to the different components

### Future steps

- Be able to filter through upper body & lower body workouts
- The user would be able to add a variety of exercises to their workout to create their workout plan for the day which would show up in a different component. The user would be able to tick them off, once the exercise is completed.
- The user would be able to have a record of all of the past exercises they have done & weights they have used so that they can continue building on their weights etc

