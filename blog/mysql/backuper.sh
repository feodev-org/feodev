#!/bin/sh

# Setup cron to do the backup, zip it, then upload it to the object storage described in the rclone conf
FILE_TIMESTAMP=`date +"%Y%m%d%H%M%S"`
FILE_NAME="/backuper/backup-$FILE_TIMESTAMP.sql.gz"
echo "Beginning backup at $FILE_TIMESTAMP"
mysqldump -u root -p$MYSQL_ROOT_PASSWORD $MYSQL_DATABASE | gzip -9 > $FILE_NAME && rclone copy $FILE_NAME BackupStorage:/feodev-blog-backup && rm $FILE_NAME
echo "Backup done, sent to the cloud and removed! -- $FILE_NAME"
