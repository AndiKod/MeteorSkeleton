MeteorSkeleton
================

A simple repo that will stay up to date with futures realeases of core and third party paks', just a Yeoman-like starter repo. For the moment, those packages are bundeled:

#### Session/Users Management
* accounts-password    1.0.4  Password support for accounts
* accounts-ui          1.1.3  Simple templates to add login widgets to an app
* alanning:roles       1.2.13  Role-based authorization

#### Style/DOM
* fourseven:scss       1.0.0  Style with attitude and autoprefixer. // + Bourbon & Neat
* nooitaf:semantic-ui  0.19.3  Semantic UI packaged for Meteor
* jquery               Manipulate the DOM using CSS selectors
* _Next, will add a NoFramework option, or Bootstrap/Foundation_

#### Routing
* iron:router          1.0.0  Routing specifically designed for Meteor

#### Internationalisation/Translation
* tap:i18n 1.0.7  A comprehensive internationalization solution

### Testing
* mike:mocha           0.4.4  Run mocha tests in the browser


#### SEO
* spiderable           1.0.5  Makes the application crawlable to web spiders

#### Default packages
* insecure             1.0.1  Allow all database writes by default
* meteor-platform      1.2.0  Include a standard set of Meteor packages in your...



## Usage

No surprises :
```
$ git clone https://github.com/AndreiCurelaru/MeteorSkeleton.git MyAppName
$ cd MyAppName
$ meteor 
```
At that point, you should be able to see your basic app on http://localhost:3000 or 127.0.0.1:3000

I'll complete this README with more details on the included files and directories, plus some other ressources. You can of course remove any pakage with someting like `$ meteor remove nooitaf:semantic-ui` and install whatever else you need from [Atmosphere](https://atmospherejs.com/).

If you see other needed packages for a good start, have questions or ideas, fell free to open Issues, or get in touch.

Andrei