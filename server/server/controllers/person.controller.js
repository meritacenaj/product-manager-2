const person = require('../models/person.model');  

module.exports.getAllPeople = (request, response) => {
    person.find({})
        .then(persons => {
            console.log(persons);
            response.json({persons:persons});
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}

module.exports.createPerson = (request, response) => {
    
    person.create(request.body) 
        .then(person => response.json(person))
        .catch(err => response.json(err));
}


module.exports.getOne = (request, response) => {
    person.findOne({_id: request.params._id}) 
        .then(person => response.json({person:person}))
        .catch(err => response.json(err));
}