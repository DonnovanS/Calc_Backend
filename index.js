//1. Crear un objeto express

const express = require('express');

//2. Crear un objeto que represente nuestra app

const app = express();

app.use(express.json());
//Definir los entry point de la API 
//Definir la ruta (url) en donde va a responder la API
//http://localhost:3000/ruta 

app.use(
    function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST")
        res.header("Access-Control-Allow-Headers", "Content-type");
        next();
    }
);

app.post(
    //ruta donde va a responder
    '/api/sumar',
    //Se requiere un objeto representando la peticón REQ y uno la respuesta RES
    (req, res) => {
        //procesamiento de la petición, callback ()
        console.log('Alguien se conectó a esta ruta sumar');
        const { numero_1, numero_2 } = req.body;
        const resultado = parseFloat(numero_1) + parseFloat(numero_2);
        res.json(resultado);
    }
);

app.post(
    '/api/restar',
    (req, res) => {
        const { numero_1, numero_2 } = req.body;
        const resultado = numero_1 - numero_2;
        console.log(req.body);
        res.json(resultado);
    }
);
//3. Crear un servicio para escuchar peticiones
app.post(
    '/api/dividir',
    (req, res) => {
        let resultado;

        try {
            const { numero_1, numero_2 } = req.body;
            resultado = numero_1 / numero_2
        } catch (error) {
            resultado = error;
        }
        res.json(resultado);
    }
)


app.listen(
    3000,
    () => {
        console.log('Servidor ejecutandose en el puerto 3000');
    }
);