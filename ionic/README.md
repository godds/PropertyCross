# Ionic PropertyCross

## Overview

This is an implementation of the PropertyCross application using [Ionic](http://ionicframework.com) (v0.9.24).  Ionic is an HTML5 framework built with [Sass](http://sass-lang.com) and optimized for [AngularJS](http://angularjs.org) that uses [Cordova / PhoneGap](http://phonegap.com) to package the HTML / JavaScript within a native wrapper for app-store deployment.  Ionic includes a mobile-specific components and controllers, and Cordova provides a set of APIs for accessing native phone functionalities which are not available via HTML specifications.

All HTML and JavaScript is shared across all mobile platforms, though small elements of functionality have been included to tailor the view subtly towards specific platforms.  View, controller, model and services code is developed and separated following AngularJS' standard approach.  Ionic provides an [npm](http://www.npmjs.org) package to create, build and run applications (using Cordova under the covers).

## Building the Application

Applications developed with Ionic can be run directly within a web browser control.  The application is packaged using [PhoneGap Build](https://build.phonegap.com), with the configuration specified in the `config.xml` file.

## Application Structure

+ `\www\assets` - icons, etc used by PhoneGap
+ `\www\css` - application-specific styling
+ `\www\img` - application-specific images
+ `\www\js` - application-specific JavaScript files
+ `\www\js\app.js` - the application bootstrap, setting up state/routing for the app
+ `\www\js\controllers.js` - the view models that implement the PropertyCross view logic
+ `\www\js\services.js` - the services that implement the PropertyCross data fetching logic
+ `\www\lib` - the Ionic framework and its dependencies
+ `\www\templates` - the various views of the application
+ `\www\index.html` - defines the root view for the application