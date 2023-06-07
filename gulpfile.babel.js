import config from './core/config';

exports.development = () => {
  console.log(config.buildMode);
};

exports.buildProject = () => {
  console.log(config.buildMode);
};
