export type TTechLevel = "Advanced" | "Intermediate" | "Basic";

export interface ITechItem {
  name: string;
  years: number;
  level: TTechLevel;
}

export interface ITechCategory {
  title: string;
  items: ITechItem[];
}

export interface IProject {
  id: string;
  title: string;
  role: string;
  period: string;
  description: string;
  stack: string[];
  responsibilities: string[];
  achievements: string[];
  team: string;
}
