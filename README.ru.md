# :rocket: Rocket Layout [![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)
[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/Eneroice/rocket-layout/blob/master/README.md) [![ru](https://img.shields.io/badge/lang-ru-blue.svg)](https://github.com/Eneroice/rocket-layout/blob/master/README.ru.md)

Rocket Layout — это простая Gulp-сборка, которая решает множество рутинных задач при верстке макета сайта.

## :point_right: Начало работы
1. Скопируйте сборку локально с помощью Git:
`$ git clone https://github.com/Eneroice/rocket-layout.git`

2. Перейдите в папке со сборкой: `$ cd rocket-layout`
3. Инициализируйте зависимости с помощью пакетного менеджера: `$ npm i`
4. Теперь сборка готова к работе, перейдите к [разделу команд]()

## :speech_balloon: NPM-скрипты
| Скрипт            | Функционал                           | Gulp CLI                       |
| ----------------- | ------------------------------------ | ------------------------------ |
| `$ npm run dev`   | Запускает режим лайв-разработки      | gulp main --dev                |
| `$ npm run build` | Запускает сборку проекта             | gulp main --build              |
| `$ npm run bem`   | Запускает процесс создания BEM-блока | gulp createBEMBlock --css --js |

> Отличия режима «dev» и «build»:
>— «dev» запускает лайв-сервер для разработки
>(Gulp-задачи `watcher.task.js` & `server.task.js`)
>— «dev» генерирует исходные карты (sourcemaps) для .css и .js
>— «build» минифицирует файлы .css и .js
