import reqAxios from "../../../common/hooks/useAxios";

class Task {
  static async addTask({ title, slug, description, category, status, date }) {
    try {
      if (!(title, slug, description, category, status, date)) {
        throw new Error("addTask => provide all required field");
      }

      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        throw new Error("addTask => accessToken not found");
      }

      const options = {
        data: {
          title,
          slug,
          description,
          category,
          status,
          dueDate: date,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const task = await reqAxios("Post", "/task/add-task", options);

      if (!task) {
        throw new Error("something went wrong while creating task.");
      }

      return task;
    } catch (error) {
      console.error("addTask err :- ", error.message);
    }
  }

  static async editTask(
    taskId,
    { title, slug, description, category, status, date },
  ) {
    try {
      if (!taskId) {
        throw new Error("editTask => provide task Id field");
      }

      if (!(title, slug, description, category, status, date)) {
        throw new Error("editTask => provide all required field");
      }

      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        throw new Error("editTask => accessToken not found");
      }

      const options = {
        data: {
          title,
          slug,
          description,
          category,
          status,
          date,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const editTask = await reqAxios(
        "put",
        `/task/edit-task/${taskId}`,
        options,
      );

      if (!editTask) {
        throw new Error("something went wrong while fetching editTask.");
      }

      return editTask;
    } catch (error) {
      console.error("editTask err :- ", error.message);
    }
  }

  static async cohortTask() {
    try {
      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        throw new Error("cohortTask => accessToken not found");
      }

      const options = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const cohortTasks = await reqAxios(
        "get",
        "/task/category/cohort",
        options,
      );

      if (!cohortTasks) {
        throw new Error("something went wrong while fetching cohort task.");
      }

      return cohortTasks;
    } catch (error) {
      console.error("cohortTask err :- ", error.message);
    }
  }

  static async collegeTask() {
    try {
      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        throw new Error("collegeTask => accessToken not found");
      }

      const options = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const collegeTasks = await reqAxios(
        "get",
        "/task/category/college",
        options,
      );

      if (!collegeTasks) {
        throw new Error("something went wrong while fetching college task.");
      }

      return collegeTasks;
    } catch (error) {
      console.error("collegeTask err :- ", error.message);
    }
  }

  static async extraTask() {
    try {
      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        throw new Error("extraTask => accessToken not found");
      }

      const options = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const extraTasks = await reqAxios("get", "/task/category/extra", options);

      if (!extraTasks) {
        throw new Error("something went wrong while fetching extra task.");
      }

      return extraTasks;
    } catch (error) {
      console.error("extraTask err :- ", error.message);
    }
  }

  static async onGoingTask() {
    try {
      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        throw new Error("onGoingTask => accessToken not found");
      }

      const options = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const onGoingTask = await reqAxios("get", "/task/running", options);

      if (!onGoingTask) {
        throw new Error("something went wrong while fetching onGoingTask.");
      }

      return onGoingTask;
    } catch (error) {
      console.error("onGoingTask err :- ", error.message);
    }
  }

  static async todayTask() {
    try {
      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        throw new Error("todayTask => accessToken not found");
      }

      const options = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const todayTask = await reqAxios("GET", "/task/today", options);

      if (!todayTask) {
        throw new Error("something went wrong while fetching todayTask.");
      }

      return todayTask;
    } catch (error) {
      console.error("todayTask err :- ", error.message);
    }
  }

  static async deleteTask(taskId) {
    try {
      if (!taskId) {
        throw new Error("deleteTask => provide all Task id field");
      }

      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        throw new Error("deleteTask => accessToken not found");
      }

      const options = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const deleteTask = await reqAxios(
        "delete",
        `/task/delete-task/${taskId}`,
        options,
      );

      if (!deleteTask) {
        throw new Error("something went wrong while fetching deleteTask.");
      }

      return deleteTask;
    } catch (error) {
      console.error("deleteTask err :- ", error.message);
    }
  }

  static async doneTask(taskId) {
    try {
      if (!taskId) {
        throw new Error("doneTask => provide all Task id field");
      }

      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        throw new Error("doneTask => accessToken not found");
      }

      const options = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const doneTask = await reqAxios("Patch", `/task/done/${taskId}`, options);
      console.log("task is", doneTask);

      

      if (!doneTask) {
        throw new Error("something went wrong while fetching doneTask.");
      }

      return doneTask;
    } catch (error) {
      console.error("doneTask err :- ", error.message);
    }
  }

  static async doneOngoingTask(taskId) {
    try {
      if (!taskId) {
        throw new Error("doneOngoingTask => provide all Task id field");
      }

      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        throw new Error("doneOngoingTask => accessToken not found");
      }

      const options = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const doneOngoingTask = await reqAxios(
        "Patch",
        `/task/done-ongoing/${taskId}`,
        options,
      );

      if (!doneOngoingTask) {
        throw new Error("something went wrong while fetching doneOngoingTask.");
      }

      return doneOngoingTask;
    } catch (error) {
      console.error("doneOngoingTask   err :- ", error.message);
    }
  }
}

export default Task;
