require('dotenv').config()

module.exports = {
  routes: './src/routes.ts',
  connector: '@edgio/starter',
  backends: {
    origin: {
      domainOrIp: process.env.DOMAIN_OR_IP || 'www.petsmart.com',
      hostHeader: process.env.HOST_HEADER || 'www.petsmart.com',
      disableCheckCert: true,
    },
  },
}
