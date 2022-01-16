type Props = {
  onClick: () => void;
  disabled: boolean;
  children: string;
  color: "blue" | "pink" | "gray";
};
const Button = ({ onClick, disabled, children, color }: Props) => {
  let className;
  if (color === "pink") {
    className = "text-white w-[160px] h-[44px] rounded-3xl bg-[#FF10A9]";
  } else if (color === "blue") {
    className = "text-white w-[160px] h-[44px] rounded-3xl bg-[#85BBFD]";
  } else {
    className = "text-white w-[160px] h-[44px] rounded-3xl bg-gray-500";
  }
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  );
};

export default Button;
