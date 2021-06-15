const notes = require("../db/db.json")

module.exports = (app) => {

  app.get('/api/tables', (req, res) => res.json(notes));

   app.post('/api/notes', (req, res) => {

  });

};
