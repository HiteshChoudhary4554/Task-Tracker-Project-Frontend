import React, { useEffect, useState } from "react";
import Column from "../../../common/components/Column.jsx";
import TaskCardList from "./TaskCardList.jsx";
import Task from "../services/task.service.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addOnGoing } from "../taskSlice.js";

function OngoingTask() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [onGoingTasks, setonGoingTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTasks() {
      const tasks = await Task.onGoingTask();
      if (tasks.length > 0) {
        setonGoingTasks(tasks);
        dispatch(addOnGoing(tasks));
      }
      setLoading(false);
    }
    fetchTasks();
  }, [dispatch]);

  return (
    <div className="h-full flex-1">
      <Column heading={"Ongoing Task"}>
        {loading ? (
          <div className=" flex-1 flex justify-center items-center">
            <h2>..loading</h2>
          </div>
        ) : (
          onGoingTasks &&
          onGoingTasks.map((task) => (
            <div key={task._id}>
              <TaskCardList
                date={task.dueDate}
                title={task.title}
                onClick={() => {
                  navigate("/ongoing-task/");
                }}
              />
            </div>
          ))
        )}
      </Column>
    </div>
  );
}

export default OngoingTask;
