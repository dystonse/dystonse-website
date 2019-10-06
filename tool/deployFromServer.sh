# exit when any command fails
set -e

cd /root/dystonse-website
git pull
npm install
npm run build
rm -R /var/www/dystonse/*
cp -R dist/* /var/www/dystonse/

cd /root/dystonse-search-node
git pull
forever restart test.js