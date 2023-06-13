import fs from 'fs';
import gulp from 'gulp';
import clean from './core/clean.task.js';
import server from './core/server.task.js';
import watcher from './core/watcher.task.js';
import views from './core/views.task.js';
import styles from './core/styles.task.js';
import scripts from './core/scripts.task.js';
import config from './core/config.js';
import prompt from 'prompt';

config.setEnv();

export const main = gulp.series(
    clean,
    gulp.parallel(
        views,
        styles,
        scripts,
    ),
    (config.isDev ? gulp.parallel(server) : []),
    (config.isDev ? gulp.parallel(watcher) : []),
);

export const createBEMBlock = async () => {
  prompt.start();
  const {blockName} = await prompt.get('blockName');
  const root = `${config.src.root}/blocks/${blockName}`;
  const file = `${root}/${blockName}`;
  if (fs.existsSync(root)) {
    console.log('❌ A block with the same name already exists.');
  } else {
    fs.mkdir(root, function(err) {
      if (err) throw err;
      console.log('📁 Folder is created successfully.');
    });
    fs.writeFile(`${file}.html`, '', function(err) {
      if (err) throw err;
      console.log('📄 File .html is created successfully.');
    });
    if (process.argv.includes('--css')) {
      fs.writeFile(`${file}.scss`, '', function(err) {
        if (err) throw err;
        console.log('📄 File .scss is created successfully.');
      });
      fs.appendFile(
          `${config.src.root}/blocks/_blocks.scss`,
          `@import "${blockName}/${blockName}";\n`,
          function(err) {
            if (err) throw err;
          });
    };
    if (process.argv.includes('--js')) {
      fs.writeFile(`${file}.js`, '', function(err) {
        if (err) throw err;
        console.log('📄 File .js is created successfully.');
      });
      fs.appendFile(
          `${config.src.root}/blocks/_blocks.js`,
          `import '${blockName}/${blockName}.js';\n`,
          function(err) {
            if (err) throw err;
          });
    };
  }
};
