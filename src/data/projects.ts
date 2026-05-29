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
  { 
    slug: "wild-witness", 
    title: "Wild Witness", 
    category: "Wildlife Photography", 
    year: "2025", 
    cover: wildlife,
    summary: "A photo series capturing the quiet dignity of African wildlife at the edges of dawn.",
    brief: "Wild Witness is a long-form documentary series shot across savanna reserves. Each frame is an act of patient observation — waiting for the moment animals forget the lens exists.",
    role: ["Photography", "Editing", "Sequencing"],
    gallery: [wildlife, "/w1.jpeg", "/w2.jpeg", "/w3.jpeg", "/w4.jpeg", "/w5.jpeg", "/w6.jpeg", "/w7.jpeg", "/w8.jpeg", "/w9.jpeg", "/w10.jpeg", "/w11.jpeg", "/w12.jpeg", "/w13.jpeg", "/w14.jpeg", "/w15.jpeg", "/w16.jpeg", "/w17.jpeg", "/w18.jpeg", "/w19.jpeg" ],
    quote: { text: "Zita has the rare patience to wait for the picture instead of taking it.", author: "Editor, Field Notes Magazine" } 
  },
  { 
    slug: "x-tech", 
    title: "MyTereka", 
    category: "Brand Identity", 
    year: "2026", 
    cover: branding,
    summary: "To aid savings among students using gamification..",
    brief: "",
    role: ["Branding", "Logo Design", "Guidelines"],
    gallery: [branding, uiux,  "/1.jpeg",  "/2.jpeg",  "/3.jpeg",  "/4.jpeg",  "/5.jpeg",  "/6.jpeg",  "/7.jpeg",  "/8.jpeg",  "/9.jpeg"],
    quote: { text: "Our brand finally feels like us — sharp, friendly, alive.", author: "Founder, X Tech" } 
  },
  { 
    slug: "jk-trails", 
    title: "Kenya Trails", 
    category: "Social Media Series", 
    year: "2026", 
    cover: travel,
    summary: "An ongoing travel media series — quiet landscapes, loud captions.",
    brief: "Concept, photography and posting strategy for JK Travel Trails. Grew the audience 4x in six months with a slow, story-first feed.",
    role: ["Content", "Photography", "Copy"],
    gallery: [travel, "/t1.jpeg", "/t2.jpeg", "/t3.jpeg", "/t4.jpeg", "/t5.jpeg", "/t6.jpeg", "/t7.jpeg", "/t8.jpeg", "/t9.jpeg", "/t10.jpeg", "/t11.jpeg", "/t12.jpeg", "/t13.jpeg", "/t14.jpeg", "/t15.jpeg", "/t16.jpeg"],
    quote: { text: "She turned our trips into a narrative people actually wait for.", author: "JK Travel Trails" } 
  },
  { 
    slug: "panel-press", 
    title: "Illustrations", 
    category: "Comic Illustration", 
    year: "2024", 
    cover: "/i1.jpeg",
    summary: "Do not just light your room, make it feel peaceful.",
    brief: "love what you see?",
    role: ["Illustration", "Writing", "Print"],
    gallery: [ "/i1.jpeg", "/i2.jpeg", "/i3.jpeg", "/i4.jpeg", "/i5.jpeg", "/i6.jpeg", "/i7.jpeg", "/i8.jpeg"],
    quote: { text: "Vivid, generous, and deeply local. A genuine new voice.", author: "Reviewer, Print Quarterly" } 
  },
  { 
    slug: "themed-portraits", 
    title: "Themed Portraits", 
    category: "Graphical Design ", 
    year: "2025", 
    cover: themed,
    summary: "Concept-driven studio portraits where lighting becomes the story.",
    brief: "A personal studio practice exploring color gels, character and identity through portraiture. Featured in two regional exhibitions.",
    role: ["Direction", "Photography", "Retouching"],
    gallery: [themed,   "/c1.jpeg", "/c2.jpeg", "/c3.jpeg", "/c4.jpeg", "/c5.jpeg", "/c6.jpeg", "/c7.jpeg", "/c8.jpeg", "/c9.jpeg", "/c10.jpeg", "/c11.jpeg", "/c12.jpeg", "/c13.jpeg", "/c14.jpeg"],
    quote: { text: "Every portrait feels like the second act of a film I want to see.", author: "Curator, Open Frame" } 
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
