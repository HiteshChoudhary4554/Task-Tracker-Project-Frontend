import React from "react";
import Column from "../../../common/components/Column.jsx";
import TaskCard from "../components/TaskCard.jsx";
import { useSelector, useDispatch } from "react-redux";
import Task from "../services/task.service.js";
import { useNavigate } from "react-router-dom";
import { allTasksNull } from "../taskSlice.js";

function CohortTask() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
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

  const cohortTasks = useSelector((state) => state.task.cohort);

  return (
    <div className="flex-1 h-full">
      <Column className="px-60" heading={"College Task"}>
        {cohortTasks &&
          cohortTasks.map((task) => (
            <div key={task._id}>
              <TaskCard
                date={new Date(task.dueDate).toLocaleDateString("en-GB")}
                dueDate={task.dueDate}
                title={task.title}
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

export default CohortTask;
