const express = require('express');
const CryptoJS = require("crypto-js");
const {check, validationResult} = require('express-validator');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.post('/encrypt',
    check('text').not().isEmpty(),
    check('secret').not().isEmpty(),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        const {text, secret} = req.body;
        var encodedText = CryptoJS.AES.encrypt(text, secret).toString();
        res.json({
            data: encodedText
        })
    })

app.post('/decrypt',
    check('text').not().isEmpty(),
    check('secret').not().isEmpty(),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        const {text, secret} = req.body;
        var decodedText = CryptoJS.AES.decrypt(text, secret).toString(CryptoJS.enc.Utf8);
        res.json({
            data: decodedText
        })
    })

app.listen(3000);