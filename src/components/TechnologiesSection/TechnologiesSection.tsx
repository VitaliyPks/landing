import { useState } from "react";
import { motion } from "framer-motion";
import {
  BoxMain,
  TechTitle,
  FiltersContainer,
  FilterButton,
  TagsGrid,
  TechTag,
} from "./TechnologiesSection.styles";

import { ALL_TECHNOLOGIES, TECH_CATEGORIES } from "../../data/resume-data";

export const TechnologiesSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const handleFilter = (id: string) => {
    setActiveFilter(id);
  };

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
      <FiltersContainer>
        {TECH_CATEGORIES.map((cat) => (
          <FilterButton
            key={cat.id}
            active={activeFilter === cat.id}
            onClick={() => handleFilter(cat.id)}
          >
            {cat.label}
          </FilterButton>
        ))}
      </FiltersContainer>
      <TagsGrid>
        {ALL_TECHNOLOGIES.map((tech) => {
          const isActive =
            activeFilter === "all" || activeFilter === tech.category;
          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: isActive ? 1 : 0.4,
                scale: isActive ? 1 : 0.95,
              }}
              transition={{ duration: 0.2 }}
            >
              <TechTag sx={{ px: 1.5, py: 0.5 }} active={isActive}>
                {tech.name}
              </TechTag>
            </motion.div>
          );
        })}
      </TagsGrid>
    </BoxMain>
  );
};
