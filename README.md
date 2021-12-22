# Fitness Tracker
![badge](https://img.shields.io/badge/license-MIT-brightgreen)

## Description
For this assignment, you'll create a workout tracker. You have already been provided with the front end code in the `Develop` folder. This assignment will require you to create Mongo database with a Mongoose schema and handle routes with Express.

## Table of Contents
- [Important URLs](#urls)
- [Foreword](#foreword)
- [Usage](#usage)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Packages](#packages)
- [Libraries](#libraries)
- [License](#Licensing)

## URLs
- [Github Repo](#https://github.com/candracodes/fitness-tracker)
- [Deployed Heroku Application](#)
- [Full Acceptance Criteria](./assets/README.md)

## Usage
- TBD

## User-Story

```md
As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.
```

## Acceptance-Criteria
When the user loads the page, they should be given the option to create a new workout or continue with their last workout.

The user should be able to:

  * Add exercises to the most recent workout plan.

  * Add new exercises to a new workout plan.

  * View the combined weight of multiple exercises from the past seven workouts on the `stats` page.

  * View the total duration of each workout from the past seven workouts on the `stats` page.

> **Important:** Look into using a MongoDB aggregate function to dynamically add up and return the total duration for each workout. Check out the [MongoDB documentation on the $addFields](https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/), the [MongoDB documentation on the $sum operator](https://docs.mongodb.com/manual/reference/operator/aggregation/sum/), and the [Mongoose documentation on aggregate functions](https://mongoosejs.com/docs/api.html#aggregate_Aggregate) to learn how it can be accomplished.

To deploy an application with a MongoDB database to Heroku, you'll need to set up a MongoDB Atlas account and connect a database from there to your application. Be sure to use the following guides for support:

  * [Set Up MongoDB Atlas](../04-Important/MongoAtlas-Setup.md)

  * [Deploy with Heroku and MongoDB Atlas](../04-Important/MongoAtlas-Deploy.md)

## Packages

This project is created using the following packages

- [Node.JS](https://nodejs.org/en/)
- [Express.JS](https://expressjs.com/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Express Handlebars](https://www.npmjs.com/package/express-handlebars)
- [Sequelize](https://www.npmjs.com/package/sequelize)
- [DOTENV](https://www.npmjs.com/package/dotenv)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Express-Session](https://www.npmjs.com/package/express-session)
- [Connect Session](https://www.npmjs.com/package/connect-session-sequelize)
- [Express Validator](https://express-validator.github.io/docs/)
- [MySQL Database Client for VSCode](https://github.com/cweijan/vscode-database-client)


## Libraries

This project is created using the following packages

- [Bootstrap](https://getbootstrap.com/)
- [jQuery](https://jquery.com/)


## Licensing
The project is made possible with the following Licensing:
- [MIT](license.txt)



