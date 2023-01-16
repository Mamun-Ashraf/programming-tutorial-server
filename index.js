const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('TUTORIAL API Running');
});

app.listen(port, () => {
    console.log('PROGRAMMING TUTORIAL Server running on port', port);
})