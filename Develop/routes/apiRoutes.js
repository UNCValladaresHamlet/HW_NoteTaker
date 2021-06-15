const notes = require('../db/db.json');
const fs = require('fs');
// ROUTING

module.exports = (app) => {

  app.get('/api/notes', (req, res) => res.json(notes));


  app.post('/api/notes', (req, res) => {

    notes.push(req.body);
    console.log('req.body: ', req.body)

    fs.writeFile('./Develop/db/db.json', JSON.stringify(notes), (err) =>
      err ? console.error(err) : console.log('Hamlet look here'))
    res.json(notes);
  });

};


