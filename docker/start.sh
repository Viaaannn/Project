#!/bin/bash
php artisan storage:link --force
php-fpm -D
php artisan migrate --force &
nginx -g "daemon off;"
