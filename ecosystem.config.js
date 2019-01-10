module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'web-0',
      script    : 'server.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },

    // Second application
    {
      name      : 'WEB',
      script    : 'web.js'
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'root',
      host : '129.28.124.222',
      ref  : 'origin/master',
      repo : 'git@github.com:Lzumikonata/cnd.git',
      path : '/root/Documents/dev/cnd',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
  }
};
