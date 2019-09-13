const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./dist/babyshower-ruizarce'));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname,'/dist/src/babyshower-ruizarce/index.html'));
});
app.listen(process.env.PORT || 8080);
