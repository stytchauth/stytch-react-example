const express = require("express");
const dotenv = require("dotenv");
const stytch = require("stytch");

dotenv.config({ path: '.env.local' });
const client = new stytch.Client({
  project_id: process.env.STYTCH_PROJECT_ID,
  secret: process.env.STYTCH_SECRET
});

const authorizeTokenMiddleware = () => {
  return async (req, res, next) => {
    try {
      const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
      if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      // Validate the access token
      const params = {
        token: token,
        client_id: process.env.STYTCH_CLIENT_ID,
        token_type_hint: 'access_token'
      };
      const options = {};

      const response = await client.idp.introspectTokenNetwork(params, options);
      console.log(response);
      next();
    } catch (error) {
      console.error('Error in middleware:', error);
      res.status(error.response ? error.response.status : 500).json({
        error: error.response ? error.response.data : 'Internal server error'
      });
    }
  };
};

module.exports = authorizeTokenMiddleware;
