import type { Dispatch, SetStateAction } from "react";
import { useUrlContext } from "../../auth/context/UrlContext";

export const PopupAlert = ({
  id,
  setShowAlert,
}: {
  id: string | undefined;
  setShowAlert: Dispatch<SetStateAction<boolean>>;
}) => {
  const { deleteURL } = useUrlContext();
  const onDelete = () => {
    if (!id) return;
    deleteURL(id);
  };

  return (
    <div className="popupalert">
      <div className="popupalert__container">
        <button
          className="popupalert__close-btn"
          onClick={() => setShowAlert(false)}
        >
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
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 popupalert__icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          />
        </svg>
        <h3 className="popupalert__title">
          Are you sure you want to delete this link?
        </h3>

        <p className="popupalert__text">
          If you continue, changes you made will be saved.
        </p>

        <div className="popupalert__buttons">
          <button className="popupalert__buttons-delete" onClick={onDelete}>
            Delete Link
          </button>
          <button
            className="popupalert__buttons-save"
            onClick={() => setShowAlert(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
