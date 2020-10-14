import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./model/entities/user.entity";
import { UsersController } from './controller/users.controller';
import { UsersService } from "./service/users.service";

@Module({
  imports: [TypeOrmModule.forFeature([User])  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports:[TypeOrmModule]
})
export class UsersModule {}
