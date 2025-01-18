import { NavLink, useParams } from "react-router-dom";
import UserCard from "./UserCard";
import Header from "../../ui/Header";
import Main from "../../ui/Main";
import { populateTasks } from "../../utils/populateData";
import TaskCard from "../Task/TaskCard";

export default function UserDetails({ users, projects, tasks }) {
  const { id } = useParams();
  const user = users.find((u) => u.id === id);
  if (!user)
    return (
      <>
        <Header>
          <Header.Title>User Details</Header.Title>
        </Header>
        <Main className="items-center justify-center !gap-1">
          <h3 className="text-2xl text-red-600">User not found!</h3>

          <NavLink to={"/users"} className={"text-indigo-500"}>
            Back to users
          </NavLink>
        </Main>
      </>
    );
  const userTasks = tasks.filter((t) => t.assignee === id);
  const populatedUserTasks = populateTasks({
    tasks: userTasks,
    projects,
    users,
  });

  const reviewerTasks = tasks.filter((t) => t?.reviewer === id);
  const populatedReviewerTasks = populateTasks({
    tasks: reviewerTasks,
    projects,
    users,
  });
  return (
    <>
      <Header>
        <Header.Title>User Details</Header.Title>
      </Header>
      <Main>
        <div className="container mx-auto space-y-6 rounded-md border bg-white p-6">
          <UserCard user={user} />

          <div className="flex flex-col gap-6 rounded-md bg-slate-200 p-6">
            <h2 className="text-3xl font-semibold text-slate-700">
              {user.name} Tasks
            </h2>
            {populatedUserTasks.length > 0 ? (
              <div className="flex flex-wrap gap-6">
                {populatedUserTasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            ) : (
              <h6 className="text-cener text-lg text-slate-600">
                There is no task for {user.name} yet!
              </h6>
            )}
          </div>

          {populatedReviewerTasks.length > 0 ? (
            <div className="flex flex-col gap-6 rounded-md bg-slate-200 p-6">
              <h2 className="text-3xl font-semibold text-slate-700">
                Review tasks by {user.name}
              </h2>
              <div className="flex flex-wrap gap-6">
                {populatedReviewerTasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </Main>
    </>
  );
}
