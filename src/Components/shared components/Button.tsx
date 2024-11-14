export const Button = ({
  children,
  additionalClass,
}: {
  children: React.ReactNode;
  additionalClass?: string;
}) => {
  return (
    <button
      className={`-bg--blue-color -text--white-color py-2 px-4 rounded-full ${additionalClass}`}
    >
      {children}
    </button>
  );
};
