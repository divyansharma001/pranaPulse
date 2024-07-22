export const Button = ({children}) => {
  return (
    <button className="border py-2 px-6  text-lg bg-[#0884AB] text-white rounded hover:scale-110 duration-500 ">
      {children}
    </button>
  );
};
