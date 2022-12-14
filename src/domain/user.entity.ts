import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TrainProfile } from './train-profile.entity';
import { UserAuthority } from './user-authority.entity';

@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({
    name: 'email',
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  email: string;

  @OneToMany((type) => UserAuthority, (userAuthority) => userAuthority.user, {
    eager: true,
  })
  authorities?: any[];

  @OneToMany((type) => TrainProfile, (trainProfile) => trainProfile.user, {
    cascade: true,
  })
  myProfiles?: any[];

  @Column({ nullable: true, name: 'current-hashed-refresh-token' })
  currentHashedRefreshToken: string;
}
