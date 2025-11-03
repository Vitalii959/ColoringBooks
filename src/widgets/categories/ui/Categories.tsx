import {Container} from "../../../shared/ui/container";
import {Button} from "../../../shared/ui/button";
import {Card} from "../../../shared/ui/category-card";

import "./categories.css";

import picture_1 from "../../../shared/assets/img-card1.png";
import picture_2 from "../../../shared/assets/img-card2.png";
import picture_3 from "../../../shared/assets/img-card3.png";

const cards = [
  {title: "Relive stress", img: picture_1, id: 123},
  {title: "Enjoy the designs", img: picture_2, id: 1233},
  {title: "Find inspiration", img: picture_3, id: 1233}
];

export const Categories = () => {
  return (
    <Container>
      <div className='categories-container'>
        <div className='categories-button'>
          <Button
            value='Browse Coloring Books'
            bg='var(--brown)'
            textColor='var(--cream)'
          />
        </div>
        <div className='categories-card_container'>
          {cards.map((card) => (
            <Card title={card.title} img={card.img} />
          ))}
        </div>
      </div>
    </Container>
  );
};
