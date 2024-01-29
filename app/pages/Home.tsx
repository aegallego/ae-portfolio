"use client";
import { useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import X from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Project from "../components/Project";
import projects from "../data/projects.js";
import { profile } from "console";
// @ts-ignore

export default function Homepage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isOpen, setOpen] = useState(false);
  const handleMouseMove = (event: any) => {
    setMousePosition({ x: event.pageX, y: event.pageY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const openPdf = () => {
    window.open("/ae-resume.pdf", "_blank");
  };
  const glowStyle = {
    background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, var(--glow-color, rgba(18, 194, 253, 0.15)), transparent 80%)`,
    zIndex: 99999999999,
  };
  const handleScroll = (e: any, id = "") => {
    e.preventDefault();

    if (id) {
      // Scroll to specific section
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <div style={glowStyle}>
      <div className="container lg:flex lg:justify-between lg:gap-4  text-white ">
        <header className=" flex-1 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 py-12 md:py-20">
          <div className="">
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              <a href="/">Aubrey Estacio</a>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              Information Technology
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-slate-400">
              Crafting dreams into Designs.
            </p>

            <small><p className="mt-4 max-w-xs leading-normal text-slate-400">
              aub.estacio@gmail.com
            </p></small>
            <nav className="nav hidden lg:block">
              <ul className="mt-16 w-max">
                <li>
                  <a
                    href="#about"
                    onClick={(e) => handleScroll(e, "")}
                    className="group flex items-center py-3 active"
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                      About
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="#project"
                    className="group flex items-center py-3 active"
                    onClick={(e) => handleScroll(e, "project")}
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                      Project
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <ul className="ml-1 mt-8 flex items-center">

            <li className="mr-5">
              <a
                href="https://www.linkedin.com/in/aubrey-estacio-3809a627b/"
                target="_blank"
                className="block text-slate-400 hover:text-slate-200 transition-all ease"
              >
                <LinkedInIcon />
              </a>
            </li>
          </ul>
        </header>
        <main className="  flex-[1] flex flex-col pt-1 lg:w-1/2 lg:py-24 xs:py-12  md:py-5 min-h-screen text-opacity-80">
          <p id="about">
          Passionate IT enthusiast aspiring to be a designer. 
          Aubrey Estacio is on a journey to blend technology with creativity, 
          shaping a unique path in the world of design.
            <br />
            <br />
          reads books, loves arts and crafts, and plays string instruments.<br />
            <br />
            Below are my projects I have developed over the years, excluding
            "learning" projects from resources on the web .
          </p>

          <button
            onClick={openPdf}
            className="w-fit outline outline-1 outline-teal-400 p-2 px-4 mt-10 hover:text-teal-400  rounded-5xl text-sm"
          >
            View Full Résumé
          </button>
          <div id="project" className="flex flex-col mt-12">
            {projects.map((project) => (
              <Project
                key={project.id}
                name={project.name}
                desc={project.desc}
                date={project.date}
                thumbnail={project.thumbnail}
                website_link={project.website_link}
                video_demo_link={project.video_demo_link}
                tech_used={project.tech_used}
                thumbnail2={project.thumbnail2}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
