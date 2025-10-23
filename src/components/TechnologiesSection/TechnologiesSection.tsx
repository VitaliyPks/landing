import { motion } from "framer-motion";

import {
  CategoryTitle,
  TechList,
  TechName,
  TechExperience,
  LevelLabel,
  ProgressBarFill,
  BoxMain,
  TechTitle,
  TechItemBox,
  ProgressBarBox,
} from "./TechnologiesSection.styles";

import { TECHNOLOGIES } from "../../data/resume-data";
import { getLevelLabel, getYearsLabel } from "./TechnologiesSection.const";

export const TechnologiesSection = () => {
  return (
    <BoxMain>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <TechTitle variant="h2">Технологии</TechTitle>
      </motion.div>

      {TECHNOLOGIES.map((category, catIndex) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: catIndex * 0.1, duration: 0.5 }}
          style={{ marginBottom: "48px" }}
        >
          <CategoryTitle variant="h3">{category.title}</CategoryTitle>
          <TechList>
            {category.items.map((tech) => (
              <TechItemBox key={tech.name} level={tech.level}>
                <div>
                  <TechName variant="body1">{tech.name}</TechName>
                  <TechExperience variant="body2">
                    Опыт: {getYearsLabel(tech.years)}
                  </TechExperience>
                </div>
                <div>
                  <LevelLabel level={tech.level} variant="body2" >
                    {getLevelLabel(tech.level)}
                  </LevelLabel>
                  <ProgressBarBox textAlign={"left"}>
                    <ProgressBarFill level={tech.level} textAlign={"left"} />
                  </ProgressBarBox>
                </div>
              </TechItemBox>
            ))}
          </TechList>
        </motion.div>
      ))}
    </BoxMain>
  );
};
