import { Module } from '@nestjs/common';
import { AppController } from './MainService/app.controller';
import { AppService } from './MainService/app.service';
import { HomeController } from './Home/home.controller';
import { HomeService } from './Home/home.service';
import { LoginModule } from './login/login.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => {
        // const host = config.get('database.host');
        // const credentials = config.get('database.credentials');
        // const name = config.get('database.name');
        const uri = `mongodb://localhost:27017`;
        console.log(uri);
        return { uri };
      },
      inject: [ConfigService],
    }),
    LoginModule,
    UsersModule,
  ],
  controllers: [AppController, HomeController],
  providers: [AppService, HomeService],
})
export class AppModule {}