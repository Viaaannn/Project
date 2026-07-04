#!/bin/bash
export DB_HOST="${MYSQL_HOST:-127.0.0.1}"
export DB_PORT="${MYSQL_PORT:-3306}"
export DB_DATABASE="${MYSQL_DATABASE:-laravel}"
export DB_USERNAME="${MYSQL_USER:-root}"
export DB_PASSWORD="${MYSQL_PASSWORD:-}"
php artisan storage:link --force
php artisan config:clear
php artisan migrate --force &
php artisan serve --host=0.0.0.0 --port=${PORT:-8080}
