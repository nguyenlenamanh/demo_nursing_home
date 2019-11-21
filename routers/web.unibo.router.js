let express = require('express');
let router = express.Router();

router.post('/test-api', (req, res, next) => {
    if(req.body.apikey == '12345678') {
        let a = {
            number: 1234,
            name: "Hello world."
        }
        res.json(a);
    }
    else {
        let a = {
            error: "Invalid API Key."
        }
        res.json(a);
    }
});

module.exports = router;