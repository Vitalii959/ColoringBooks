import "./button.css";

type Props = {
  value: string;
  bg: string;
  textColor: string;
};
export const Button = ({value, bg, textColor}: Props) => {
  return (
    <button
      className='button'
      style={{
        backgroundColor: bg,
        color: textColor,
        border: `1px solid ${textColor}`
      }}
    >
      {value}
    </button>
  );
};
