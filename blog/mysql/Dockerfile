FROM mysql:8
WORKDIR /backuper

# Needed args
ARG MYSQL_ROOT_PASSWORD
ARG MYSQL_DATABASE

# Install Debian packages
RUN apt -qq update
RUN apt install -y curl unzip cron

# Install rclone
RUN curl -O https://downloads.rclone.org/rclone-current-linux-amd64.zip &&\
	unzip rclone-current-linux-amd64.zip &&\
	cd rclone-*-linux-amd64 && cp rclone /usr/bin/ &&\
	chown root:root /usr/bin/rclone && chmod 755 /usr/bin/rclone

# Create rclone conf containing directory
RUN mkdir -p /root/.config/rclone/

# Copy rclone conf to it
COPY rclone.conf /root/.config/rclone/rclone.conf

# Copy the backuper script into the cron daily execution directory
COPY backuper.sh /backuper/backuper.sh

# Finally, add a cron task to execute the backup
RUN crontab -l | { cat; echo "0 0 * * * MYSQL_ROOT_PASSWORD=\$MYSQL_ROOT_PASSWORD MYSQL_DATABASE=\$MYSQL_DATABASE /backuper/backuper.sh >> /backuper/backups.log 2>&1"; } | crontab -
