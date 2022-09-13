import IAsset from '@modules/asset/entities/IAsset';
import INft from '@modules/asset/entities/INft';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Nft from './Nft';

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

  @OneToMany(() => Nft, (nft) => nft.asset, {
    cascade: true,
    nullable: true,
  })
  nfts?: Array<INft>;

  @CreateDateColumn()
  createdAt: Date;
}

export default Assets;
