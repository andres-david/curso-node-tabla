const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, list, hasta) => {

  try {

    let salida = '';
    let consola = '';

    for(let i = 0; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base*i}\n`;
      consola += `${base} ${'x'.yellow} ${i} ${'='.yellow} ${base*i}\n`;
    }

    if(list) {
      console.log('==================='.green);
      console.log(`   ${colors.green('Tabla del')} ${colors.cyan(base)}   `);
      console.log('==================='.green);

      console.log(consola);
    }


    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `Archivo tabla-${base}.txt`;

  } catch (err) {
    throw err;
  }



}

module.exports = {
  crearArchivo
}
