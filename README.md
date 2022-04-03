# Workout Tracker

This is a full-stack web application that tracks workout routines entered by the user.  For this Single Page Application (SPA), React is used for the front-end UI app; REST API is written using Node and Express for the back-end web service; MongoDB is used for the database.
<br>  

## Front-End
---
### Front-end Walkthrough GIF (With CSS)

The React app includes the following 3 pages:
- Home Page
- Edit Workout Page
- Create Workout Page

Various React components are used to generate the table and global navigation features.  When editing an entry, the boxes are pre-populated with the existing data.  Upon successfully creating or editing an entry, the app will show an alert to the user with a confirmation message before automatically taking the user back to the Home Page.
<br>  
<p align = "center">
<image src = "workout_react.gif" width = 900><br>
</p>

## Back-End
---
### Back-end Walkthrough GIF

CRUD operation is supported by a REST API by implementing the following 4 endpoints:
- Create using POST/workouts
- Read using GET/workouts
- Update using PUT/workouts/:id
- Delete using DELETE/workouts/:id
<br>

<p align = "center">
<image src = "workout_rest.gif" width = 900><br>
</p>
<br>
<h3 align = "right"> Elliott Larsen </h3>