#!/bin/bash
php artisan storage:link --force
php artisan config:clear
php artisan config:cache
php-fpm -D
php artisan migrate --force &
sed "s/listen 80/listen ${PORT:-80}/" -i /etc/nginx/sites-enabled/default
nginx -g "daemon off;"
