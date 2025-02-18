import { Express } from "express";
import { topicRoutes } from "./topic.route";
import { songRoutes } from "./songs.route";
import { authRoutes } from "./auth.route";
import { homeRoutes } from "./home.route";

const clientRoutes = (app: Express): void => {
  app.use("/topics", topicRoutes);
  app.use("/songs", songRoutes);
  app.use("/auth", authRoutes);
  app.use("/", homeRoutes);
};

export default clientRoutes;
