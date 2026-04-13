FROM ferronserver/ferron:2

COPY ./index.html /var/www/ferron/index.html
COPY ./css /var/www/ferron/css
COPY ./js /var/www/ferron/js
COPY ./images /var/www/ferron/images