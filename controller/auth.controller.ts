import { Request, Response } from "express";

// [GET] /songs/
export const login = async (req: Request, res: Response) => {
  try {
    res.render("client/pages/auth/login", {
      pageTitle: "Login",
    });
  } catch (error) {
    res.send("404");
  }
};

// [GET] /songs/detail/slugSong
export const register = async (req: Request, res: Response) => {
  try {
    res.render("client/pages/auth/register", {
      pageTitle: "Register",
    });
  } catch (error) {
    res.send("404");
  }
};
