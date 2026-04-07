import React, { useEffect, useState } from "react";
import Column from "../../../common/components/Column.jsx";
import TaskCardList from "./TaskCardList.jsx";
import Task from "../services/task.service.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToday } from "../taskSlice.js";

function TodayTask() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [todayTasks, setTodayTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTasks() {
      const tasks = await Task.todayTask();
      if (tasks.length > 0) {
        setTodayTasks(tasks);
        dispatch(addToday(tasks));
      }
      setLoading(false);
    }
    fetchTasks();
  }, [dispatch]);
  return (
    <div className="h-full flex-1">
      <Column heading={"Today Task"}>
        {loading ? (
          <div className=" flex-1 flex justify-center items-center">
            <h2>..loading</h2>
          </div>
        ) : (
          todayTasks &&
          todayTasks.map((task) => (
            <div key={task._id}>
              <TaskCardList
                date={task.dueDate}
                title={task.title}
                onClick={() => {
                  navigate("/today-task/");
                }}
              />
            </div>
          ))
        )}
      </Column>
    </div>
  );
}

export default TodayTask;
