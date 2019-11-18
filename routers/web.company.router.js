let express = require('express');
let router = express.Router();

let companyController = require('../controllers/web/web.company.controller');

router.get('/', (req, res, next) => {
    res.render('RegisterCompany.ejs', {title: "Company Register"});
});

router.post('/', async (req,res,next) => {
    var body = req.body;

    let company = {
        Address: body.Address,
        Email: body.Email,
        Name: body.Name,
        PhoneNumber: body.PhoneNumber
    }
    
    console.log(company);

    var result = await companyController.addCompany(company);

    console.log(result);

    if(result === 'Success') res.send(200).end();
    else res.send(400).end();
});

module.exports = router;