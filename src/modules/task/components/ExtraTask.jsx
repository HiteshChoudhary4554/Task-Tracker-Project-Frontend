import React, { useEffect, useState } from "react";
import Column from "../../../common/components/Column.jsx";
import TaskCardList from "./TaskCardList.jsx";
import Task from "../services/task.service.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addExtra } from "../taskSlice.js";

function ExtraTask() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [extraTasks, setExtraTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTasks() {
      const tasks = await Task.extraTask();
      if (tasks.length > 0) {
        setExtraTasks(tasks);
        dispatch(addExtra(tasks));
      }
      setLoading(false);
    }
    fetchTasks();
  }, [dispatch]);

  return (
    <div className="h-full flex-1">
      <Column heading={"Extra Task"}>
        {loading ? (
          <div className=" flex-1 flex justify-center items-center">
            <h2>..loading</h2>
          </div>
        ) : (
          extraTasks &&
          extraTasks.map((task) => (
            <div key={task._id}>
              <TaskCardList
                date={task.dueDate}
                title={task.title}
                onClick={() => {
                  navigate("/extra-task/");
                }}
              />
            </div>
          ))
        )}
      </Column>
    </div>
  );
}

export default ExtraTask;
