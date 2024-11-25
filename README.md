# CBananaS

## Requisitos Previos

Asegúrate de tener las siguientes herramientas instaladas en tu sistema:

Node.js (versión 21 o superior) (opcional, si usas Docker no es necesario instalar Node.js en tu sistema).
NPM (incluido con Node.js) (opcional, si usas Docker no es necesario instalar NPM en tu sistema).
PostgreSQL (opcional, si usas Docker no es necesario instalar PostgreSQL en tu sistema).
Docker y Docker Compose (necesario para levantar el proyecto con contenedores).
Git (opcional, para clonar el repositorio).

## Instrucciones para Levantar el Proyecto

Opción 1: Usando Docker (Recomendado)
Este proyecto incluye una configuración de Docker para levantar todos los servicios necesarios (base de datos y aplicación) de manera rápida y sencilla.

1. Clonar el Repositorio
   Primero, clona el repositorio en tu máquina local:

bash
Copiar código
git clone https://github.com/tu-repositorio/cbananas.git
cd cbananas 2. Configurar las Variables de Entorno
Crea un archivo .env en la raíz del proyecto con las siguientes variables de entorno (personalízalas según tu configuración):

env
Copiar código
DB_TYPE=
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=
PORT=
Nota: Para usar Docker, el DB_HOST debe ser el nombre del contenedor de la base de datos (cbananas_db).

3. Levantar los Contenedores
   Levanta los contenedores de Docker (aplicación y base de datos) con el siguiente comando:

bash
Copiar código
docker-compose up -d
Esto creará y levantará dos servicios:

cbananas_db: Contenedor de PostgreSQL.
cbananas_app: Contenedor de la aplicación Node.js. 4. Verificar el Estado
Para verificar que los contenedores están corriendo correctamente:

bash
Copiar código
docker ps
Deberías ver algo como esto:

bash
Copiar código
CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES
xxxxxxxxxxxx postgres:15 "docker-entrypoint.s…" X minutes ago Up X minutes 0.0.0.0:5432->5432/tcp cbananas_db
xxxxxxxxxxxx cbananas_app "node ..." X minutes ago Up X minutes 0.0.0.0:3000->3000/tcp cbananas_app 5. Acceder a la Aplicación
La aplicación estará disponible en: http://localhost:3000
La documentación de la API (Swagger) estará en: http://localhost:3000/api-docs 6. Detener los Contenedores
Para detener los contenedores, utiliza:

bash
Copiar código
docker-compose down
Opción 2: Levantar el Proyecto Manualmente (Sin Docker)
Si prefieres no usar Docker, puedes seguir estos pasos:

1. Clonar el Repositorio
   bash
   Copiar código
   git clone https://github.com/tu-repositorio/cbananas.git
   cd cbananas
2. Instalar Dependencias
   bash
   Copiar código
   npm install
3. Configurar las Variables de Entorno
   Crea un archivo .env en la raíz del proyecto con las siguientes variables de entorno (personalízalas según tu configuración):

env
Copiar código
DB_TYPE=postgres
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=tu_usuario
DB_PASSWORD=tu_contraseña
DB_DATABASE=nombre_base_de_datos
PORT=3000 4. Iniciar la Base de Datos
Asegúrate de que PostgreSQL esté corriendo en tu máquina y que la base de datos especificada en el archivo .env exista. Si no, crea la base de datos manualmente.

5. Levantar el Proyecto
   bash
   Copiar código
   npm run dev
   Esto iniciará el servidor en el puerto especificado en el archivo .env (por defecto, el puerto es 3000).

## Documentación con Swagger

La API está documentada con Swagger. Una vez que el proyecto esté corriendo, puedes acceder a la documentación a través de la siguiente URL:

http://localhost:3000/api-docs

## Scripts Disponibles

npm run dev: Inicia el proyecto en modo desarrollo con recarga automática al detectar cambios.
npm run lint: Ejecuta ESLint para analizar el código en busca de errores o inconsistencias.
npm run format: Aplica el formato definido por Prettier al código.

## Tecnologías Utilizadas

Node.js: Versión 21.
Express: Framework para crear la API.
TypeORM: ORM para manejar la base de datos PostgreSQL.
Swagger: Herramienta para documentar la API.
TypeScript: Superset de JavaScript para tipado estático.
Docker y Docker Compose: Para levantar fácilmente la aplicación y la base de datos.

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
Para entornos de producción, asegúrate de usar contraseñas seguras y configurar adecuadamente las variables de entorno.
¡Gracias por colaborar en CBananas! 🚀
