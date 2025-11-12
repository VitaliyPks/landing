export interface TechItem {
  name: string;
  category: string;
}
export interface ITechCategory {
  label: string;
  id: string;
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
