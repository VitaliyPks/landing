import { motion } from "framer-motion";
import { ABOUT_TEXT, PERSONAL_QUALITIES } from "../../data/resume-data";
import {
  AboutText,
  AboutTitle,
  BoxMain,
  QualitiesGrid,
  QualityCard,
  QualityDescription,
  QualityTitle,
} from "./AboutSection.styles";

export const AboutSection = () => {
  return (
    <BoxMain>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <AboutTitle variant="h2">Обо мне</AboutTitle>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <AboutText variant="body1">{ABOUT_TEXT}</AboutText>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <QualitiesGrid>
          {PERSONAL_QUALITIES.map((quality, index) => (
            <motion.div
              key={quality.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
            >
              <QualityCard>
                <QualityTitle variant="h6">{quality.title}</QualityTitle>
                <QualityDescription variant="body2">
                  {quality.description}
                </QualityDescription>
              </QualityCard>
            </motion.div>
          ))}
        </QualitiesGrid>
      </motion.div>
    </BoxMain>
  );
};
