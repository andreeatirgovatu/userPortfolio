import _ from 'lodash';

var config = {
    dev: 'development',
    test: 'testing',
    prod: 'production',
    port: process.env.PORT || 4000,
    localhost: 'http://localhost:' + (process.env.PORT || 4000),
    appHost: 'http://localhost:5000',
    secrets: {
        jwtSecret: process.env.JWT_SECRET || 'test',
        apiPass: 'glcfvjoyoxigtgfj'
    },
    expireTime: 24 * 60 * 10
};
config.env = process.env.NODE_ENV || config.dev;

let envConfig;
// require could error out if
// the file don't exist so lets try this statement
// and fallback to an empty object if it does error out
try {
    envConfig = require('./' + config.env);
    envConfig = envConfig || {};
} catch (e) {
    envConfig = {};
}

// merge the two config files together
// the envConfig file will overwrite properties
// on the config object
const newConf = _.merge(config, envConfig);

export default newConf;
