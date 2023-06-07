import {deleteAsync} from 'del';
import config from './config.js';

export default async () => await deleteAsync(config.res.root);
