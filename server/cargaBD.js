if(Animales.find().count() === 0)
{
  //Inserciones en la base de datos Mongo
  Animales.insert({
    Nombre:"Tigre" ,
    Familia: "Mamíferos felinos",
    Tipo:"Carnívoro"
  });
}
