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

@Entity('nft')
export default class Nft implements INft {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Generated('uuid')
  token: string;

  @Column()
  assetId: string;

  @ManyToOne(() => Assets, (asset) => asset.nfts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    nullable: true,
  })
  @JoinColumn({ name: 'assetId' })
  asset: IAsset;
}
