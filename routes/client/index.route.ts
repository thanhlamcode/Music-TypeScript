import { Express } from "express";
import { topicRoutes } from "./topic.route";
import { songRoutes } from "./songs.route";

const clientRoutes = (app: Express): void => {
  app.use("/topics", topicRoutes);
  app.use("/songs", songRoutes);
};

export default clientRoutes;
