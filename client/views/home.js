/*
*	File Type: Manager
*	Managed View: client/views/home.html
*	Taking Route: home
*	
*	Author: Andrei Curelaru
*/ 

// Helper : Providing Data for the Template
Template.home.helpers({
    
	 hello: function() {
	   return "HelloMeteor"; 
	 }
    
});

// Events
Template.home.events({
    
    'click .class': function (event) { 
        // Do something when .class is cliked
    }
    
});

// JavaScript activations & more
Template.home.rendered = function(){
    
    // Could be something lke : 
     $('.ui.dropdown').dropdown();
}

//	endFile: client/views/home.js