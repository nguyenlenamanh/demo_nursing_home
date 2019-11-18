let mongodb = require('mongoose');

mongodb.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});

let companySchema = new mongodb.Schema({
    Address: String,
    Email: String,
    Name: String,
    PhoneNumber: String
},{
    versionKey: false 
});

let company = mongodb.model('companies',companySchema);

module.exports = company;