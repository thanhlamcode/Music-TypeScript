import { Router } from "express";
import * as controller from "../../controller/song.controller";
const router: Router = Router();

router.get("/:slugTopic", controller.index);

export const songRoutes: Router = router;
