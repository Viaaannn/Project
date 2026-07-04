FROM php:8.2-fpm
ARG CACHEBUST

RUN echo "Build: $(date)" > /build.txt

RUN apt-get update && apt-get install -y \
    git unzip curl libzip-dev libicu-dev libpng-dev libonig-dev libxml2-dev \
    nodejs npm \
    && docker-php-ext-install intl zip bcmath gd mbstring pdo_mysql xml

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app
COPY . .

RUN cp .env.example .env \
    && composer install --no-dev --optimize-autoloader --no-interaction \
    && php artisan key:generate \
    && npm install \
    && npm run build \
    && chown -R www-data:www-data storage bootstrap/cache \
    && chmod -R 755 storage bootstrap/cache

COPY docker/start.sh /start.sh
RUN chmod +x /start.sh

EXPOSE ${PORT:-8080}
CMD ["/start.sh"]
