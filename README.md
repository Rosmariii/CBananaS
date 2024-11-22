# CBananaS

## Requisitos Previos

Asegúrate de tener las siguientes herramientas instaladas en tu sistema:

Node.js (versión 21 o superior)
NPM (incluido con Node.js)
PostgreSQL (como base de datos)
Git (opcional, para clonar el repositorio)
Instrucciones para Levantar el Proyecto

## 1. Clonar el Repositorio

Primero, clona el repositorio en tu máquina local:

bash
Copiar código
git clone https://github.com/tu-repositorio/cbananas.git
cd cbananas 2. Instalar Dependencias
Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

bash
Copiar código
npm install 3. Configurar las Variables de Entorno
Crea un archivo .env en la raíz del proyecto con las siguientes variables de entorno (personalízalas según tu configuración):

env
Copiar código
DB_TYPE=postgres
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=tu_usuario
DB_PASSWORD=tu_contraseña
DB_DATABASE=nombre_base_de_datos
JWT_SECRET=tu_clave_secreta
PORT=3000

## 4. Iniciar la Base de Datos

Asegúrate de que PostgreSQL esté funcionando en tu máquina y que la base de datos especificada en el archivo .env exista. Si no, crea la base de datos manualmente.

## 5. Levantar el Proyecto

Para iniciar el proyecto en modo desarrollo, utiliza el siguiente comando:

bash
Copiar código
npm run dev
Esto iniciará el servidor en el puerto especificado en el archivo .env (por defecto, el puerto es 3000).

## Documentación con Swagger

La API está documentada con Swagger. Una vez que el proyecto esté corriendo, puedes acceder a la documentación a través de la siguiente URL:

bash
Copiar código
http://localhost:3000/api-docs
Detalles sobre Swagger
La documentación utiliza Swagger UI Express.
El archivo de configuración para Swagger está integrado directamente en el código, por lo que cualquier nuevo endpoint debe ser documentado adecuadamente.
Asegúrate de seguir la estructura de los endpoints ya documentados para mantener consistencia.
Scripts Disponibles
npm run dev: Inicia el proyecto en modo desarrollo con recarga automática al detectar cambios.
npm run lint: Ejecuta ESLint para analizar el código en busca de errores o inconsistencias.
npm run format: Aplica el formato definido por Prettier al código.

## Tecnologías Utilizadas

Node.js: Versión 21.
Express: Framework para crear la API.
TypeORM: ORM para manejar la base de datos PostgreSQL.
Swagger: Herramienta para documentar la API.
TypeScript: Superset de JavaScript para tipado estático.

## Contribuir

Crea un fork del repositorio.

Crea una rama para tu nueva funcionalidad:

bash
Copiar código
git checkout -b nueva-funcionalidad
Haz tus cambios y crea un commit:

bash
Copiar código
git commit -m "Descripción de los cambios"
Envía tus cambios:

bash
Copiar código
git push origin nueva-funcionalidad
Crea un pull request desde tu fork hacia el repositorio principal.

## Notas Finales

Asegúrate de documentar todos los nuevos endpoints que agregues usando Swagger.
En caso de problemas, verifica que las dependencias estén instaladas correctamente y que la base de datos esté configurada adecuadamente.
¡Gracias por colaborar en CBananas! 🚀
