module.exports = env => require(`./config/${env}.js`)({ env, projectRoot: __dirname }); // eslint-disable-line
