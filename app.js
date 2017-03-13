/* app.js */

// grab express
const APP = require('express')();

// Fake some posts to simulate a database
const POSTS = [
  {
    id: 1,
    author: 'John',
    title: 'Templating with EJS',
    body: 'Blog post number 1'
  },
  {
    id: 2,
    author: 'Drake',
    title: 'Express: Starting from the Bottom',
    body: 'Blog post number 2'
  },
  {
    id: 3,
    author: 'Emma',
    title: 'Streams',
    body: 'Blog post number 3'
  },
  {
    id: 4,
    author: 'Cody',
    title: 'Events',
    body: 'Blog post number 4'
  }
];

// Set the view engine to ejs so it renders nicely
APP.set('view engine', 'ejs');

// blog home
APP.get('/', (req, res) => {
  // Express will automatically check the views folder for `home`
  res.render('home', {posts: POSTS});
});

// BLOG POSTS
APP.get('/post/:id', (req, res) => {
  // find the post in the `POSTS` ARRAY
  const post = POSTS.filter((post) => {
    /*******. could cause problems if one is a string and one is a number type and it did... wanted === so *****/
    return post.id === Number(req.params.id);
  })[0];

  // again express auto looks in the views folder
  res.render('post', {
    author: post.author,
    title: post.title,
    body: post.body
  });
});

// Start listening on port 8080
APP.listen(8080);
console.log('listening on port 8080');