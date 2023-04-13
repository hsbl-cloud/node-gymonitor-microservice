const Validator = require('validatorjs')

const validator = async (body, rules) => {
    const validation = new Validator(body, rules)    
    return validation
}

module.exports = {validator}