import AppLayout from "./ui/AppLayout";
import { useLocalStorageState } from "./hooks/useLocalStorage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import User from "./features/User/User";
import Project from "./features/Project/Project";
import Notfound from "./ui/Notfound";
import Task from "./features/Task/Task";
import UserDetails from "./features/User/UserDetails";
import { initialProjects, initialUsers, initialTasks } from "./utils/data";

function App() {
  const [users, setUsers] = useLocalStorageState(initialUsers, "users");
  const [projects, setProjects] = useLocalStorageState(
    initialProjects,
    "projects",
  );
  const [tasks, setTasks] = useLocalStorageState(initialTasks, "tasks");

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="users" />} />
          <Route
            path="users"
            element={
              <User users={users} setUsers={setUsers} projects={projects} />
            }
          />
          <Route
            path="users/:id"
            element={
              <UserDetails users={users} tasks={tasks} projects={projects} />
            }
          />
          <Route
            path="projects"
            element={
              <Project
                users={users}
                tasks={tasks}
                projects={projects}
                setProjects={setProjects}
              />
            }
          />
          <Route
            path="tasks"
            element={
              <Task
                users={users}
                projects={projects}
                setProjects={setProjects}
                tasks={tasks}
                setTasks={setTasks}
              />
            }
          />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
