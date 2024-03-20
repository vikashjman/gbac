import { Module } from '@nestjs/common';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './entities/groups.entity';
import { GroupAction } from './entities/group-actions.entity';
import { Action } from './entities/actions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Group, GroupAction, Action])],
  controllers: [GroupsController],
  providers: [GroupsService]
})
export class GroupsModule {}
