MeteorSkeleton
================

A simple repo that will stay up to date with futures realeases of core and third party paks', just a Yeoman-like starter repo. For the moment, those packages are bundeled:

#### Session/Users Management
* accounts-password    1.0.4  Password support for accounts. 
[on Atmosphere](https://atmospherejs.com/meteor/accounts-password), [on Meteor.com](https://www.meteor.com/accounts)
* accounts-ui          1.1.3  Simple templates to add login widgets to an app. 
[on Atmosphere](https://atmospherejs.com/meteor/accounts-ui)
* alanning:roles       1.2.13  Role-based authorization. 
[on Atmosphere](https://atmospherejs.com/alanning/roles)

#### Style/DOM
* fourseven:scss       1.0.0  Style with attitude and autoprefixer. // + Bourbon & Neat. 
[on Atmosphere](https://atmospherejs.com/fourseven/scss)
* nooitaf:semantic-ui  0.19.3  Semantic UI packaged for Meteor. 
[on Atmosphere](https://atmospherejs.com/nooitaf/semantic-ui)
* jquery               Manipulate the DOM using CSS selectors. 
[on Atmosphere](https://atmospherejs.com/meteor/jquery)

_Next, will add a NoFramework option, or Bootstrap/Foundation_

#### Routing
* iron:router          1.0.0  Routing specifically designed for Meteor. 
[on Atmosphere](https://atmospherejs.com/iron/router)

#### Internationalisation/Translation
* tap:i18n 1.0.7  A comprehensive internationalization solution. 
[on Atmosphere](https://atmospherejs.com/tap/i18n)

### Testing
* mike:mocha           0.4.4  Run mocha tests in the browser. 
[on Atmosphere](https://atmospherejs.com/mike/mocha)


#### SEO
* spiderable           1.0.5  Makes the application crawlable to web spiders. 
[on Atmosphere](https://atmospherejs.com/meteor/spiderable)

#### Default packages
* insecure             1.0.1  Allow all database writes by default. 
[on Atmosphere](https://atmospherejs.com/meteor/insecure)
* meteor-platform      1.2.0  Include a standard set of Meteor packages in your... 
[on Atmosphere](https://atmospherejs.com/meteor/meteor-platform)

Just in case : [Meteor 1.0 Docs](https://docs.meteor.com/#/full/)

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