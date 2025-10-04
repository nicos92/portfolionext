import type { ImagePlaceholder } from './placeholder-images';

export type ProjectDescription = {
  problem: string;
  solution: string;
  stack: string;
};

export type Project = {
  id: string;
  title: string;
  description: ProjectDescription;
  image?: ImagePlaceholder;
  repoUrl: string;
  demoUrl: string;
};

export type SkillCategory = {
  expert: string[];
  intermediate: string[];
  familiar: string[];
};

export type Education = {
  title: string;
  institution: string;
  date: string;
  description: string;
};
