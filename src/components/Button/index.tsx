interface ButtonType {
  title: string;
  justify?: string;
  backgroundColor?: string;
  backgroundColorHover?: string;
}
const Button = ({ title, justify, backgroundColor, backgroundColorHover }: ButtonType) => {
  return (
    <div className={`w-full flex ${justify}`}>
      <button
        className={`w-[30%] p-2 bg-[${backgroundColor ? backgroundColor : '#bc9c57'}] text-white rounded-[1.5rem]
        hover:bg-[${backgroundColorHover ? backgroundColorHover : '#977733'}] mt-[1rem]  `}
      >
        {title.toUpperCase()}
      </button>
    </div>
  );
};
export default Button;
