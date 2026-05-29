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
 ];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
