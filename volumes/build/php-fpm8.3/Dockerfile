FROM php:8.3-fpm

WORKDIR /var/www

RUN apt-get update \
    && apt-get install -y \
    libmagickwand-dev \
    libmagickcore-dev \
    libzip-dev \
    libwebp-dev

#    openssh-server \
#    openssh-client

RUN docker-php-ext-install exif \
 && pecl install imagick \
 && docker-php-ext-enable imagick \
 && docker-php-ext-install xml \
 && docker-php-ext-install filter \
 && docker-php-ext-install zip \
 && docker-php-ext-install bcmath \
 && docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp \
 && docker-php-ext-install gd \
 && docker-php-ext-install intl


# && echo 'PermitRootLogin yes' >> /etc/ssh/sshd_config
#
#RUN service ssh start

#RUN groupadd sshgroup && useradd -ms /bin/bash -g sshgroup sshuser
## Create sshuser directory in home
#RUN mkdir -p /home/sshuser/.ssh
## change ownership of the key file.
#RUN chown sshuser:sshgroup /home/sshuser/.ssh/authorized_keys && chmod 600 /home/sshuser/.ssh/authorized_keys
## Start SSH service
#RUN service ssh start
## Expose docker port 22
#CMD ["/usr/sbin/sshd","-D"]

CMD ["php-fpm"]