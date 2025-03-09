import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './common/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: '*', // Allowed origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed methods
    credentials: true, // Allow credentials (e.g., cookies)
    allowedHeaders: 'Content-Type, Accept', // Allowed headers
  });
  
  setupSwagger(app);
  await app.listen(8080);
}
bootstrap();
