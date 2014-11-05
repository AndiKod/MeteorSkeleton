Template.header.events({
  'click .switchEnglish': function (event) {  	
  	TAPi18n.setLanguage("en");
  	console.log('Where is Brian?')
  }
});

Template.header.events({
  'click .switchFrench': function (event) {  	
  	TAPi18n.setLanguage("fr");
  	console.log('Allons, Enfants!')
  }
});