# Unit 14: Model-View-Controller (MVC)

## Overview

In this unit we'll modularize applications following the **Model-View-Controller (MVC)** paradigm. MVC is an architectural pattern that structures a codebase in three distinct sections, according to a software design philosophy known as the **separation of concerns**.  

Rather than hardcode the HTML for many, many pages, we can dynamically generate the HTML using a template engine. In implementing a template engine, we are separating the concern of client-side rendering from other aspects of the application. This is the **View** layer in the MVC framework. The template engine we will learn and implement in this unit is Handlebars.js.

The **Model** is the data layer of the application. It is concerned with the structure of the database and the logic used to retrieve that data. We'll implement Sequelize as the ORM for querying the database. 

Last but not least is the **Controller**. Think of it as the intermediary between the View and the Model. The Controller handles input from the user, interacts with the Model to create, read, update, or delete data, and then returns the results of that query to the user via the View layer. We are already familiar with these operations in Express.js apps, but now we'll separate the client-side and server-side routes from each other.

Also in this unit, we'll cover user authentication. We'll build on the password hashing we learned in the previous module and learn to authenticate application users by verifying their credentials. We'll then use sessions and cookies to keep users logged in and authorized to view the content of the app.

## Key Topics

The following topics will be covered in this unit:

* [Model-View-Controller](https://developer.mozilla.org/en-US/docs/Glossary/MVC)

* [Sequelize model](https://sequelize.org/master/class/lib/model.js~Model.html)

* [Handlebars.js](https://www.npmjs.com/package/express-handlebars)

  * [Expressions](https://handlebarsjs.com/guide/expressions.html)

  * [Built-in helpers](https://handlebarsjs.com/guide/builtin-helpers.html)

  * [Partials](https://handlebarsjs.com/guide/partials.html#basic-partials)

  * [Custom helpers](https://www.npmjs.com/package/express-handlebars#helpers)

* Sessions and Cookies

  * [express-session](https://www.npmjs.com/package/express-session)

  * [connect-session-store using Sequelize](https://www.npmjs.com/package/connect-session-sequelize) 

  * [Express.js session cookie](https://github.com/expressjs/session#cookie)

* [Express.js middleware](https://expressjs.com/en/guide/using-middleware.html)

* [ESLint](https://eslint.org/docs/user-guide/configuring)

* [Prettier](https://prettier.io/docs/en/index.html)

## Learning Objectives

You will be employer-ready if you are able to:

* Render dynamic HTML using a template engine, like Handlebars.js.

* Explain and implement MVC modularization in a full-stack web application.

* Configure Heroku for deployment of an application using MySQL.

* Explain the interactions between the Model, View, and Controller.

* Explain separation of concerns and its benefits.

* Implement user authentication.



---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
