import IAssetManager from '@modules/asset/use-cases/ports/IAssetManager';
import FormData from 'form-data';
import { resolve } from 'path';
import fs from 'fs';
import api from '../api/PinataServer';

export default class PinataManager implements IAssetManager {
  async pinFile(path: string): Promise<string> {
    const data = new FormData();
    data.append(
      'file',
      fs.createReadStream(
        resolve(__dirname, '..', '..', '..', '..', '..', '..', path),
      ),
    );

    const { data: responseData } = await api.post(
      '/pinning/pinFileToIPFS',
      data,
      {
        headers: {
          Authorization: `Bearer ${process.env.PINATA_JWT}`,
        },
      },
    );

    return responseData.IpfsHash;
  }
}
