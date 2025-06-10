import { LinkCard } from "./LinkCard";

export const ListLinks = () => {
  return (
    <div className="container">
      <h2>Your Links</h2>
      <ul>
        <LinkCard />
        <LinkCard />
        <LinkCard />
      </ul>
    </div>
  );
};
