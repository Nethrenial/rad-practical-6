import DefaultLayout from "../layouts/default";

<DefaultLayout>
  <main className="upload">
    <h1>Upload a new photo</h1>
    <div class="upload__container">
      <div class="upload__container-preview preview-top">
        <img src="/img/focus.webp" alt="Image placeholder" />
      </div>
      <div class="upload__container-info">
        <form
          action=""
          class="upload__form"
          method="post"
          encType="multipart/form-data"
        >
          <div className="form-item">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="      "
              autocomplete="chrome-off"
              required
            />
            <label htmlFor="email" className="form-item__label">
              Title
            </label>
            {/* {errors && errors.email && errors.email.length > 0 ? (
          <ul>
            {errors.email.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        ) : (
          <></>
        )} */}
          </div>
          <div className="form-item">
            <input
              type="file"
              name="photo"
              id="photo"
              placeholder="      "
              autocomplete="chrome-off"
              required
              accept="image/*"
            />
            <label htmlFor="photo" className="form-item__label">
              Photo
            </label>
            {/* {errors && errors.email && errors.email.length > 0 ? (
          <ul>
            {errors.email.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        ) : (
          <></>
        )} */}
          </div>
          <div class="upload__container-preview preview-bottom">
            <img src="/img/focus.png" alt="" />
          </div>
          <button className="action-btn">Upload</button>
        </form>
      </div>
    </div>
  </main>
</DefaultLayout>;
