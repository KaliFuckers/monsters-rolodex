import "./card-list.styles.css";
import { Card } from "../card/card.component";

export const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((lis) => {
      return <Card key={lis.id} monster={lis} />;
    })}
  </div>
);
