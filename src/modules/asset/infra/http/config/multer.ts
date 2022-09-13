import multer from 'multer';
import dotenv from 'dotenv';
import { Request } from 'express';
import path from 'path';

dotenv.config();

const storageTypes = {
  local: multer.diskStorage({
    destination: function (request: Request, file, cb: Function) {
      cb(
        null,
        path.resolve(
          __dirname,
          '..',
          '..',
          '..',
          '..',
          '..',
          '..',
          'static/files',
        ),
      );
    },
    filename: function (request: Request, { originalname }, cb: Function) {
      const [fileName, extension] = originalname.split('.');

      cb(null, `${fileName}-${Date.now()}.${extension}`);
    },
  }),
};

const imageUpload = multer({ storage: storageTypes['local'] });

export { imageUpload };
