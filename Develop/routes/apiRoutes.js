
// ROUTING

module.exports = (app) => {

  app.get('/api/notes', (req, res) => res.json(tableData));

  app.get('/api/waitlist', (req, res) => res.json(waitListData));

  app.post('/api/tables', (req, res) => {

    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    } else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

  app.post('/api/clear', (req, res) => {
    // Empty out the arrays of data
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
};
