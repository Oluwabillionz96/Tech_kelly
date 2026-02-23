export type ProjectCategory =
  | "Content and Video Edits"
  | "Graphics"
  | "Video Animations";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  thumbnail: string;
  description: string;
  videoUrl?: string;
  client: string;
  year: string;
  tags: string[];
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: "Software" | "Skillset";
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}
