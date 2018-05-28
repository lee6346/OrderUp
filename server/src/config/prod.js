const auth = {
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  },
  jwtSecret: process.env.JWT_SECRET,
};

const apiKeys = {
  google: process.env.GOOGLE_API_KEY,
  stripe: {
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.STRIPE_SECRET_KEY,
  },
};

const db = {
  mongo: {
    uri: process.env.MONGO_URI,
  },
};

const aws = {
  s3: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    bucket: process.env.S3_CATER_BUCKET,
  },
};

module.exports = {
  auth,
  apiKeys,
  db,
  aws,
};
