import AuthLayout from "../../layouts/auth";

<AuthLayout>
  <main className="login-container">
    <section className="login-container__bg">
      <img
        className="login-container__bg-image"
        src="/img/login-bg.svg"
        alt="Login-background"
      />
    </section>
    <section className="login-container__info">
      <form
        className="login-container__info-form"
        method="post"
        action="/auth/login"
      >
        <h1 className="login-container__info-heading">
          Got some work to do? <br />
          <span>Log in</span>
        </h1>
        <div
          className={`form-item  ${
            errors && errors.email && errors.email.length > 0 ? "error" : ""
          }`}
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="      "
            value={
              errors && errors.email && errors.email.length == 0 ? email : ""
            }
            autocomplete="chrome-off"
          />
          <label htmlFor="email" className="form-item__label">
            Email Address
          </label>
          {errors && errors.email && errors.email.length > 0 ? (
            <ul>
              {errors.email.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          ) : (
            <></>
          )}
        </div>
        <div
          className={`form-item  ${
            errors && errors.password && errors.password.length > 0
              ? "error"
              : ""
          }`}
        >
          <input
            type="password"
            name="password"
            id="password"
            placeholder="     "
            autocomplete="chrome-off"
          />
          <label htmlFor="password" className="form-item__label">
            Password
          </label>
          {errors && errors.password && errors.password.length > 0 ? (
            <ul>
              {errors.password.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          ) : (
            <></>
          )}
        </div>
        {/*<div className="login-container__info-additional">*/}
        {/*  <div className="form-item--check">*/}
        {/*    <input type="checkbox" name="remember-me" id="remember-me" />*/}
        {/*    <label htmlFor="remember-me" className="form-item__label--check">*/}
        {/*      Remember me*/}
        {/*    </label>*/}
        {/*  </div>*/}
        {/*  <a href="#">Forgot password?</a>*/}
        {/*</div>*/}
        <button className="action-btn">Sign in</button>
        <p>
          Don't have an account? <a href="/auth/register">Register</a>
        </p>
      </form>
    </section>
  </main>
</AuthLayout>;
