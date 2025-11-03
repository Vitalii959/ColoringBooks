import "./card.css";

type Props = {
  title: string;
  img: string;
};
export const Card = ({title, img}: Props) => {
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={img} alt='' />
      </div>
      <div className='card-title'>{title}</div>
    </div>
  );
};
