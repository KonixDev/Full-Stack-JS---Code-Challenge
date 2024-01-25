# Usa una imagen oficial de Node.js con la versión 14
FROM node:14

WORKDIR /usr/src/app

# Copia los archivos de la aplicación al contenedor
COPY package*.json ./
COPY src/ ./src/

# Instala las dependencias
RUN npm install

# Expone el puerto en el que la aplicación se ejecuta
EXPOSE 5000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "start"]
