# my-social

This is my first full stack project.

It's a minimalistic clone of Facebook/generic social media site.

It's currently sitting at a ERN stack application. There is no database integration as of yet, this will be added soon.

Technologies used:

Front end:
- Create React & Redux app
- React
- Redux
- React-Redux
- Redux toolkit


Back end:
- Node
- Express
- Nodemon
- Morgan
- Body Parser
- CORS
- DOTENV
- Concurrently

Plans to add for future:
- Database integration with PostgreSQL
- User create profile & login
- Users have a profile, which they can edit, add about me etc.
- Users can make posts, which everyone can see.


Commits:
1. Set up and boilerplate code
2. Created README
3. First commit - more setup and basic code. The page now has a basic UI
4. Added a fixed 'Header' component, as well as a 'MainDataDisplay' component which will display posts, profile, and other things.
5. Added a 'home' button and a temporary 'hello' button which makes an call to the Reddit API and displays posts. This is just to show how the posts will look and where they will go. This will be changed to a call to my own API/back end and database with user posts.
6. Added a left and right sidebar, with temporary list items, to be properly implemented later. Also got rid of the 'hello' button, and moved it's functionality to the 'home' button, which sets the 'onPosts' state to true, which displays the posts.
7. Made the sidebars stayed fixed to the side of the pages, independant of what's happening in the middle. Posts/no posts. Also added some state that displays posts if they are available, and if they aren't simply says 'no posts available'.
