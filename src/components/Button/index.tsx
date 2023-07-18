interface ButtonType {
  title: string;
  justify?: string;
}
const Button = ({ title, justify }: ButtonType) => {
  return (
    <div className={`w-full flex ${justify}`}>
      <button className={`w-[30%] p-2 bg-[#bc9c57] text-white rounded-[1.5rem] hover:bg-[#977733] mt-[1rem] `}>
        {title.toUpperCase()}
      </button>
    </div>
  );
};
export default Button;
