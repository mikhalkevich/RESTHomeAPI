## RESTHomeAPI

version 2.0.2
Данное API предназначено для приёмо-передатчика МТRF-64, разработанного компанией Ноотехника.

## Информация по установке

- Для установки RESTHomeAPI требуется node.js.
Сперва убедитесь, что node.js установлен, либо установите по ссылке  [Node](https://nodejs.org/en/download/) 
- С помощью консоли перейти в папку, в которой будет установленный проект.
Пример <code>cd /var/www/</code>
- Установить проект из исходников из репозитория http://github.com.
Cделать это можно с помощью консольной команды:
<code>git clone http://github.com/mikhalkevich/RESTHomeApi</code>
- Далее перейдем в созданную папку:
<code>cd RESTHomeApi</code>
- И установим необходимые зависимости:
<code>npm i</code>
- Указываем необходимые разрешения приёмо-передатчику МТRF-64
<code>sudo chmod -R 777 /dev/ttyUSB0</code>
- Запускаем RESTHomeApi
<code>node app.js</code>
- После чего становится доступным web-интерфейс, использующий по умолчанию порт 9998. В файле app.js порт можно изменить. [http://localhost:9998](http://localhost:9998). 

## Ссылки

- [Wiki HTTP REST API](http://www.noo.by/wiki/HTTP_REST_API)
- [Разработка сайтов под ключ](http://mikhalkevich.colony.by)

## Поддержка

Спасибо за внимание! Информационная поддержка и разработка [Михалькевич](http://mikhalkevich.colony.by), [Ноотехника](http://www.noo.by).

## Лицензии

RESTHomeApi is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
