<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="/img/favicon.png" type="image/png" />{" "}
    <link rel="stylesheet" href="/styles/main.css" />
    <title>{title}</title>
  </head>
  <body>
    <header class="default-header">
      <a class="brand" href="/">
        <img src="/img/favicon.png" alt="Brand logo" />
        <p>Photo Gallery</p>
      </a>
      <div class="auth-buttons">
        {!isAuthenticated ? (
          <>
            <a href="/auth/login" class="auth-btn">
              Login
            </a>
            <a href="/auth/register" class="auth-btn">
              Signup
            </a>
          </>
        ) : (
          <>
            <p className="user-email">{user.email}</p>
            <form action="/auth/logout" method="post">
              <button class="auth-btn">Logout</button>
            </form>
          </>
        )}
      </div>
    </header>
    {children}
    <script src="/js/main.js" type="module"></script>
  </body>
</html>;
