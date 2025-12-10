import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import type { Request, Response } from 'express';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from 'src/app.module';

const server = express();

let bootstrapPromise: Promise<express.Express> | null = null;

async function bootstrap() {
  const adapter = new ExpressAdapter(server);
  const app = await NestFactory.create(AppModule, adapter, { logger: false });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      stopAtFirstError: true,
    }),
  );

  await app.init();
  return server;
}

export default async function handler(req: Request, res: Response) {
  try {
    if (!bootstrapPromise) bootstrapPromise = bootstrap();
    const appServer = await bootstrapPromise;
    appServer(req, res);
  } catch (err) {
    console.error('Nest bootstrap error:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}
