import styles from "./Form.module.css";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTasks } from "../contexts/TasksContext";
import { useNavigate } from "react-router";
import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";
import Button from "./Button";
import { usePopup } from "../contexts/PopupContext";

const schema = yup.object().shape({
  title: yup.string().required(),
  status: yup.string().required(),
  priority: yup.string().required(),
  description: yup.string().required(),
  deadline: yup.string().required(),
});

const inputs = [
  {
    name: "title",
    type: "text",
    placeholder: "Enter title here",
  },
  { name: "deadline", type: "date", placeholder: "Enter date here" },
];

const selects = [
  {
    name: "status",
    options: [
      { value: "To Do", text: "To Do" },
      { value: "In Progress", text: "In Progress" },
      { value: "Testing", text: "Testing" },
      { value: "Done", text: "Done" },
    ],
  },
  {
    name: "priority",
    options: [
      { value: "Urgent", text: "Urgent" },
      { value: "Normal", text: "Normal" },
    ],
  },
];

const textAreas = [{ name: "description", placeholder: "Write something" }];

export default function Form({ type, task }) {
  const buttons = [
    { type: "submit", text: type === "edit" ? "Edit Task" : "Add Task" },
  ];

  let defaultValues;
  if (type === "edit") {
    defaultValues = { ...task };
  } else {
    defaultValues: null;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const { addTask, editTask } = useTasks();
  const { closePopup } = usePopup();

  const navigate = useNavigate();

  function handleFormSubmit(data) {
    if (type === "edit") {
      editTask(
        data.title,
        data.deadline,
        data.status,
        data.priority,
        data.description,
        task.id
      );
      closePopup();
    } else {
      addTask(
        data.title,
        data.deadline,
        data.status,
        data.priority,
        data.description
      );
      navigate("/");
    }
    reset();
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
      {inputs.map((input) => (
        <Input
          key={input.name}
          name={input.name}
          type={input.type}
          placeholder={input.placeholder}
          register={register}
          errors={errors}
        />
      ))}
      {selects.map((select) => (
        <Select
          key={select.name}
          name={select.name}
          register={register}
          errors={errors}
          options={select.options}
        />
      ))}
      {textAreas.map((textArea) => (
        <TextArea
          key={textArea.name}
          name={textArea.name}
          placeholder={textArea.placeholder}
          register={register}
          errors={errors}
        />
      ))}
      {buttons.map((button) => (
        <Button key={button.text} type={button.type} text={button.text} />
      ))}
    </form>
  );
}
