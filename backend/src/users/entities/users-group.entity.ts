import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './users.entity'; // import your User entity
import { Group } from 'src/groups/entities/groups.entity';

@Entity()
export class UserGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  groupId: number;

  @ManyToOne(() => User, user => user.userGroups)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Group, group => group.userGroups)
  @JoinColumn({ name: 'groupId' })
  group: Group;
}