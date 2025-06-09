export const FormURL = () => {
  return (
    <form className="form container">
      <div className="form__top">
        <div className="form__logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
            />
          </svg>
        </div>
        <h2 className="form__title">Shorten your URL</h2>
        <p className="form__text">
          Transform long URL'S into short, shareable links.
        </p>
      </div>

      <div className="form__bottom">
        <div className="form__input-container">
          <svg
            className="form__link-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            />
          </svg>
        </div>
        <input type="text" id="url" placeholder="Paste your long URL here..." />
        <input type="text" placeholder="Add a title (optional)" />
      </div>

      <input className="form__submit" type="submit" value="Shorten URL" />
    </form>
  );
};
