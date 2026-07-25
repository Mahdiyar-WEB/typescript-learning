import TaskHeader from "@/components/TaskHeader";
import TasksList from "@/components/TasksList";
import User from "@/components/User";

export default function Home() {
  return (
    <main>
      <TaskHeader name="Mahdiyar" taskCount={3} />
      <User user={{ firstName: "mahdiyar", lastName: "marvi" }} />
      <TasksList
        tasks={[
          { title: "Learn Typescript", completed: false },
          { title: "Learn more ....", completed: true },
          { title: "Learn Nest js", completed: false },
        ]}
      />
    </main>
  );
}
