import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class HomeController {
  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async getHomePage(req, res) {
    res.locals.title = "Home - Photo Gallery";
    res.locals.user = req.user ? req.user : undefined;
    res.locals.isAuthenticated = !!req.isAuthenticated();

    const images = req.isAuthenticated()
      ? await prisma.image.findMany({
          where: {
            userId: req.user.id,
          },
        })
      : undefined;

    return res.render(
      "pages/index",
      {
        isAuthenticated: !!req.isAuthenticated(),
        images,
      },
      (err, data) => {
        if (!err) {
          res.send(data);
        }
      }
    );
  }
}

export const homeController = new HomeController();
