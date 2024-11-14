import { Request, Response } from "express";
import User from "../models/user.model";

// [GET] /auth/login
export const login = async (req: Request, res: Response) => {
  try {
    res.render("client/pages/auth/login", {
      pageTitle: "Login",
    });
  } catch (error) {
    res.send("404");
  }
};

// [GET] /auth/register
export const register = async (req: Request, res: Response) => {
  try {
    res.render("client/pages/auth/register", {
      pageTitle: "Register",
    });
  } catch (error) {
    res.send("404");
  }
};

// [POST] /auth/login
export const postLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const emailExiting = await User.findOne({ email: email });
    console.log(emailExiting);

    if (!emailExiting) {
      req["flash"]("error", "Email không tồn tại"); // Thiết lập thông báo lỗi
      return res.redirect("back"); // Chuyển hướng về trang trước đó
    }

    res.send("ok");
  } catch (error) {
    res.send("404");
  }
};
