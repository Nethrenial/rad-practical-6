class HomeController {
  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async getHomePage(req, res) {
    if (req.isAuthenticated()) {
      res.locals.title = "Home - Nethrenial Co.";
      res.locals.isAuthenticated = !!req.isAuthenticated();
      return res.render("pages/index", {
        email: req.user.email,
      });
    }

    res.redirect("/auth/login");
  }
}

export const homeController = new HomeController();
