interface InputType {
  label: string;
  value: string | number;
  onChange?: any;
  maxLength?: number;
  error?: boolean;
  message?: string;
  placeHolderColor?: string;
}

const Input = ({ label, value, onChange, maxLength, error, message, placeHolderColor }: InputType) => {
  return (
    <label className={`flex flex-col mb-[1rem] relative`}>
      <p className={`${error ? 'absolute right-[72px] top-[10px] text-[12px] text-red-500 flex' : 'hidden'}`}>{message}</p>
      {label}
      <input
        type="text"
        className={`border-0 bg-transparent border-b-[1px] outline-none pl-[1rem] h-[45px] placeholder-[${
          placeHolderColor && placeHolderColor
        }]`}
        placeholder={label}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
      />
    </label>
  );
};
export default Input;
