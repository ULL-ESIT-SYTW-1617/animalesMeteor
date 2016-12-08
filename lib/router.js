Router.configure({
  layoutTemplate: 'layout',
  waitOn: function(){ return Meteor.subscribe('animales');}
});

Router.route('/', {name: 'postsList'});
