const fs = require('fs');

const colors = require('colors');

const crearArchivo = async(base, listar = false, hasta=10) =>{

    try{
        let salida, consola = '';
    
        for(i=1;i<=hasta;i++){
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${base} `+`x`.random+` ${i} `+`=`.random+` ${base*i}\n`;
        }
        if(listar){
            console.log('=================');
            console.log(`  Tabla del ${base} `);
            console.log('=================');
            console.log(salida);
        }        
        fs.writeFileSync(`./salida/Tabla_del_${base}.txt`, salida);
        return `Tabla ${base} creada.`;
    }
    catch(err){
        throw err
    }
   
}

module.exports = {
    crearArchivo
}