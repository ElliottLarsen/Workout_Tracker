# Workout Tracker
This is a full-stack web application (SPA) that tracks workout routines entered by the user.
## Technologies
* HTML
* CSS
* JavaScript
* MongoDB
* Express.js
* React
* Node.js
## GIF Walkthrough
### Front-end 

The React app includes the following 3 pages:
* Home Page
* Edit Workout Page
* Create Workout Page

Various React components are used to generate the table and global navigation features.  When editing an entry, the boxes are pre-populated with the existing data.  Upon successfully creating or editing an entry, the app will show an alert to the user with a confirmation message before automatically taking the user back to the Home Page.
<p align = "center">
<image src = "workout_react.gif" width = 900><br>
</p>

### Back-End
CRUD operation is supported by a REST API by implementing the following 4 endpoints:
* Create using POST/workouts
* Read using GET/workouts
* Update using PUT/workouts/:id
* Delete using DELETE/workouts/:id
<p align = "center">
<image src = "workout_rest.gif" width = 900><br>
</p>

## Contact
Elliott Larsen
* Email elliottlrsn@gmail.com
* GitHub [@elliottlarsen](https://github.com/elliottlarsen)
* LinkedIn [@elliottlarsen](https://www.linkedin.com/in/elliottlarsen)