const Card = ({
  children,
  key,
}: {
  children: React.ReactNode;
  key?: number;
}) => {
  return (
    <div
      key={key}
      className="bg-primary_light dark:bg-primary_dark p-6 shadow-lg rounded-lg  transition-transform "
    >
      {children}
    </div>
  );
};

export default Card;
