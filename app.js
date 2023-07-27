const { crearArchivo } = require('./helpers/multipiclar');
const argv  = require('./config/yargs');
const colors = require('colors');


console.clear();

console.log(argv)

crearArchivo(argv.b, argv.l, argv.h)
  .then(nombreArchivo => console.log( nombreArchivo.rainbow, 'creado' ))
  .catch(err => consolo.log(err))

