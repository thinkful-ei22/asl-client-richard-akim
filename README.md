## Table of Contents

- [Description of App](#description)
- [Features](#features)
- [Link to deplyed version](#deployed-version)
- [Server and Client](#server-and-client)
- [Tech Stack](#tech-stack)



## Description

Welcome to uh-SIGN-ment! A learning app designed to teach you the
basics of American Sign Language! We've built this application with
the best learning techniques in mind to help you retain as much
information as possible! With each <strong>uh-SIGN-ment</strong>,
you'll reinforce your knowledge of <strong>ASL</strong>, and be able
to see your progress!

## Deployed Version

You can fine a live version:
[Live Version](https://sign-app-client.herokuapp.com/dashboard)

## Features 
Users can login and start learning sign language. Users are presented with a dashboard that will keep track of their records and stats with every word and able to make sure they are focusing on the words/letters then need to be.

Users are given feedback and they are learning using a spaced repetition algorithm. 

## Screenshots

![Landing Page](./screenshots/landing-page.png)

![Question Page](./screenshots/question-page.png)

![Dashboard](./screenshots/dashboard.png)


## Server and Client

Here is a link to our [Client-side](https://github.com/thinkful-ei22/asl-client-richard-akim)

Here is a link to our [Server-side](https://github.com/thinkful-ei22/asl-server-richard-akim)


## Tech Stack

Frontend: Created with create-react-app, styling done with CSS. Html. React-redux to keep a store of the state. Thunk middleware for async actions. Redux forms for form inputs.

Backend: Node.js and express. Integrated with TravisCI. Database: MongoDB from mlab. Database queries made with mongoose. 