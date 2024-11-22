import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Documentación API',
      version: '1.0.0',
      description: 'Esta es la documentación de la API de mi proyecto.',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`,
      },
    ],
  },
  apis: [
    './src/user/infrastructure/controller/*.ts',
    './src/auth/infrastructure/controller/*.ts',
  ],
};

export const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
