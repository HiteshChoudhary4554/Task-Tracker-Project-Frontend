import React, { useEffect, useState } from "react";
import Column from "../../../common/components/Column.jsx";
import TaskCardList from "./TaskCardList.jsx";
import { useNavigate } from "react-router-dom";
import Task from "../services/task.service.js";
import { useDispatch } from "react-redux";
import { addCollege } from "../taskSlice.js";

function CollegeTask() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [collegeTasks, setCollegeTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTasks() {
      const tasks = await Task.collegeTask();
      if (tasks.length > 0) {
        setCollegeTasks(tasks);
        dispatch(addCollege(tasks));
      }
      setLoading(false);
    }
    fetchTasks();
  }, [dispatch]);

    return (
      <div className="h-full flex-1">
        <Column heading={"College Task"}>
          {loading ? (
            <div className=" flex-1 flex justify-center items-center">
              <h2>..loading</h2>
            </div>
          ) : (
            collegeTasks &&
            collegeTasks.map((task) => (
              <div key={task._id}>
                <TaskCardList
                  date={task.dueDate}
                  title={task.title}
                  onClick={() => {
                    navigate("/college-task/");
                  }}
                />
              </div>
            ))
          )}
        </Column>
      </div>
    );
}

export default CollegeTask;
