const express = require('express');
const {connectDb} = require('./helpers/db');
const axios = require('axios');
const {host, port, db, apiUrl} = require('./configuration');
const app = express();

const startServer = () => {
    app.listen(port, () => {
        console.log(`Started auth service on port ${port}`);
        console.log(`On host ${host}`);
        console.log(`Our database ${db}`);
    });
}

app.get('/test', (req, res) => {
    res.send("Our auth server is working correctly");
});

app.get(`/api/currentUser`, (req, res) => {
    res.json({
        id: `1234`,
        email: `foo@gmail.com`
    });
});

app.get(`/testWithApiData`, (req, res) => {
    axios.get(apiUrl + `/testApiData`).then(response => {
        res.json({
            testApiData: response.data.testWithApi
        });
    });
});

connectDb()
    .on('error', console.log)
    .on('disconnect', connectDb)
    .once('open', startServer);