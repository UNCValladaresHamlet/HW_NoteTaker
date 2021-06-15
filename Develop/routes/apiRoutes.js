const noteInfo = require('../db/db.json');
const fs = require('fs');
// ROUTING

module.exports = (app) => {

  app.get('/api/notes', (req, res) => res.json(noteInfo));


  app.post('/api/notes', (req, res) => {

    noteInfo.push(req.body);
    console.log('req.body: ', req.body)

    fs.writeFile('./Develop/db/db.json', JSON.stringify(noteInfo), (err) =>
      err ? console.error(err) : console.log('Hamlet look here'))
    res.json(noteInfo);
  });

};


