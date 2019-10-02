# exit when any command fails
set -e

cd /root/dystonse-website
git pull
npm run build
rm -R /var/www/dystonse/*
cp -R dist/* /var/www/dystonse/