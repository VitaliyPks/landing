export const getLevelColor = (
  level: "Advanced" | "Intermediate" | "Basic",
  mode: "light" | "dark"
) => {
  if (level === "Advanced") return mode === "dark" ? "#4caf50" : "#2e7d32";
  if (level === "Intermediate") return mode === "dark" ? "#ff9800" : "#f57c00";
  return mode === "dark" ? "#9e9e9e" : "#616161";
};

export const getYearsLabel = (years: number) => {
  if (years % 10 === 1 && years % 100 !== 11) return `${years} год`;
  if ([2, 3, 4].includes(years % 10) && ![12, 13, 14].includes(years % 100))
    return `${years} года`;
  return `${years} лет`;
};

export const getLevelLabel = (level: "Advanced" | "Intermediate" | "Basic") => {
  if (level === "Advanced") return "Продвинутый";
  if (level === "Intermediate") return "Средний";
  return "Базовый";
};
