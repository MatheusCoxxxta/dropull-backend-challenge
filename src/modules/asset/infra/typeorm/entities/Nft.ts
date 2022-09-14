import IAsset from '@modules/asset/entities/IAsset';
import INft from '@modules/asset/entities/INft';
import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Assets from './Assets';
import { v4 as uuidv4 } from 'uuid';

@Entity('nft')
export default class Nft implements INft {
  constructor() {
    if (!this.id) this.id = uuidv4();
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  token: string;

  @Column({ select: false })
  assetId: string;

  @ManyToOne(() => Assets, (asset) => asset.nfts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    nullable: true,
  })
  @JoinColumn({ name: 'assetId' })
  asset: IAsset;
}
