# Nextjs

yarn create next-app



yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest
yarn install
yarn tailwindcss init -p

En __ tailwind.config.js __ hay que sustituir esta linea

purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],



#https://futuramaapi.herokuapp.com/

# Installing DB

npm i mongoose
atlas mongodb
crear databaseuser en DataBase Acces
crear una nueva Conexion en Databases/crear conexion copy url de nuestra conexio
Crear Nombre de conexion y pass
Una vez creado crear en archivo .env.local que no se publicara ni subira en git don almacenaremos
nuestro user y pass y creamos una constante para guardar la url de nuestra conexion
En Atlas Mongodb creamos una nueva coleccion que corresponda el nombre con la conexion a la 
aplicacion que hemos generado anteriormente
