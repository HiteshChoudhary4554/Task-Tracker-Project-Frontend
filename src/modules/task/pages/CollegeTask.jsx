import React from "react";
import Column from "../../../common/components/Column.jsx";
import TaskCard from "../components/TaskCard.jsx";
import { useSelector, useDispatch } from "react-redux";
import Task from "../services/task.service.js";
import { useNavigate } from "react-router-dom";
import { allTasksNull } from "../taskSlice.js";

function CollegeTask() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const collegeTasks = useSelector((state) => state.task.college);
  
  async function doneTask(taskId) {
    await Task.doneTask(taskId);
    navigate("/", { replace: true });
    dispatch(allTasksNull());
  }

  async function doneOngoingTask(taskId) {
    await Task.doneOngoingTask(taskId);
    navigate("/", { replace: true });
    dispatch(allTasksNull());
  }

  async function deleteTask(taskId) {
    await Task.deleteTask(taskId);
    dispatch(allTasksNull());
    navigate("/", { replace: true });
  }
  return (
    <div className="flex-1 h-full">
      <Column className="px-60" heading={"College Task"}>
        {collegeTasks &&
          collegeTasks.map((task) => (
            <div key={task._id}>
              <TaskCard
                date={new Date(task.dueDate).toLocaleDateString("en-GB")}
                title={task.title}
                dueDate={task.dueDate}
                description={task.description}
                onEdit={() => console.log("Edit clicked")}
                onDone={() => doneTask(task._id)}
                onGo={() => doneOngoingTask(task._id)}
                onDelete={() => deleteTask(task._id)}
              />
            </div>
          ))}
      </Column>
    </div>
  );
}

export default CollegeTask;
