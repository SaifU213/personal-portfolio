import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { SiDevpost } from "react-icons/si";

const projects = [
  {
    name: "KinderKare",
    description:
      "My capstone project for a daycare management application for owners, parents and staff using the MERN full-stack.",
    image: "/kinderkare.png",
    github: "https://github.com/SaifU213/KinderKare",
    link: "https://github.com/SaifU213/KinderKare",
  },
  {
    name: "Music Database",
    description:
      "A full-stack application using React, Node and MySQL to modify and store music, playlists and albums.",
    image: "/musicdb.png",
    github: "https://github.com/SaifU213/Music-Database",
    link: "https://github.com/SaifU213/Music-Database",
  },
  {
    name: "FaceIT",
    description:
      "A face recognition party game using emojis and Google Cloud's face detection API. Awarded Best Use of Google Cloud at Hack Western 8.",
    image: "/faceit.png",
    github: "https://github.com/LoJJoS",
    devpost: "https://devpost.com/software/faceit-xipj7u",
    link: "https://devpost.com/software/faceit-xipj7u",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-purple-600 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
                    <Link href={project.link}>
                      <img 
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        bg-white
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="md:w-1/2 mt-4">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {project.devpost && (
                        <Link href={project.devpost} target="_blank">
                          <SiDevpost
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
