FROM php:8.2-fpm

RUN apt-get update && apt-get install -y \
    git unzip curl nginx libzip-dev libicu-dev libpng-dev libonig-dev libxml2-dev \
    nodejs npm \
    && docker-php-ext-install intl zip bcmath gd mbstring pdo_mysql xml

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app
COPY . .

RUN cp .env.example .env \
    && php artisan key:generate \
    && composer install --no-dev --optimize-autoloader --no-scripts --no-interaction \
    && npm install \
    && npm run build \
    && php artisan optimize

COPY docker/nginx.conf /etc/nginx/sites-enabled/default

COPY docker/start.sh /start.sh
RUN chmod +x /start.sh

EXPOSE 80
CMD ["/start.sh"]
