module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ff0db9a3f81df11ba0e955ef57ffd1ac'),
  },
});
