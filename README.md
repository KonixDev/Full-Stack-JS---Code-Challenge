## Desafío Full Stack JS - Challenge

Este repositorio contiene las implementaciones del desafío Full Stack JS, que consiste en desarrollar un API en Node.js + Express y un cliente en React + React Bootstrap para consumir y mostrar información proveniente de un API externo.


### Documentación (SWAGGER UI)

Puedes acceder a la documentación aquí:
[DOCUMENTACIÓN](http://localhost:5000/api-docs/)


###  API (Node.js + Express)

Caracteristicas del backend:
NodeJS 14
Standard JS
Swagger

**Métodos a utilizar:**

- Para listar archivos:

```bash
curl -X GET http://localhost:5000/files/data -H 'content-type: application/json'
```

- Para obtener un archivo específico:
```bash
curl -X GET http://localhost:5000/files/data?fileName=test1.csv -H 'content-type: application/json'
```

- Ejemplo de respuesta
```bash
[
  {
    "file": "file1.csv",
    "lines": [
      {
        "text": "RgTya",
        "number": 64075909,
        "hex": "70ad29aacf0b690b0467fe2b2767f765"
      },
      ...
    ]
  }
]
```

### FRONT (React.JS + React Bootstrap)

Layout
La aplicación en React utiliza React Bootstrap y muestra la información obtenida del API en /files/data.

Caracteristicas del frontend:
Programación funcional y Hook Effects en React.
NodeJS 16
React + VITE, React Bootstrap


### Clonar Repositorio 
```bash
git clone .....
cd backend && npm install
cd front && npm install
```

### Comandos
- Iniciar backend:
```bash
cd backend && npm run start
```
- Iniciar Front:
```bash
cd front && npm run dev
```

### DOCKER 

- [Backend NodeJS 14 Image](https://hub.docker.com/r/konixdev/backend-api)
- [Front VITE + React NodeJS 16 Image](https://hub.docker.com/r/konixdev/frontcsvlister)

### Testing
El backend proporciona un comando para testing sencillo con Mocha y Chai.
```bash
npm run test
```



