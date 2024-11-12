import { Request, Response } from "express";

// [GET] /
export const home = async (req: Request, res: Response) => {
  try {
    res.render("client/pages/home/index", {
      pageTitle: "Trang chủ",
    });
  } catch (error) {
    res.send("404");
  }
};
