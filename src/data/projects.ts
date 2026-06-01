import wildlife from "@/assets/proj-wildlife.jpg";
import branding from "@/assets/proj-branding.jpg";
import comic from "@/assets/proj-comic.jpg";
import travel from "@/assets/proj-travel.jpg";
import themed from "@/assets/proj-themed.jpg";
import uiux from "@/assets/proj-uiux.jpg";
import p1 from "@/assets/p1.png";
import p2 from "@/assets/p2.png";
import p3 from "@/assets/p3.png";
import p4 from "@/assets/p4.png";
import p5 from "@/assets/p5.png";
import p6 from "@/assets/p6.png";
import p7 from "@/assets/p7.png";
import p8 from "@/assets/p8.png";
import p9 from "@/assets/p9.png";
import p10 from "@/assets/p10.png";

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
  quote: { text: string; author?: string };
}

export const projects: Project[] = [
  {
    slug: "XALANI CANDLES",
    title: "XALANI CANDLES",
    category: "Branding and print",
    year: "2026",
    cover: "/x1.jpg",
    summary: "Literally great for house decor, jewelry, beads and more.",
    brief: "Living a simple life full of art",
    role: ["Branding"],
    gallery: ["/x1.jpg","/x2.jpg","/x3.jpg","/x4.jpg","/x5.jpg","/x6.jpg","/x7.jpg","/x8.jpg","/x9.jpg","/x10.jpg","/x11.jpg","/x12.jpg","/x13.jpg","/x14.jpg","/x15.jpg","/x16.jpg"],
    quote: { text: "Zita has the rare patience to wait for the picture instead of taking it.", author: "Editor, Field Notes Magazine" },
  },
  {
    slug: "PEARL OF EXPERIENCE",
    title: "PEARL OF EXPERIENCE",
    category: "WEB DESIGN",
    year: "2026",
    cover: "/1.jpg",
    summary: "From wildlife safaris to culinary adventures — we craft unforgettable journeys.",
    brief: "",
    role: ["Web Development"],
    gallery: ["/1.jpg","/2.jpg","/3.jpg","/4.jpg","/5.jpg","/6.jpg","/7.jpg","/8.jpg","/9.jpg","/10.jpg","/11.jpg"],
    quote: { text: "Let us be your guide." },
  },
  {
    slug: "PHOTOGRAPHY",
    title: "PHOTOGRAPHY",
    category: "Photography",
    year: "2026",
    cover: p1,
    summary: "A visual journey through light, texture, and the quiet moments in between.",
    brief: "Capturing the world one frame at a time.",
    role: ["Photography"],
    gallery: [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10],
    quote: { text: "Every photograph is a certificate of presence." },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
