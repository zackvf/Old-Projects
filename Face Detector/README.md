# Face Detection React Application

Please check out my application!

https://react-face-brain.herokuapp.com/

This React-based application allows the user to play a kind of game where they paste a link to a picture with a human face in it, and then once they click "Detect" the associated Clarifai API for detecting faces will do just that; the face in the photograph will be located and a box will be placed around it, while also increasing the user's entry count by 1 for each successful photograph linked and face detected. In order to even get to this point, though, the user must register with the site by inputting their name, email address, and a password to use for logging into the site later on, after which they'll be granted access.

This project was utterly engrossing to put together and I learned an immeasurable amount in the process, about JavaScript and the React library as well as about front-end development overall. As this wasn't my first experience with utilizing React I was able to piece together each feature at a slow but steady pace, constantly performing minor console tests with general errors and using the application [Postman](https://www.getpostman.com/) to ensure ```localhost``` testing went smoothly and precisely before deploying the full build to [Heroku](https://www.heroku.com/). I was also able to acquire valuable experience with SQL, specifically PostgreSQL, to maintain a database of registered users for the application. While there are extra features that I could add onto this in the future, such as a global score board for entry counts among all of the users or the functionality for deleting your user information/profile, I am quite proud of what I accomplished so far and I am excited to see how far I can take my knowledge.

## Login page:

![Login](https://i.imgur.com/K9fzRX3.png?1 'Login')

## Registration page:

![Registration](https://i.imgur.com/Q9JmVbA.png?1 'Registration')

## Main page with username and entry count displayed:

![User](https://i.imgur.com/0L8YEG2.png?1 'User')

## Face detection and entry count updated:

![Face](https://i.imgur.com/mJw9JvJ.png?1 'Face')