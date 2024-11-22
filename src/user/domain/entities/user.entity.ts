import { Session } from '@src/session/domain/entities/session.entities';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'node_modules/typeorm/index';

@Entity({ name: 'users', schema: 'public' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'int',
    nullable: false,
  })
  dni: number;

  @Column({
    type: 'boolean',
  })
  hasActiveScooter: boolean;

  @Column({ type: 'boolean', default: false })
  active_session: boolean;

  @Column({
    type: 'int',
    nullable: true,
  })
  bonus_minutes: number;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @OneToMany(() => Session, (session) => session.user)
  session: Session[];
}
