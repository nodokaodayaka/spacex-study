const express = require('express');
const app = express();
const axiosBase = require('axios');
const { response } = require('express');
const axios = axiosBase.create({
    baseURL: 'https://api.spacexdata.com', // バックエンドB のURL:port を指定する
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    },
    responseType: 'json'  
  });
const port = process.env.port || 4000;

app.get('/', async (req, res) => {
    const result = await axios.post('https://api.spacexdata.com/v4/capsules/query')
    .then(response => {
        console.log(response.data.docs);
        return response.data.docs;
    }).catch(err => {
        console.log(err);
    });
    res.send(result)
});

app.listen(port, () => {
    console.log(`listen on http://localhost:${port}`);
});