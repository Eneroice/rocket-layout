# :rocket: Rocket Layout [![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)
[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/Eneroice/rocket-layout/blob/master/README.md) [![ru](https://img.shields.io/badge/lang-ru-blue.svg)](https://github.com/Eneroice/rocket-layout/blob/master/README.ru.md)

Rocket Layout — это простая Gulp-сборка, которая решает множество рутинных задач при верстке макета сайта.

## :scroll: Разделы
##### [:sparkles: Особенности сборки](#sparkles-особенности-сборки)
##### [:exclamation: Рекомендации](#grey_exclamation-рекомендации)
##### [:point_right: Начало работы](#point_right-начало-работы)
##### [:open_file_folder: Файловая структура](#open_file_folder-файловая-структура)
##### [:speech_balloon: NPM-скрипты](#speech_balloon-npm-скрипты)
##### [:package: Зависимости](#package-зависимости)
---

## :sparkles: Особенности сборки
* Используется препроцессор `SASS (SCSS)`
* Используется транскомпилятор `Babel` для JavaScript
* Используются линтеры `ESLint` & `Stylelint`
* Используются пакеты `husky` & `lint-staged` для запуска линтеров перед коммитом
* Используется методология БЭМ (частично)
* Автоматический парсинг мета-данных шрифтов для создания полного `@font-face`

## :exclamation: Рекомендации
> Рекомендуется использовать для разработки [Visual Studio Code](https://code.visualstudio.com)
1. Установите расширение [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Установите расширение [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)<br>Добавьте в `settings.json` редактора кода следующие настройки:
```
"stylelint.validate": [
  "css",
  "scss"
],
```
3. Установите расширение [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

## :point_right: Начало работы
1. Скопируйте сборку локально с помощью Git:
`$ git clone https://github.com/Eneroice/rocket-layout.git`

2. Перейдите в папку со сборкой: `$ cd rocket-layout`
3. Установите все необходимые зависимости с помощью пакетного менеджера (NPM): `$ npm i`
4. Теперь сборка готова к работе, перейдите к [разделу команд](#speech_balloon-npm-скрипты)

## :open_file_folder: Файловая структура
```
📂 rocket-layout
├── 📂 core
│   ├── 📄 index.js
│   ├── 📄 config.js
│   ├── 📄 server.task.js
│   ├── 📄 watcher.task.js
│   ├── 📄 clean.task.js
│   ├── 📄 views.task.js
│   ├── 📄 scripts.task.js
│   ├── 📄 styles.task.js
│   └── 📄 fonts.task.js
├── 📂 app
│   ├── 📂 blocks
│   │   ├── ...
│   │   ├── 📄 _blocks.js
│   │   └── 📄 _blocks.scss
│   ├── 📂 fonts
│   ├── 📂 images
│   ├── 📂 pages
│   ├── 📂 scripts
│   │   └── 📄 main.js
│   ├── 📂 styles
│   │   ├── ...
│   │   ├── 📄 _fonts.scss
│   │   ├── 📄 _mixins.scss
│   │   └── 📄 main.scss
│   └── index.html
├── 📂 dist
├── 📂 .husky
├── 📄 package.json
├── 📄 gulpfile.babel.js
├── 📄 .babelrc
├── 📄 .editorconfig
├── 📄 .eslintrc.cjs
├── 📄 .stylelintrc
├── 📄 .lintstagedrc
└── 📄 .gitignore
```
### 📂 rocket-layout
* `📂 core` — папка с ядром сборки
* `📂 app` — рабочая папка исходников макета
* `📂 dist` — собранные файлы макета, лайв-сервер использует именно эту папку во время разработки
* `📂 .husky` — папка с скриптами пакета .husky
* `📄 package.json` — настройки проекта и список всех зависимостей
* `📄 gulpfile.babel.js` — конфигурационный файл Gulp
* `📄 .babelrc` — конфигурационный файл Babel
* `📄 .editorconfig` — конфигурационный файл EditorConfig
* `📄 .eslintrc.cjs` — конфигурационный файл линтера ESLint
* `📄 .stylelintrc` — конфигурационный файл линтера Stylelint
* `📄 .lintstagedrc` — конфигурационный файл пакета lint-staged
* `📄 .gitignore` — список файлов и папок, игнорируемых git

### 📂 core
* `📄 index.js` — файл экспорта всех задач
* `📄 config.js` — конфигурационный файл ядра
* `📄 server.task.js` — файл-задача, запускающая сервер для разработки
* `📄 watcher.task.js` — файл-задача, отслеживающая изменения файлов в режиме разработки
* `📄 clean.task.js` — файл-задача, удаляющая папку предыдущей сборки макета (dist)
* `📄 views.task.js` — файл-задача, собирающая .html-файлы
* `📄 scripts.task.js` — файл-задача, собирающая .js-файлы
* `📄 styles.task.js` — файл-задача, собирающая .scss-файлы
* `📄 fonts.task.js` — файл-задача, собирающая шрифты

### 📂 app
* `📂 blocks` — папка с блоками (БЭМ)
* `📄 _blocks.js` — файл, объединяющий все скрипты блоков (подключается в app/scripts/main.js)
* `📄 _blocks.scss` — файл, объединяющий все стили блоков (подключается в app/styles/main.scss)
<br>

* `📂 fonts` — папка с шрифтами
> Шрифты добавляются только в формате .ttf, сборка переведёт их в .woff2 и создаст @font-face
* `📂 images` — папка с изображениями
* `📂 pages` — папка с .html-страницами
<br>

* `📂 scripts` — папка с скриптами
* `📄 main.js` — основной .js-файл
<br>

* `📂 styles` — папка с шрифтами
* `📄 _fonts.scss` — файл, подключащий шрифты
* `📄 _mixins.scss` — файл, хранящий миксины (@mixin) проекта
* `📄 main.scss` — основной .scss-файл
<br>

* `📄 index.html` — основной .html-файл

## :speech_balloon: NPM-скрипты
| Скрипт            | Функционал                           | Gulp CLI                       |
| ----------------- | ------------------------------------ | ------------------------------ |
| `$ npm run dev`   | Запускает режим лайв-разработки      | gulp main --dev                |
| `$ npm run build` | Запускает сборку проекта             | gulp main --build              |
| `$ npm run bem`   | Запускает процесс создания BEM-блока | gulp createBEMBlock --css --js |

### Отличия режима «dev» и «build»:
| Функционал   | dev    | build |
| ----------------- |:------------------------------------:|:------------------------------:|
| Лайв-сервер для разработки<br>`server.task.js` & `watcher.task.js`   | :heavy_plus_sign:      | :heavy_minus_sign:                |
| Исходные карты (sourcemaps)<br>`.css` `.js` | :heavy_plus_sign:   | :heavy_minus_sign:     |
| Минификация файлов<br>`.css` `.js`  | :heavy_minus_sign: | :heavy_plus_sign: |

## :package: Зависимости
