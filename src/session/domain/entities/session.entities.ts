import { User } from '@src/user/domain/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'node_modules/typeorm/index';

@Entity({ name: 'sessions', schema: 'public' })
export class Session {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'timestamp' })
  start_session: Date;

  @Column({ type: 'timestamp', default: null })
  end_session: Date;

  @ManyToOne(() => User, (users) => users.session, {
    cascade: true,
    eager: true,
  })
  user: User;
}
