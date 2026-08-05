import GenericProps from "@/components/props/GenericProps";
import TaskHeader from "@/components/props/TaskHeader";
import TasksList from "@/components/props/TasksList";
import User from "@/components/props/User";
import Account from "@/components/react_hooks/state/Account";
import Note from "@/components/react_hooks/state/Note";

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
      <Note />
      <Account />
      <GenericProps items={[{ id: 1 }]} onClick={(id) => console.log(id)} />
    </main>
  );
}
