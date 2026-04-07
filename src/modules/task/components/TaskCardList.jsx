import React, { useEffect, useState } from "react";

function TaskCardList({ date = "", title, onClick }) {
  const [expire, setExpire] = useState(null);
  useEffect(() => {
    function fetchDate(date) {
      const taskDate = new Date(date);
      const today = new Date();

      taskDate.setHours(0, 0, 0, 0);
      today.setHours(0, 0, 0, 0);

      const isExpired = taskDate >= today;
      const expiren = isExpired ? "#d0f325" : "#e54a4a";
      setExpire(expiren);
    }
    fetchDate(date);
  }, [date]);
  // bg-[#292a2e]
  // bg-[${expire}]
  return (
    <div
      onClick={onClick}
      className={`w-full rounded-2xl  shadow border-gray-300 bg-[#d0f325] px-6 py-4`}
    >
      <h2 className="text-[16px] font-semibold text-black">{title}</h2>
    </div>
  );
}

export default TaskCardList;
