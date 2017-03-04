# Project Link
https://alexkarasik.github.io/movie-review-client/

# Link to Back-End Repository
https://github.com/alexkarasik/movie-review

# ERD link
My original, rough draft ERD, with some notes I had taken at the time
http://imgur.com/XdwkEJo
My ERD did not really change much but here is the idea cleaned up. I had two single to many relationships, with single users being able to make many reviews and single movies being able to have many reviews:
http://imgur.com/SuUoCM2

# Wireframe
Here is my original, very very rough original wireframe:
http://imgur.com/Buzdw89

This was the update a week later:
http://imgur.com/5Q2euZr


# Technologies Used
I used HTML, CSS, Ruby on Rails, Javascript and Jquery for this project.

My app is a Movie review/forum for Users to discuss the films of one  of my favorite directors, Werner Herzog as a base, but then users can add any movie that they want and write reviews for those as well and see the reviews and movies added by others. Users are able to look at a list of his films and write their personal reviews of them, based on the ID's of those listed movies.

# How It Works
I made a Movie Review blog that stores a list of movies that users can edit or add to and then write reviews for and see the reviews and movies of other users.
There will be a list of 10 movies in the database already set up by the German documentary film maker, Werner Herzog. Users can edit any of these movies as well as add their own.
Users can also add reviews for these movies, which will be displayed in a separate list. Users can add, edit or delete reviews by identifying them by their Movie ID, which is given to them in the movie list. Users will also be given Review ID's when Reviews have been successfully added, so they can identify the review for the specific movie they want to edit/update or delete.

# User Stories

As a User, I want to be able to sign-up, sign-in, sign-out and change passwords because I want to be able to create and own my own reviews.

As a user, I want to be able to look at all Movies in our database and see their title, rating, length and descriptions.

As a user, I want to see all the Reviews in our database to remember what I thought of these movies and the reviews of others, so we can see what they think of these movies.

As a user I want to have the ability to create, update or destroy my own reviews, because I am making a log of my own preferences.

As a user, I want to have the ability to add movies, update the information on those movies in case I entered the wrong information and see those movies.

# Development Process and Planning

I started with my backend and had to go back to it frequently to fix some mistakes I had made along the way.

From the back end, I created fields for what I thought was the relevant information for both movies and reviews. While the content of the reviews is the most essential functionality of this app, it is important for the user to have some information about the movies they are writing reviews for, so the form fields for the movies include: the movies' title, the movies' rating, the movies' length and a brief description of the movie.

For the reviews, I had to include a reference for the user to the movie_id that they are writing a review for. I also included an ID of the review itself so they will know which review to edit, delete or update in the event that they want to make those changes on a review for a movie that has multiple reviews. The most important attribute I added was the review entry field. A user can write as much or as little about the movie hey are referencing as they would like.

I started with the HTML and added in fields for the forms. The basic set up and worflow for creating a skeleton for an HTML page is something I am getting more comfortable with. My CSS is barely there at the moment, but I chose a font with a German style to reflect the German director that the base movies for this project is about.

I added in my Javascript to make the API, events and user interface for the movies and reviews next. Having the user authentication scripts provided was very helpful as a reference and most of the work and mistakes for the front end happened in these files that provide the Create, Read, Update and Destroy functionalities . The bulk of the work and problems in these files occurred in the User Interface files for both movies and reviews, where I tried to avoid using handlebars to render the relevant and submitted information.

Handlebars were one of the biggest revelations for me on this project. I did not understand them at first and knew that what they provided could be done without using them and did not feel I had the time to learn them. I learned from others that they would make my project and process go much smoother and got some help from my classmates in understanding them, so I did not have to have the information rendered directly in the function that displays reviews. I am really glad that I used them and was surprised how relatively simple they are to write and implement.

After implementing handlebars, my front end was in pretty good shape. It was mostly clean up from there in the CRUD functionality of my project. I don't want to gloss over this, because it took many many more hours of work, but I knew I was going in the right direction at this point and had to work those issues out as they came up and I tested my project.


# Unsolved problems
There are quite a few things I would like to add to this project. The biggest thing that stands out is that I would like to be able to add images and the movie trailers as part of the descriptions of the movies themselves. I would like to figure out how to add data with a 3rd party API as well.

I also want to change the layout to make the movies display horizontally and have the reviews get added underneath the movie they are referencing, for clearer user interface.

Also, as a general lesson learned, even through I think I improved in making commits much more frequently than the last project and have overall written more detailed commits, I should have made many more and included many more details in each one. I should have deployed to heroku more often as well. I am developing better habits overall though.
