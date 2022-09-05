import ImageKit from "imagekit";
import { PrismaClient } from "@prisma/client";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

const prisma = new PrismaClient();

class UploadController {
  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  getUploadPage(req, res) {
    if (!req.isAuthenticated()) {
      res.redirect("/");
    }
    res.locals.title = "Upload new photo - Photo Gallery";
    res.locals.isAuthenticated = !!req.isAuthenticated();
    res.locals.user = req.user ? req.user : undefined;
    return res.render("pages/upload", {});
  }

  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async upload(req, res) {
    if (!req.isAuthenticated()) {
      res.status(401).send({
        message: "You can't upload images without having an account",
      });
    } else if (!req.file) {
      res.status(400).send({
        message: "A photo is required",
      });
    } else {
      const filename = req.user.email + Date.now() + req.file.originalname;
      const uploadResult = await imagekit.upload({
        file: req.file.buffer,
        fileName: filename,
        folder: `/users/${req.user.id}/`,
        isPrivateFile: false,
        useUniqueFileName: true,
      });
      await prisma.user.update({
        where: {
          id: req.user.id,
        },
        data: {
          images: {
            create: {
              url: uploadResult.url,
              title: req.body.title,
            },
          },
        },
      });
      res.redirect("/");
    }
  }
}

export const uploadController = new UploadController();
