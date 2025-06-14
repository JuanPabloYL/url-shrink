import { LinkCard } from "./LinkCard";

interface ManagaLinksProps {
  id?: string;
  alias?: string;
  shortURL: string;
  longURL: string;
}

export const ManageLinks = ({ urls }: { urls: ManagaLinksProps[] }) => {
  if (!urls.length) {
    return (
      <div className="no-links container">
        <div>
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
              d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
            />
          </svg>
        </div>

        <p className="no-links__header">No Links Yet</p>
        <p className="no-links__text">
          Start by creating your first shortened URL above and manage all your
          links in one place.
        </p>
      </div>
    );
  }

  return (
    <div className="container links">
      {urls.map((url) => (
        <LinkCard key={url.id} url={url} />
      ))}
    </div>
  );
};
