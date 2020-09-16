# server api
Endpoints necesarios consumibles para registrar clientes, autos por cada cliente y las
respectivas reparaciones relacionadas a un determinado auto

## Uso
Entrar a la carpeta `server` e instalar las dependencias especificadas en el `package.json`
```
$ npm install
```
Una vez instalada las dependencias, basta con ejecutar la siguiente instruccion para arrancar el servidor
```
$ npm start 
```


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
