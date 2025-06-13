import type { FormEvent } from "react";
import { useUrlContext } from "../../auth/context/UrlContext";
import { useForm } from "../../hooks/useForm";

export const FormURL = () => {
  const { addUrl } = useUrlContext();

  const { url, alias, onInputChange } = useForm({ url: "", alias: "" });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addUrl({ longURL: url, alias });
  };
  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form__top">
        <div className="form__logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
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
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="form__link-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            />
          </svg>
        </div>
        <input
          type="text"
          id="url"
          placeholder="Paste your long URL here..."
          value={url}
          onChange={onInputChange}
          name="url"
        />
        <input
          type="text"
          placeholder="Add a title (optional)"
          value={alias}
          onChange={onInputChange}
          name="alias"
        />
      </div>

      <input className="form__submit" type="submit" value="Shorten URL" />
    </form>
  );
};
