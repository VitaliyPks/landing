import { motion } from "framer-motion";
import {
  ProjectCard,
  ProjectHeader,
  ProjectTitle,
  ProjectMeta,
  ProjectDescription,
  StackTags,
  StackTag,
  List,
  TeamInfo,
  BoxMain,
  ProjectMainTitle,
  ProjectSubtitle,
} from "./ProjectSection.styles";
import { PROJECTS } from "../../data/resume-data";
import { EmojiEvents } from "@mui/icons-material";

export const ProjectsSection = () => {
  return (
    <BoxMain>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <ProjectMainTitle variant="h2">Проекты</ProjectMainTitle>
      </motion.div>

      {PROJECTS.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <ProjectCard>
            <ProjectHeader>
              <ProjectTitle variant="h3">{project.title}</ProjectTitle>
              <ProjectMeta>
                {project.role} • {project.period}
              </ProjectMeta>
            </ProjectHeader>

            <ProjectDescription variant="body1">
              {project.description}
            </ProjectDescription>

            <StackTags>
              {project.stack.map((tech) => (
                <StackTag key={tech}>{tech}</StackTag>
              ))}
            </StackTags>

            <ProjectSubtitle variant="h4">Обязанности</ProjectSubtitle>
            <List>
              {project.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </List>

            <ProjectSubtitle variant="h4">
              <EmojiEvents fontSize="small" />
              Достижения
            </ProjectSubtitle>
            <List>
              {project.achievements.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </List>

            <TeamInfo>Команда: {project.team}</TeamInfo>
          </ProjectCard>
        </motion.div>
      ))}
    </BoxMain>
  );
};
