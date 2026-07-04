#!/bin/bash
export DB_URL="${MYSQL_URL}"
php artisan storage:link --force
php artisan config:clear
php artisan migrate --force &
php artisan serve --host=0.0.0.0 --port=${PORT:-8080}
