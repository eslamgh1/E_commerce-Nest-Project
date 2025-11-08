import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './module/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { S3Service } from './common';
import { BrandModule } from './module/brand/brand.module';

// Both AppModule and AppController now use the same class referenc

@Module({
  imports: [
    ConfigModule.forRoot({
    envFilePath: './config/.env',
    isGlobal: true
  }), 
  
  MongooseModule.forRoot(process.env.DB_URL_LOCAL as string , {
    
  onConnectionCreate: (connection: Connection) => {
    connection.on('connected', () => console.log(`Mongo DB connected successfully ${process.env.DB_URL_LOCAL}`));  
    connection.on('disconnected', () => console.log(`Mongo DB disconnected successfully ${process.env.DB_URL_LOCAL}`));

    return connection;
  }
  }),
  UserModule,
  BrandModule


  ],

  controllers: [AppController],
  providers: [AppService , S3Service],
})
export class AppModule { 

}