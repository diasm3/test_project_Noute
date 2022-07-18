import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import {
   DocumentBuilder,
   SwaggerCustomOptions,
   SwaggerModule,
} from '@nestjs/swagger';
import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';

async function bootstrap() {
   // create express server
   const logger = new Logger();
   const server = express();
   const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

   // swagger module init
   const swaggerConfig = new DocumentBuilder()
      .setTitle('미니프로젝트')
      .setDescription('API description')
      .setVersion('1.0')
      .build();
   const document = SwaggerModule.createDocument(app, swaggerConfig);
   const customOptions: SwaggerCustomOptions = {
      swaggerOptions: {
         persistAuthorization: true,
      },
      customSiteTitle: 'API Documentation',
   };
   SwaggerModule.setup('api', app, document, customOptions);

   // init port and server
   const serverPort = 3000;
   const port = serverPort || 8080;
   await app.listen(port);
   logger.log(`Application running on port:: ${port}`);
}
bootstrap();
