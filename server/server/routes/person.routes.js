const PersonController = require('../controllers/person.controller');  
module.exports = (app) => {
    app.get('/api/people', PersonController.getAllPeople);
    app.post('/api/people', PersonController.createPerson); 
    app.get('/api/people/:_id', PersonController.getOne);
    app.put('/api/people/:_id', PersonController.updatePerson);
    app.delete('/api/people/:_id', PersonController.deletePerson); 
}