import { Router } from "express";
import * as controller from "../../controller/song.controller";
const router: Router = Router();

router.get("/:slugTopic", controller.index);
router.get("/detail/:slugSong", controller.detail);
router.patch("/:typeLike/:songId", controller.like);

export const songRoutes: Router = router;
