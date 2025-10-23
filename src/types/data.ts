export type TTechLevel = "Advanced" | "Intermediate" | "Basic";

export interface TTechItem {
  name: string;
  years: number;
  level: TTechLevel;
}

export interface TTechCategory {
  title: string;
  items: TTechItem[];
}
