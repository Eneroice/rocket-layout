import {deleteAsync} from 'del';
import config from './config.js';

const clean = async () => await deleteAsync(config.res.root);

export default clean;
