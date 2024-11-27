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
      className="dark:bg-primary_dark bg-primary_light p-6 shadow-lg rounded-lg  transition-transform "
    >
      {children}
    </div>
  );
};

export default Card;
