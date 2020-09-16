# server api
Endpoints necesarios consumibles para registrar clientes, autos por cada cliente y las
respectivas reparaciones relacionadas a un determinado auto

## Instalacion y uso
Entrar a la carpeta `server` e instalar las dependencias especificadas en el `package.json`
```
$ npm install
```
Una vez instalada las dependencias, basta con ejecutar la siguiente instruccion para arrancar el servidor
```
$ npm start 
```
> Cabe resaltar, que la base de datos usada en esta api es **mongoDB** en la version 4.4 preferiblemente, el cual se puede descargar de [aqui](https://docs.mongodb.com/manual/installation/)

## Endpoints disponibles
Es posible consumir los siguientes endpoints desde postman o cualquier app:
| Metodo | URI | | Parameters |
|-	|-	|-	|-	|
| POST | /users/login | Auth | username, password
|  GET	| /users |  	|  	|
| POST	| /users/create |  	| username, password |
| GET	| /clients |  	|  |
| POST	| /clients/create |  | names, lastNames, streetAddress, email |
| POST	| /cars/create |  | emailclient, brand, model |
| POST	| /cars/fixes/create |  | client_id, car_id, observ |


# client
El cliente que consume la anterior api, está desarrollada usando el siguiente stack
    > React
    > Redux
    > React Router
Y esta ubicada en la carpeta `cliente`, que, nuevamente debes instalar las dependencias relacionadas
```
$ npm install 
```
Recuerda cambiar la direccion url del endpoint que esta configurada en la variable `API_URL` del archivo
`src/helpers/constants.js` por la direccion del servidor en donde hayas instalado la api

Para ejecutar el cliente, ejecuta
```
$ npm start 
```
Si quieres generar los estaticos del cliente para desplegar en algun hosting, debes ejecutar lo siguiente
```
$ npm run build
```
Y los archivos generados se encuentran en la carpeta `build`


# Demo
Se puede ver una demo del proyecto en la siguiente direccion:
[http://fixcars.ferdinania.com/](http://fixcars.ferdinania.com/)
