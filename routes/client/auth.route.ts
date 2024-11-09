import { Router } from "express";
import * as controller from "../../controller/auth.controller";
const router: Router = Router();

router.get("/login", controller.login);
router.get("/register", controller.register);

export const authRoutes: Router = router;
