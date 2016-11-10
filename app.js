"use strict";
let parshalist = require('./parshalist')();

let express = require('express');
let path = require('path');
let exphbs = require('express-handlebars');
let Hebcal = require('hebcal');
let app = express();

let safeName = (name) => {
  return name.toLowerCase().replace("'","").replace(" ", "");
};

app.use(express.static(__dirname + '/public'));

//Serve the Homepage
app.get('/' , (request,response)=>{
  let parshaName = new Hebcal.HDate().getSedra()[0];
  let currentParshaName = safeName(parshaName);
  console.log(`${currentParshaName}`);
  if (currentParshaName in parshalist) {
    console.log(`${parshalist[currentParshaName].text}`);
    response.render('./pages/home.ejs', {"current": parshaName, "parsha": currentParshaName, "parshas": parshalist.parshas, "display": parshalist[currentParshaName].display, "video" : parshalist[currentParshaName].video, "text" : parshalist[currentParshaName].text});
  } else {
    console.log("Parsha NOT in Parsha List!!");
  }
});

//Serve the about page
app.get('/about' , (request,response)=>{
  response.render('./pages/about.ejs');
});

//Serve the Parsha of the week
app.get('/parsha' , (request,response)=>{
  //No Parsha name provded - send parsha of the week
  let parshaName = new Hebcal.HDate().getSedra()[0];
  let currentParshaName = safeName(parshaName);
  if (currentParshaName in parshalist) {
    console.log(`${parshalist[currentParshaName].text}`);
    response.render('./pages/index.ejs', {"current": parshaName, "parsha": currentParshaName, "parshas": parshalist.parshas, "display": parshalist[currentParshaName].display, "video" : parshalist[currentParshaName].video, "text" : parshalist[currentParshaName].text});
  } else {
    response.redirect('/');
  }
});

//Serve the specified Parsha
app.get('/parsha/:parsha' , (request,response)=>{
  let parshaName = request.params.parsha;
  let safeParshaName = safeName(parshaName);
  let currentParsha = new Hebcal.HDate().getSedra()[0];
  if (parshaName in parshalist) {
    //Parsha Found - Render Parsha
    console.log(`${parshalist[parshaName].text}`);
    response.render('./pages/index.ejs', {"current" : currentParsha, "parsha": parshaName, "parshas": parshalist.parshas, "display": parshalist[parshaName].display, "video" : parshalist[parshaName].video, "text" : parshalist[parshaName].text});
  } else if (safeParshaName in parshalist){
    response.render('./pages/index.ejs', {"current" : currentParsha, "parsha": safeParshaName, "parshas": parshalist.parshas, "display": parshalist[safeParshaName].display, "video" : parshalist[safeParshaName].video, "text" : parshalist[safeParshaName].text});
  } else {
    //Parsha Not Found - redirect to home page
    response.redirect('/');
  }
});

app.listen(process.env.PORT || 5000 , '0.0.0.0');
