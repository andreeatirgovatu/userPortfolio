import { Router } from "express";
import CheckAuth from "./auth";
import AuthCtrl from "./controller";

const auth = new CheckAuth();
const controller = new AuthCtrl();
const authRouter = Router();

authRouter.post("/login", auth.verifyUser(), controller.login);
authRouter.post(
  "/forgot_password",
  auth.checkUserByEmail(),
  controller.forgotPassword
);
authRouter.post("/reset/:token", auth.checkUserByToken(), controller.reset);
authRouter.post("/register", controller.register);

export default authRouter;
