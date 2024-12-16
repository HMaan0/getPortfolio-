const StarsBackground = () => {
  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    size: Math.random() * 1 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 5 + 3,
    delay: Math.random() * 5,
  }));

  return (
    <div className="-z-30 absolute inset-0 overflow-hidden">
      <div className="w-full h-full relative">
        {stars.map((star) => (
          <div
            key={star.id}
            className={`absolute rounded-full bg-white opacity-80`}
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.y}%`,
              left: `${star.x}%`,
              animation: `blink ${star.duration}s infinite ${star.delay}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default StarsBackground;
