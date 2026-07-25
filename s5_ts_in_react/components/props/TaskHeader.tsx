type TaskHeaderProps = {
  name: string;
  taskCount: number;
};

const TaskHeader = (props: TaskHeaderProps) => {
  return (
    <header>
      <h2 className="text-2xl bg-blue-500 text-white mx-auto mt-5 w-fit px-3 py-2 rounded-lg">
        Hi {props.name} you have {props.taskCount} uncompleted tasks!
      </h2>
    </header>
  );
};

export default TaskHeader;
