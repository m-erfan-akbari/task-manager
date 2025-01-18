import { useEffect, useState } from "react";
import Header from "../../ui/Header";
import InputController from "../../ui/InputController";
import Main from "../../ui/Main";
import TextareaController from "../../ui/TextareaController";
import SelectController from "../../ui/SelectController";
import ProjectFormTeam from "./ProjectFormTeam";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

export default function ProjectFormModal({
  users,
  projects,
  setProjects,
  project,
  close,
}) {
  const initialProject = {
    id: `prj-${new Date().getTime()}`,
    name: "",
    description: "",
    team: [],
  };
  const [currentProject, setCurrentProject] = useState(() => {
    if (project === "new") return initialProject;
    return project;
  });
  const [error, setError] = useState(null);
  const { name, description } = currentProject;

  function handleChangeField(e) {
    const field = e.target.id;
    const value = e.target.value;
    setCurrentProject((p) => ({ ...p, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (currentProject.team.length < 1)
      return setError(
        "The project must contain at least one user in the team!",
      );
    const sameNameProject = projects.find(
      (prj) => prj.name === currentProject.name && prj.id !== currentProject.id,
    );
    if (sameNameProject)
      return setError(`A project exist with same name: ${currentProject.name}`);

    let newProject = {
      ...currentProject,
      team: currentProject.team.map((u) => u.id),
    };

    if (project === "new") {
      newProject.createdAt = new Date().getTime();
      setProjects((prj) => [...prj, newProject]);
    } else {
      setProjects((prjs) =>
        prjs.map((prj) => {
          if (prj.id === currentProject.id) return newProject;
          return prj;
        }),
      );
    }

    close();
  }
  return (
    <>
      <Header>
        <Header.Title>Project Form</Header.Title>
      </Header>
      <Main>
        <Modal close={close}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div>
              <InputController
                label="Name"
                id="name"
                value={name}
                onChange={handleChangeField}
                required
              />

              <TextareaController
                label="Description"
                id="description"
                type="textarea"
                value={description}
                onChange={handleChangeField}
                required
              />
            </div>

            <ProjectFormTeam
              project={currentProject}
              setProject={setCurrentProject}
              users={users}
            />

            {error && <p className="text-lg text-red-600">{error}</p>}

            <div className="flex justify-between">
              <Button variant="outline" onClick={close}>
                Cancel
              </Button>
              <Button>{project === "new" ? "Add" : "Edit"} project</Button>
            </div>
          </form>
        </Modal>
      </Main>
    </>
  );
}
