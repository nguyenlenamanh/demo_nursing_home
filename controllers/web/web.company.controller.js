let mongodb = require('mongoose');

mongodb.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});

let Company = require('../../models/company.model');

module.exports.addCompany = async (company) => {
    let com = new Company({
        Address: company.Address,
        Email: company.Email,
        Name: company.Name,
        PhoneNumber: company.PhoneNumber
    });

    try{
        await com.save();
        return "Success";
    }
    catch (e) {
        return e;
    }
}

