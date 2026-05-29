export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  cover: string;
  role: string[];
  brief: string;
  gallery: string[];
  quote: {
    text: string;
    author: string;
  };
}

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    category: "Branding",
    year: "2024",
    cover: "/images/project-one/cover.jpg",
    role: ["Brand Identity", "Art Direction"],
    brief: "A short description of this project.",
    gallery: [
      "/images/project-one/1.jpg",
      "/images/project-one/2.jpg",
      "/images/project-one/3.jpg",
    ],
    quote: {
      text: "They delivered beyond our expectations.",
      author: "Client Name, Company",
    },
  },
];

export const getProject = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
