interface Input {
  id: string;
  type: string;
  children: React.ReactNode;
}

export const Input = ({ id, type, children }: Input) => {
  return (
    <>
      <label
        htmlFor={id}
        className="block mb-1 text-sm font-medium text-gray-900"
      >
        {children}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        className="bg-gray-50  border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  outline-none focus:-border--blue-color border-2 mb-4"
      />
    </>
  );
};
