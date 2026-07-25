type Task = {
  title: string;
  completed: boolean;
};

type TasksListProps = {
  tasks: Task[];
};

export default function TasksList({ tasks }: TasksListProps) {
  return (
    <ul className="p-5 mx-auto w-fit rounded-xl bg-gray-100 space-y-2">
      {tasks.map(({ completed, title }) => {
        return (
          <li key={title} className="flex justify-between gap-10">
            <span>{title}</span> <span>{completed ? "✅" : "⏹️"}</span>
          </li>
        );
      })}
    </ul>
  );
}
