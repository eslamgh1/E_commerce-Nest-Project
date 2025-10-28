import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  //  new ValidationPipe({whitelist: true,forbidNonWhitelisted: true,stopAtFirstError: true})

  app.useGlobalPipes(new ValidationPipe({whitelist: true,forbidNonWhitelisted: true,stopAtFirstError: true}));
  await app.listen(process.env.PORT ?? 5000, ()=>{
    console.log(`Application is running on: ${process.env.PORT ?? 5000}`);
  });
}
bootstrap();
