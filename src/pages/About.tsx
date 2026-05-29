import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Splash } from "@/components/Splash";
import portrait from "@/assets/portrait.png";

const About = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <Nav />

    {/* HERO SECTION */}
    <section className="relative px-6 md:px-12 pt-8 pb-16">
      <Splash className="top-10 -right-10 w-72" rotate={120} />
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-ink">
            <img 
              src={portrait} 
              alt="Aber Zita Lourdes" 
              width={896} 
              height={1024} 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
        <div className="lg:col-span-7">
          <p className="uppercase tracking-[0.3em] text-xs text-muted-foreground mb-4">About</p>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-[0.9] mb-8">
            hi, i'm<br />zita<span className="text-muted-foreground/60">.</span>
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground mb-5">
            I'm Aber Zita Lourdes — a graduate in Bachelors of Visual Communication, Design and Multimedia. I am passionate about creating visuals and photography that not only look good but tell stories.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            From social media content to UI/UX designs, I also explore printing, illustration and web media. To me, design is about connecting to people in a creative way.
          </p>
        </div>
      </div>
    </section>

    {/* PHILOSOPHY SECTION */}
    <section className="relative bg-ink text-ink-foreground px-6 md:px-12 py-24 my-12 rounded-t-[3rem] md:mx-6 overflow-hidden">
      <Splash className="-top-10 -left-10 w-72" rotate={-20} />
      <Splash className="-bottom-16 right-0 w-80" rotate={150} />
      <div className="max-w-4xl mx-auto relative z-10">
        <p className="uppercase tracking-[0.3em] text-xs text-muted-foreground/80 mb-6">My philosophy</p>
        <h2 className="font-display text-4xl md:text-6xl font-extrabold leading-[0.95] mb-10">
          powerful images<br />are not staged —<br />they're <span className="text-muted-foreground/40 text-stroke-ink">discovered</span>.
        </h2>
        <div className="space-y-5 text-lg text-ink-foreground/80 leading-relaxed">
          <p>
            They tell stories that words can't express. Every design gives a story its voice, information turned into a visual experience.
          </p>
          <p>
            My portfolio is rooted in intentional observation, capturing stories and using graphic design to create impact. I don't just create visuals; I build stories and make an impact through photography and graphic design.
          </p>
          <p className="text-ink-foreground font-medium">
            As a person driven by a passion for sustainability and community impact, I approach design not just as an aesthetic pursuit, but as a problem-solving tool.
          </p>
        </div>
      </div>
    </section>

    {/* TOOLBOX, SERVICES & EDUCATION SECTION */}
    <section className="px-6 md:px-12 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display text-3xl font-extrabold mb-4">Toolbox</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>Adobe Photoshop & Lightroom</li>
            <li>Illustrator & InDesign</li>
            <li>Figma · Webflow</li>
            <li>Canon · Sony</li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-3xl font-extrabold mb-4">Services</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>Wildlife & Themed Photography</li>
            <li>Brand Identity Systems</li>
            <li>UI / UX & Web Design</li>
            <li>Print, Illustration & Comics</li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-3xl font-extrabold mb-4">Education</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>BA · Visual Communication, Design & Multimedia</li>
            <li>Editorial workshops, Kampala</li>
            <li>Continuing studies in motion design</li>
          </ul>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
