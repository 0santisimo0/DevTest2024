# Usa una imagen de Node.js
FROM node:18

# Configura el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente a /app en el contenedor
COPY . .

# Expone el puerto de la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "dev"]