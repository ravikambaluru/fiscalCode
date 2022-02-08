const { valid } = require('joi');
const joi = require('joi');

const schema = joi.object({
    "name": joi.string().pattern(/^[a-z,A-Z]+$/).message("name field should contain only alphabets").required(),
    "surname": joi.string().pattern(/^[a-z,A-Z]+$/).message("surname field  should contain only alphabets").required(),
    "gender": joi.string().pattern(/^[a-z,A-Z]+$/).message("gender should contain only alphabets").required(),
    "dateOfBirth": joi.date().required(),
});

const validate = function (req, res, next) {
    const body = req.body;

    // validation for checking whether input fields were present or empty


    const validate = schema.validate(body);
    if (validate.error) {
        
        res.status(400).json({
            "status":"FAILED",
            "statusCode":400,
            "message":validate.error.message
        }).end();
    }
    else{
        next();
    }

};

module.exports = validate;