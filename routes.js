const { Router } = require('express')
const routes = Router();
const EmpregadosController = require('./Controllers/EmpregadosController')


 routes.get('/', EmpregadosController.verify);
 routes.get('/empregados', EmpregadosController.index);
 routes.get('/empregados/exists', EmpregadosController.exists);
 routes.post('/empregados', EmpregadosController.create);

 module.exports = routes