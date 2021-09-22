const express = require('express');
// const mongoose = require("mongoose");
const axios = require('axios');
const {connectDb} = require('./helpers/db')
const {host, port, db, authApiUrl} = require('./configuration');
const app = express();

//Для проверки поднятия БД
/*const postScheme = new mongoose.Schema({
    name: String
});
const Post = mongoose.model('Post', postScheme);*/

const startServer = () => {
    app.listen(port, () => {
        console.log(`Started api service on port ${port}`);
        console.log(`On host ${host}`);
        console.log(`Our database ${db}`);

        //Для проверки поднятия БД
        // Post.find(function(err,posts) {
        //     if(err) return console.error(err);
        //     console.log(`posts`, posts);
        // })
        // const silence = new Post({ name: "Silence"});
        // silence.save(function(err, savedSilence) {
        //     if (err) return console.error(err);
        //     console.log("savedSilence with volumes", savedSilence);
        // })
        // console.log(silence);
    });
}

app.get('/test', (req, res) => {
    res.send("Our api server is working correctly");
});

app.get(`/api/testApiData`, (req, res) => {
    res.json({
        testWithApi: true
    })
})

app.get(`/testWithCurrentUser`, (req, res) => {
    axios.get(authApiUrl + `/currentUser`).then(response => {
        res.json({
            testWithCurrentUser: true,
            currentUserFromAuth: response.data
        });
    });
});

connectDb()
    .on('error', console.log)
    .on('disconnect', connectDb)
    .once('open', startServer);