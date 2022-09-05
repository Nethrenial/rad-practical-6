import { Strategy as LocalStrategy } from "passport-local";
import { User } from "../models/index.js";
import bcrypt from "bcrypt";

export const localStrategy = new LocalStrategy(
  { usernameField: "email", passwordField: "password" },
  async (email, password, done) => {
    const user = await User.findOne({
      email: email,
    });

    if (!user) {
      return done(null, false);
    }
    const passwordsMatch = await bcrypt.compare(password, user.hashedPassword);
    if (!passwordsMatch) {
      return done(null, false);
    }

    done(null, user);
  }
);

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export function restrictToAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/auth/login");
}
