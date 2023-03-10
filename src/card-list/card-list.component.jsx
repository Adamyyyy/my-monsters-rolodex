import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = ({ cats }) => (
  <div className="card-list">
    {cats.map((cat) => {
      return <Card cat={cat} key={cat.id} />;
    })}
  </div>
);

export default CardList;
