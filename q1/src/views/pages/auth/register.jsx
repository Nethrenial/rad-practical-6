import AuthLayout from "../../layouts/auth";

<AuthLayout>
  <main className="login-container">
    <section className="login-container__bg">
      <img
        className="login-container__bg-image"
        src="/img/register-bg.svg"
        alt="Signup-background"
      />
    </section>
    <section className="login-container__info">
      <form
        className="login-container__info-form"
        method="post"
        action="/auth/register"
      >
        <h1 className="login-container__info-heading">
          new around here? <br />
          <span>Create an account</span>
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
            required
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
            required
            autocomplete="chrome-off"
            min="6"
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
        <div
          className={`form-item  ${
            errors &&
            errors.confirmPassword &&
            errors.confirmPassword.length > 0
              ? "error"
              : ""
          }`}
        >
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="     "
            required
            autocomplete="chrome-off"
            min="6"
          />
          <label htmlFor="confirmPassword" className="form-item__label">
            Confirm Password
          </label>
          {errors &&
          errors.confirmPassword &&
          errors.confirmPassword.length > 0 ? (
            <ul>
              {errors.confirmPassword.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          ) : (
            <></>
          )}
        </div>
        <button className="action-btn">Sign Up</button>
        <p>
          Already registered? <a href="/auth/login">Login</a>
        </p>
      </form>
    </section>
  </main>
</AuthLayout>;
