import React, { useCallback, useEffect, useState } from "react";
import Input from "../../../common/components/Input.jsx";
import Textarea from "../../../common/components/Textarea.jsx";
import Select from "../../../common/components/Select.jsx";
import Button from "../../../common/components/Button.jsx";
import { useForm, Controller, useWatch } from "react-hook-form";
import Column from "../../../common/components/Column.jsx";
import Task from "../services/task.service.js";
import { useNavigate } from "react-router-dom";

function AddTasKForm(taskId) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const statusOptions = [
    { label: "Due", value: "due" },
    { label: "Completed", value: "completed" },
    { label: "Ongoing", value: "ongoing" },
  ];

  const categoryOptions = [
    { label: "Cohort Task", value: "cohort" },
    { label: "College Task", value: "college" },
    { label: "Extra Task", value: "extra" },
  ];

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const setTaskValues = useCallback(
    (task) => {
      setValue("title", task?.title);
      setValue("slug", task?.slug);
      setValue("description", task?.description);
      setValue("category", task?.category);
      setValue("status", task?.status);
      setValue("date", task?.date?.split("T")[0]);
    },
    [setValue],
  );

  useEffect(() => {
    if (taskId) {
      const task = null;
      setTaskValues(task);
    }
  }, [taskId, setTaskValues]);

  const onSubmit = async (data) => {
    setLoading(true);
    const task = await Task.addTask(data);
    if (task) {
      navigate("/", { replace: true });
    }
    setLoading(false);
  };

  const slugify = useCallback((text) => {
    return text
      .toLowerCase() // lowercase
      .trim() // remove extra space
      .replace(/[^a-z0-9\s-]/g, "") // remove special chars
      .replace(/\s+/g, "-") // space → hyphen
      .replace(/-+/g, "-"); // multiple - → single
  }, []);

  const title = useWatch({
    control,
    name: "title",
  });

  useEffect(() => {
    if (title) {
      setValue("slug", slugify(title));
    }
  }, [title, slugify, setValue]);

  if (loading) {
    return (
      <div className=" flex-1 flex justify-center items-center">
        <h2>..loading</h2>
      </div>
    );
  } else
    return (
      <div className="h-full">
        <Column heading={"Add Task"}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
              <div>
                <Controller
                  name="title"
                  defaultValue=""
                  rules={{
                    required: "Title is required",
                    minLength: {
                      value: 10,
                      message: "Title must be at least 10 characters",
                    },
                    maxLength: {
                      value: 100,
                      message: "Title must be less than 100 characters",
                    },
                  }}
                  control={control}
                  render={({ field }) => {
                    return (
                      <Input
                        isErr={errors.title ? true : false}
                        placeholder="Enter your title"
                        type="text"
                        {...field}
                      />
                    );
                  }}
                />
              </div>

              <div>
                <Controller
                  name="slug"
                  defaultValue=""
                  control={control}
                  rules={{
                    required: "Slug is required",
                  }}
                  render={({ field }) => {
                    return (
                      <Input
                        isErr={errors.slug ? true : false}
                        type="text"
                        placeholder="Slug"
                        {...field}
                        readOnly
                      />
                    );
                  }}
                />
              </div>

              <div>
                <Controller
                  name="description"
                  defaultValue=""
                  rules={{
                    required: "Description is required",
                    minLength: {
                      value: 10,
                      message: "Description must be at least 10 characters",
                    },
                    maxLength: {
                      value: 500,
                      message: "Description must be less than 500 characters",
                    },
                  }}
                  control={control}
                  render={({ field }) => {
                    return (
                      <Textarea
                        isErr={errors.description ? true : false}
                        placeholder="Enter task description"
                        {...field}
                      />
                    );
                  }}
                />
              </div>

              <div>
                <Controller
                  name="category"
                  defaultValue=""
                  control={control}
                  rules={{
                    required: "Category is required",
                  }}
                  render={({ field }) => {
                    return (
                      <Select
                        isErr={errors.category ? true : false}
                        placeholder="Select a category"
                        options={categoryOptions}
                        {...field}
                      />
                    );
                  }}
                />
              </div>

              <div>
                <Controller
                  name="status"
                  defaultValue=""
                  control={control}
                  rules={{
                    required: "Status is required",
                  }}
                  render={({ field }) => {
                    return (
                      <Select
                        isErr={errors.status ? true : false}
                        placeholder="Select a status"
                        options={statusOptions}
                        {...field}
                      />
                    );
                  }}
                />
              </div>

              <div>
                <Controller
                  name="date"
                  defaultValue=""
                  control={control}
                  rules={{
                    required: "Date is required",
                  }}
                  render={({ field }) => {
                    return (
                      <Input
                        isErr={errors.date ? true : false}
                        type="date"
                        {...field}
                      />
                    );
                  }}
                />
              </div>
              <div className="text-center">
                <Button text={"Submit"} color={"blue"} />
              </div>
            </div>
          </form>
        </Column>
      </div>
    );
}

export default AddTasKForm;
