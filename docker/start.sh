#!/bin/bash
php artisan storage:link --force
php artisan migrate --force
php-fpm -D
nginx -g "daemon off;"
