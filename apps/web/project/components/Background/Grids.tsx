export function GridPatternLinearGradient() {
  return (
    <div
      className="absolute inset-0 w-full h-full grid"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }}
    ></div>
  );
}
