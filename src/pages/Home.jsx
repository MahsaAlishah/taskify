import TaskQuickAdd from "../features/tasks/components/TaskQuickAdd";
import TasksList from "../features/tasks/components/TasksList";

function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-xl space-y-4">
        <TaskQuickAdd />
        
        <hr className="w-full border-t border-border-dark my-7" />
        <TasksList />
      </div>
    </div>
  );
}

export default Home;
