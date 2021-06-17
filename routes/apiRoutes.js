const noteInfo = require('../db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
// ROUTING

module.exports = (app) => {

  app.get('/api/notes', (req, res) => res.json(noteInfo));


  app.post('/api/notes', (req, res) => {

    noteInfo.push(req.body);
    req.body.id = uuidv4();
    // noteInfo.push({...req.body,id:1});

    console.log('req.body: ', req.body)

    fs.writeFile('./db/db.json', JSON.stringify(noteInfo), (err) =>
      err ? console.error(err) : console.log('Hamlet look here'))
    res.json(noteInfo);
  });

};


