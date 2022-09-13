import IAsset from '@modules/asset/entities/IAsset';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('assets')
class Assets implements IAsset {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  imageUrl: string;

  @Column()
  tokenIpfs: string;

  @CreateDateColumn()
  createdAt: Date;
}

export default Assets;
