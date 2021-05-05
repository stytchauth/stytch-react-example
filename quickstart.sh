#!/bin/bash
echo "Setting up Stytch example app frontend"
cd client
npm install
npm run build

echo "Setting up Stytch example app backend"
cd ../server/node
npm install
npm start