function Button({ color, text, id, ...props }) {
  const colorClasses = {
    yellow: "bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600",
    green: "bg-green-500 hover:bg-green-600 active:bg-green-700",
    blue: "bg-blue-500 hover:bg-blue-600 active:bg-blue-700",
    red: "bg-red-500 hover:bg-red-600 active:bg-red-700",
  };

  return (
    <button
      id={id}
      type="submit"
      className={`${colorClasses[color]} text-white font-medium py-1.5 px-4 rounded`}
      {...props}
    >
      {text}
    </button>
  );
}

export default Button;
