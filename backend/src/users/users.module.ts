import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './entities/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserGroup } from './entities/users-group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserGroup])],

  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
