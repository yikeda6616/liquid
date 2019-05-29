require('dotenv').config();

export const config = {
  google: {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  },
};
