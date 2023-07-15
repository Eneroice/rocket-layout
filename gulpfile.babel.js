import fs from 'fs';
import gulp from 'gulp';
import * as Core from './core/index.js';
import prompt from 'prompt';

Core.config.setEnv();

export const main = gulp.series(
    Core.clean,
    gulp.parallel(
        Core.views,
        Core.styles,
        Core.scripts,
        Core.fonts,
    ),
    (Core.config.isDev ? gulp.parallel(Core.server) : []),
    (Core.config.isDev ? gulp.parallel(Core.watcher) : []),
);

export const createBEMBlock = async () => {
  prompt.start();
  const {blockName} = await prompt.get('blockName');
  const root = `${Core.config.src.root}/blocks/${blockName}`;
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
          `${Core.config.src.root}/blocks/_blocks.scss`,
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
          `${Core.config.src.root}/blocks/_blocks.js`,
          `import './${blockName}/${blockName}.js';\n`,
          function(err) {
            if (err) throw err;
          });
    };
  }
};
