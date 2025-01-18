import Button from "../../ui/Button.jsx";
import ProjectCard from "./ProjectCard.jsx";
import Header from "../../ui/Header.jsx";
import Main from "../../ui/Main.jsx";
import { useState } from "react";
import ProjectFormModal from "./ProjectFormModal.jsx";
import DeleteProjectModal from "./DeleteProjectModal.jsx";
import { populateProjects } from "../../utils/populateData.js";

export default function Project({ users, projects, setProjects, tasks }) {
  const [projectFormModal, setProjectFormModal] = useState(null);
  const [deleteProject, setDeleteProject] = useState(null);

  const populatedProjects = populateProjects({ projects, users });

  function handleDeleteProject(id) {
    setProjects((prjs) => prjs.filter((prj) => prj.id !== id));
    setDeleteProject(null);
  }
  return (
    <>
      <Header>
        <Header.Title>Projects</Header.Title>

        <Button
          className="flex w-fit items-center"
          onClick={() => setProjectFormModal("new")}
        >
          New project
        </Button>
      </Header>

      <Main>
        <section className="flex flex-col gap-6">
          {populatedProjects.length > 0 ? (
            populatedProjects.map((prj) => (
              <ProjectCard
                key={prj.id}
                project={prj}
                setDeleteProject={setDeleteProject}
                setProjectFormModal={setProjectFormModal}
              />
            ))
          ) : (
            <h3 className="text-center text-lg text-slate-800">
              There is no project yet!
            </h3>
          )}
        </section>

        {projectFormModal && (
          <ProjectFormModal
            users={users}
            projects={populatedProjects}
            setProjects={setProjects}
            project={projectFormModal}
            close={() => setProjectFormModal(null)}
          />
        )}

        {deleteProject && (
          <DeleteProjectModal
            tasks={tasks}
            project={deleteProject}
            handleDeleteProject={handleDeleteProject}
            close={() => setDeleteProject(null)}
          />
        )}
      </Main>
    </>
  );
}
