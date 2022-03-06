# [The Tech Blog](#title)

## [Description](#description)
The Tech Blog is a micro-blogging platform on which software developers can post content and comments to further professional development.

![Repository Size](https://img.shields.io/github/repo-size/bkfleet1/tech-blog?style=plastic)
>> - Project Repository URL: https://github.com/bkfleet1/tech-blog
>> ![Repository](/images/repository.png)

## Table of Contents
> - [Title](#title)
> - [Description](#description)
> - [Developer](#developer)
> - [Packages & Libraries](#resources)
> - [Tech Stack](#stack)
> - [Installation](#installation)
> - [Use Instructions](#usage)
> - [Tests](#tests)
> - [Questions](#questions)

## Developer
[Brad Kelley](mailto:bradkelleytech@gmail.com) 

## [Packages & Libraries](#resources)
The following resources were used in the development of this project.
> - Bcrypt (version 5.0.1);
> - Bootstrap CDN (version 5.1.3);
> - Connect Session Sequelize (version 7.1.2);
> - Dotenv (version 16.0.0);
> - Express (version 4.17.3);
> - Express Handlebars (version 6.0.2);
> - Express Session (version 1.17.2);
> - Font Awesome CDN (version 5.8.1)
> - Handlebars (version 4.7.7);
> - Jquery (version 3.6.0);
> - MySQL Server (version 8.0.28);
> - MySQL2 (version 2.3.3); and
> - Sequelize (version 6.17.0)

## [Tech Stack](#stack)
![76% Javascript](https://img.shields.io/badge/javascript-76%25-green) ![12% Handlebars](https://img.shields.io/badge/handlebars-12%25-green) ![12% Javascript](https://img.shields.io/badge/css-12%25-green)
> - JavaScript
> - CSS
> - Handlebars

## [Installation](#installation)
The following steps are required to execute The Tech Blog.
> 1. Clone the repository located at: https://github.com/bkfleet1/tech-blog
> 2. Install Node.js. You can download the latest version of Node.js at https://nodejs.org/en/.
> 3. Rename the EXAMPLE_env project file to **.env**. Next open the .env file and enter the the MySQL user and password with sufficient credentials to create, read, update, and delete database tables and data. The default database is name is **tech_blog**, but you can change it in the .env without affecting the application.
> 4. Open the project in a terminal application, such as git bash, and install NPM. To install the dependency packages listed in [Packages & Libraries](#resources), simply type **npm install** and press enter.
> 5. The application utilizes MYSQL a database named **.env** file, which can be deployed by opening the project in a terminal application, such as git bash, and typing **npm run db** and pressing enter. Image below illustrates this function.
>>> NOTE: If you do not have MYSQL, you can download it at https://www.mysql.com/downloads/.
![Create Database](/images/express1.png)

>>> NOTE: You can populate the database with test data by opening the project in a terminal application, such as git bash, and typing **npm run seed** and pressing enter.

## [Use Instructions](#usage)
After the installation process, you will need to start the Express server. Just open the project in a terminal application, such as git bash, and type "**npm start**" and press enter. The image below illustrates the process of starting the Express server.
![Initiate Express Server](/images/express3.png)

### Home Screen
At this point the application is unstalled and running. If you have deployed the application locally, you can open url http://localhost:3001. The image below illustrates the application's homepage with the provided seed data. You will note that users are presented with blogs (title & message), username, and post data, as well a the number of comments and user likes (thumbs up). This read-only view is available to the general public, but only authenticated users may create, update and delete content.
![The Tech Blog](/images/screen1.png)

### View Comments
Unregistered users can also view comments by clicking on the **comments** link in the lower right-hand section of a post. The image below illustrates the read-only view of user comments for a single post.
![View Comments](/images/screen1a.png)

### Signup Form
A user can signup to become a user by clicking on the signup button in the upper right-hand corner. The user is then presented with the signup form illustrated below. After the user has successfully completed and submitted the signup form, the application will create a user session in the database (sessions table) and issue a cookie to the user's browser. 
![Signup Form](/images/screen2.png)

#### Session Creation in MySQL
![User Sessions In MySQL](/images/session1.png)

#### Session Cookie in User Web Browser
![App Cooki in Web Browser](/images/session2.png)

### Login Form
Subscribed users can login by clicking on the login button in the upper right-hand corner. The user is then presented with the signup form illustrated below. After the user has successfully enters their email address and password, the application will create a user session in the database (sessions table) and issue a cookie to the user's browser - previously illustrated.
![Login Form](/images/screen2b.png)

### User Dashboard - Create & Edit Your Posts
Once a user is authenticated, the application will present the 'dashboard' screen, which contains the user's previous posts as well as an function to create a new post. Image below illustrates this screen.
![Dashboard](/images/screen3.png)

### Edit / Delete Post & Comment / Like Post
In the dashboard view, a user can edit or delete one of their posts, as well as append a comment and like their own post by clicking on the **edit** button located below the post. The application present the user with their previous post in edit-mode. The user can chose to modify and **save** their post, **delete** the post, or return to their personal dashboard by clicking the **dashboard** button in the upper right-hand corner of the screen. 

Additonally, the user can append a **comment** or like the post by click the "thumbs up" button.

The image below illustrates this screen.
![Update, Delete, Comment, and Like](/images/screen4.png)

### Home Screen - Authenticated
Authenticated users can click on the **home** button, which will present the user with posts from all users as illustrated below. They can also click on **comment** in the lower right-hand corner of a post. The user can then add comments to a post, as well as like (thumbs up) a post as illustrated below.
![Add a Comment & Like](/images/screen5.png)

### Logout
A user can logout by simply clicking the **logout** button in the upper right-hand corner of the screen. Additionally, the application will automatically log a user session out after 5 minutes of idle time (i.e., 300,000 milliseconds). The idle time setting can be found in the public/javascript/script.js file.


## [Tests](#tests)
No formal testing is available. However, you can seed the database with test data by opening the project in a terminal application, such as git bash, and typing **npm run seed** and pressing enter. The image below illustrates this function.
![Seed Database](/images/express2.png)


NOTE: Your testing environment should be different from the production environment described in the [Installation](#installation) section. You can create a test environment following [Installation](#installation) instructions, but you will need to modify the database name in your **.env** file to use your desired test database name.

## [Questions](#questions)
Please email one of the following developers with any questions.
> * [Brad Kelley](mailto:bradkelleytech@gmail.com) 

