import DefaultLayout from "../layouts/default";

<DefaultLayout>
  <main className="home">
    <h1>Your Gallery</h1>
    {images && images.length > 0 ? (
      <div class="gallery">
        <a
          class="gallery__item gallery__item--add"
          id="plus-btn"
          href="/upload"
        >
          +
        </a>

        {images.map((i) => (
          <a class="gallery__item" key={i.id} href={i.url} target="__blank">
            <img src={i.url} alt={"image with id " + i.id} />
            <p>{i.title}</p>
          </a>
        ))}
      </div>
    ) : (
      <div class="no-images">
        <img src="/img/no-images.svg" alt="No images" />
        <a href="/upload" class="action-button">
          Upload a photo to view them here
        </a>
      </div>
    )}
  </main>
</DefaultLayout>;
