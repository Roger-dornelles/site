interface TextAreaType {
  message?: string;
  placeholder: string;
  value: string;
  onChange: any;
}

const TextArea = ({ placeholder, value, onChange }: TextAreaType) => {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full p-5 bg-transparent h-[150px] resize-none border-b-[1px] outline-0`}
    />
  );
};

export default TextArea;
