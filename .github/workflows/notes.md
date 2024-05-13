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

cd ${{secrets.DOGDB_PREVIEW_FRONTEND_FOLDER_NAME}} && git pull origin ${{ steps.branch-names.outputs.current_branch }}" && npm install && npm test && npm run build

cd ~ && cd /var/www/${{secrets.DOGDB_PREVIEW_FRONTEND_FOLDER_NAME}} && git clone -b ${{ github.ref_name }} https://github.com/dogdb-org/dogdb-frontend.git ${{ secrets.DOGDB_PREVIEW_FRONTEND_FOLDER_NAME }}-${{ github.ref_name }} && cd ${{ secrets.DOGDB_PREVIEW_FRONTEND_FOLDER_NAME }} && npm install && npm test && npm run build

https://www.pluralsight.com/resources/blog/cloud/conditions-in-bash-scripting-if-statements

Wb3rvTirMomt2wdf8Dun

<!-- sed -i.bak -e 's@Site_Preview.*@Site_Preview test @' -e 's@Site_Url.*@Site_Url test @' .github/pull_request_template.md -->

<!-- sed -i.bak -e 's@Site_Preview.*@Site_Preview [![Build NextApp Preview and Deploy](https://github.com/dogdb-org/dogdb-frontend/actions/workflows/preview.yaml/badge.svg?branch=${{github.ref_name}}&event=push)](https://github.com/dogdb-org/dogdb-frontend/actions/workflows/preview.yaml) @' -e 's@Site_Url.*@Site_Url [DogDB - ${{github.ref_name}} link](https://preview.dogdb.org/${{secrets.DOGDB_PREVIEW_FRONTEND_FOLDER_NAME}}/${{secrets.DOGDB_PREVIEW_FRONTEND_FOLDER_NAME}}-${{ github.ref_name }}/out) @' .github/pull_request_template.md -->

<!-- && git merge -X theirs && sed -i.bak -e 's@Site_Preview.*@Site_Preview [![Build NextApp Preview and Deploy](https://github.com/dogdb-org/dogdb-frontend/actions/workflows/preview.yaml/badge.svg?branch=${{github.ref_name}}\&event=push)](https://github.com/dogdb-org/dogdb-frontend/actions/workflows/preview.yaml) @' -e 's@Site_Url.*@Site_Url [DogDB - ${{github.ref_name}} link](https://preview.dogdb.org/${{secrets.DOGDB_PREVIEW_FRONTEND_FOLDER_NAME}}/${{secrets.DOGDB_PREVIEW_FRONTEND_FOLDER_NAME}}-${{ github.ref_name }}/out) @' .github/pull_request_template.md && git add . && git commit --amend --no-edit && git push  -->
