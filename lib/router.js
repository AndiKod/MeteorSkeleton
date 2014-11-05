/*
*	File Type: Router
*	Author: Andrei Curelaru
*/

Router.configure({
 layoutTemplate: 'layout',
 loadingTemplate: 'loading',
	waitOn: function() { 
		// return [Meteor.subscribe('collection1'), Meteor.subscribe('collection2')];
	}
});


Router.map(function() {

	//Home
	this.route('home', {path: '/'});


});