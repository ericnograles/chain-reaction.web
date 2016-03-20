# Assumptions: NVM installed
# Add a reference to nvm
export NVM_DIR=~/.nvm
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# Baseline to Node LTS
nvm install 4.3.1

# Global prerequisites
npm install -g npm3

# Globals for npm3
npm3 install -g webpack webpack-dev-server

# Local NPM install
npm3 install

# Webpack
webpack --config webpack.config.js
webpack --config webpack.tests.config.js

# Start the dev server and unit test server
trap 'kill %1' SIGINT
webpack-dev-server --config webpack.config.js --content-base dist/ --inline & webpack-dev-server --config webpack.tests.config.js  --content-base unit-tests/ --inline