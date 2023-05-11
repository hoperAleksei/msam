FROM php:7.4-fpm

ENV COMPOSER_ALLOW_SUPERUSER=1

RUN docker-php-ext-install mysqli pdo pdo_mysql && docker-php-ext-enable pdo_mysql

RUN rm -rf /var/lib/apt/lists/*
RUN rm -rf /etc/apt/sources.list.d/*
RUN apt-get update

RUN apt-get install -y \
        git \
        libzip-dev \
        zip \
        unzip \
  && docker-php-ext-install zip

WORKDIR /app

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"; \
    php -r "if (hash_file('sha384', 'composer-setup.php') ===  \
    '55ce33d7678c5a611085589f1f3ddf8b3c52d662cd01d4ba75c0ee0459970c2200a51f492d557530c71c15d8dba01eae')  \
    { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"; \
    php composer-setup.php --filename=composer --install-dir=/usr/local/bin;\
    php -r "unlink('composer-setup.php');"

COPY . /app

RUN composer require --dev symfony/web-server-bundle ^4.4.2 --no-scripts
RUN composer require --dev symfony/debug-bundle --no-scripts
RUN composer update
RUN composer install

# php bin/console doctrine:schema:drop --force
# php bin/console doctrine:migrations:migrate
# php bin/console doctrine:fixtures:load

CMD ["php", "bin/console", "server:run", "0.0.0.0:8000"]

# php bin/console server:run 0.0.0.0:8000