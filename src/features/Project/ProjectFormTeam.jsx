import { Plus, X } from "lucide-react";
import UserCard from "../User/UserCard";

export default function ProjectFormTeam({ project, setProject, users }) {
  const team = project?.team;
  const otherUsers = users.filter((user) => {
    const foundUser = team.find((u) => u.id === user.id);
    if (!foundUser) return user;
  });

  function handleRemoveUser(id) {
    setProject((prj) => {
      return {
        ...prj,
        team: prj.team.filter((u) => u.id !== id),
      };
    });
  }
  function handleAddUser(user) {
    setProject((prj) => ({
      ...prj,
      team: [...prj.team, user],
    }));
  }
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-semibold text-slate-600">Team</h3>
      <div className="flex flex-col gap-4">
        {team.length > 0 ? (
          team.map((user) => (
            <UserCard key={user.id} user={user}>
              <UserCard.ActionButton
                className="border-red-300 bg-red-200 text-red-500"
                onClick={() => handleRemoveUser(user.id)}
              >
                <X className="h-5 w-5" />
              </UserCard.ActionButton>
            </UserCard>
          ))
        ) : (
          <div className="text-center">
            <h5 className="text-slate-800">There no team user yet!</h5>
            <h6 className="text-slate-600">Add user to your project.</h6>
          </div>
        )}
      </div>

      {otherUsers.length > 0 && (
        <>
          <hr />
          <h3 className="text-md font-semibold text-slate-600">Other users</h3>
          <div className="flex flex-col gap-4">
            {otherUsers.map((user) => (
              <UserCard key={user.id} user={user}>
                <UserCard.ActionButton
                  className="border-green-300 bg-green-200 text-green-800"
                  onClick={() => handleAddUser(user)}
                >
                  <Plus className="h-5 w-5" />
                </UserCard.ActionButton>
              </UserCard>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
