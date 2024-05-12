user@IPAddress -v

adduser username

usermod -aG sudo username

pwd

rm -r foldername

https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04

pm2 - https://pm2.io/

sudo ./svc.sh install
sudo ./svc.sh status
sudo ./svc.sh start
chown -R www-data:www-data myFolder
https://raddy.dev/blog/how-to-deploy-nextjs-app-on-a-vps-using-github-actions/


run: |
if [-d ${{secrets.DOGDB_PREVIEW_FRONTEND_FOLDER_NAME}}-${{ github.ref_name }}]; then
cd ~ && cd /var/www/${{secrets.DOGDB_PREVIEW_FRONTEND_FOLDER_NAME}} && rm -r ${{secrets.DOGDB_PREVIEW_FRONTEND_FOLDER_NAME}}-${{ github.ref_name }} && git clone -b ${{ github.ref_name }} https://github.com/dogdb-org/dogdb-frontend.git ${{ secrets.DOGDB_PREVIEW_FRONTEND_FOLDER_NAME }}-${{ github.ref_name }} && cd ${{ secrets.DOGDB_PREVIEW_FRONTEND_FOLDER_NAME }} && npm install && npm test && npm run build

                      else
                      cd ~ && cd /var/www/${{secrets.DOGDB_PREVIEW_FRONTEND_FOLDER_NAME}} && git clone -b ${{ github.ref_name }} https://github.com/dogdb-org/dogdb-frontend.git ${{ secrets.DOGDB_PREVIEW_FRONTEND_FOLDER_NAME }}-${{ github.ref_name }} && cd ${{ secrets.DOGDB_PREVIEW_FRONTEND_FOLDER_NAME }} && npm install && npm test && npm run build
