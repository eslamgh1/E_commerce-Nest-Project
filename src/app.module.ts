import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './module/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';


@Module({
  imports: [
    ConfigModule.forRoot({
    envFilePath: './config/.env',
    isGlobal: true
  }), 
  UserModule,
  MongooseModule.forRoot(process.env.DB_URL_LOCAL as string , {
    
  onConnectionCreate: (connection: Connection) => {
    connection.on('connected', () => console.log(`Mongo DB connected successfully ${process.env.DB_URL_LOCAL}`));  
    connection.on('disconnected', () => console.log(`Mongo DB disconnected successfully ${process.env.DB_URL_LOCAL}`));

    return connection;
  }
  }),

  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { 

}