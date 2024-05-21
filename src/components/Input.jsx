const Input = ({ label, isTextarea, ...props }) => {
  return (
    <>
      <label className="mt-4">{label}</label>
      {isTextarea ? (
        <textarea className="bg-zinc-300 h-20 p-1" {...props}></textarea>
      ) : (
        <input className="bg-zinc-300" {...props}></input>
      )}
    </>
  );
};

export default Input;
