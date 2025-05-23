import { RequestHandler, Request } from "express";
import dotenv from "dotenv";
import stytch from "stytch";

dotenv.config({ path: '.env.local' });
const client = new stytch.Client({
  project_id: process.env.STYTCH_PROJECT_ID as string,
  secret: process.env.STYTCH_SECRET as string,
});

declare global {
  namespace Express {
    interface Request {
      identity?: any;
      cookies?: any;
    }
  }
}

const authorizeTokenMiddleware = (): RequestHandler => {
  return async (req: Request, res, next) => {
    try {
      const authToken = req.headers.authorization?.split(" ")[1];
      const jwt = (req as any).cookies?.["stytch_session_jwt"];

      if (!authToken && !jwt) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      if (jwt) {
        try {
          const session = await client.sessions.authenticateJwtLocal({ session_jwt: jwt });
          (req as Request).identity = { user_id: session.user_id };
          return next();
        } catch (err) {
          console.error("JWT authentication failed", err);
          return res.status(401).json({ error: "Unauthorized" });
        }
      }

      const params = {
        token: authToken as string,
        client_id: process.env.STYTCH_CLIENT_ID as string,
        token_type_hint: "access_token",
      };

      const response = await client.idp.introspectTokenNetwork(params);
      (req as Request).identity = { subject: response.subject };
      next();
    } catch (error: any) {
      console.error("Error in middleware:", error);
      res.status(error.response ? error.response.status : 500).json({
        error: error.response ? error.response.data : "Internal server error",
      });
    }
  };
};

export default authorizeTokenMiddleware;
