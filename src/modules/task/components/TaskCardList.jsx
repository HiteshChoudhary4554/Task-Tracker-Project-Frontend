function TaskCardList({ date = "", title, onClick }) {
  const taskDate = new Date(date);
  const today = new Date();

  taskDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const isExpired = taskDate >= today;

  // bg-[#292a2e]
  // bg-[${expire}]
  // isExpired ? "#d0f325" : "#e54a4a";
  return (
    <div
      onClick={onClick}
      className={`w-full rounded-2xl  shadow border-gray-300 ${isExpired ? "bg-[#d0f325]" : "bg-[#e54a4a]"} px-6 py-4`}
    >
      <h2 className="text-[16px] font-semibold text-black">{title}</h2>
    </div>
  );
}

export default TaskCardList;
