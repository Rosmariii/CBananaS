import express from 'express';
import { AppDataSource } from './db/db';
process.loadEnvFile();
import authController from '@src/auth/infrastructure/controller/authController';
import userController from '@src/user/infrastructure/controller/userController';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from 'swagger.config';
const app = express();

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    app.get('/', (request, response) => {
      response.send('Bienvenidos al proyecto de Banana Software');
    });

    app.use(express.json());
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.use('/auth', authController);
    app.use('/user', userController);

    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
