const argv = require('yargs')
    .option('b',{
        alias:'base',
        type:'number',
        demandOption:true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias:'list',
        type:'boolean',
        demandOption:true,
        default: false,
        describe: 'Lista por consola los elementos de la multiplicación'
    })
    .option('h',{
        alias:'hasta',
        type:'number',
        demandOption:true,
        describe: 'Lista por consola los elementos de la multiplicación'
    })
    .check((argv, options) =>{
        if(isNaN(argv.b)){
            throw 'La base debe ser un número'
        }
        return true;
    })
    .argv;

module.exports = argv;