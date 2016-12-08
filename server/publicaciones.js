Meteor.publish('animales', function(){
  return Animales.find();
})
