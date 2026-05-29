import wildlife from "@/assets/proj-wildlife.jpg";
import branding from "@/assets/proj-branding.jpg";
import comic from "@/assets/proj-comic.jpg";
import travel from "@/assets/proj-travel.jpg";
import themed from "@/assets/proj-themed.jpg";
import uiux from "@/assets/proj-uiux.jpg";

export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  cover: string;
  summary: string;
  brief: string;
  role: string[];
  gallery: string[];
  quote: { text: string; author: string };
}

export const projects: Project[] = [
 ];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
