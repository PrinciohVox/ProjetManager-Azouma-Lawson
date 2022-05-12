#!/bin/bash

ng build --prod

cd dist

rm webAdmin.zip

zip -r webAdmin.zip webAdmin

scp webAdmin.zip root@157.230.82.246:/opt/ben2paris/webAdminBen2Paris/dist

cd ..

echo "-------------------------------------------------------"

echo "Build Sent with success"

echo "-------------------------------------------------------"
