# Интеллектуальная система для определения стоимости квартиры в городе владивосток

Запуск сервера на [http://localhost:3000](http://localhost:3000)

## Поднять все сервисы

`docker compose up`

В случае изменения dockerfile `docker compose --duild --force-recreate`

## Загрузить данные в бд

Все команды выполняются в контейнере php

`docker compose exec server sh`

Удаление базы данных

`php bin/console doctrine:database:drop --force`

Создание базы данных

`php bin/console doctrine:database:create`

Удаление текущей схемы данных

`php bin/console doctrine:schema:drop --force`

Установка последней миграции

`php bin/console doctrine:migrations:migrate` (Может потребоваться еще раз удалить схему *БАГ*)

Загрузка фикстур

`php bin/console doctrine:fixtures:load`

