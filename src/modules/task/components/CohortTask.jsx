import React, { useEffect, useState } from "react";
import Column from "../../../common/components/Column.jsx";
import TaskCardList from "./TaskCardList.jsx";
import { useNavigate } from "react-router-dom";
import Task from "../services/task.service.js";
import { useDispatch } from "react-redux";
import { addCohort } from "../taskSlice.js";

function CohortTask() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cohortTasks, setCohortTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTasks() {
      const tasks = await Task.cohortTask();
      if (tasks.length > 0) {
        setCohortTasks(tasks);
        dispatch(addCohort(tasks));
      }
      setLoading(false);
    }
    fetchTasks();
  }, [dispatch]);
  

  return (
    <div className="h-full flex-1">
      <Column heading={"Cohort Task"}>
        {loading ? (
          <div className=" flex-1 flex justify-center items-center">
            <h2>..loading</h2>
          </div>
        ) : (
          cohortTasks &&
          cohortTasks.map((task) => (
            <div key={task._id}>
              <TaskCardList       
                date={task.dueDate}       
                title={task.title}
                onClick={() => {
                  navigate("/cohort-task/");
                }}
              />
            </div>
          ))
        )}
      </Column>
    </div>
  );
}

export default CohortTask;
