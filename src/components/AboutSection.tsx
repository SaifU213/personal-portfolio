import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "Java" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "MySQL" },
  { skill: "MongoDB" },
  { skill: "GCP" },
  { skill: "Jira" },
  { skill: "Ubuntu" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-purple-600 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>

            <p>
              I graduated from
              <span className="font-bold">{" Western University "}</span>
              in 2023 with a<span className="font-bold">{" BASc "}</span>in
              <span className="font-bold">{" Software Engineering"}</span>.
            </p>
            <br />
            <p>
              I am a <span className="font-bold">{"highly inquisitive"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer.
              I have a passion for creating innovative and user-friendly
              solutions through cutting-edge technologies.
            </p>
            <br />
            <p>
              I am constantly seeking new experiences and love to keep myself
              engaged by learning new things. In my free time I like to work
              out, cook, and play videogames!
            </p>
            <br />
            <p>
              I am currently seeking full-time opportunities  in{" "}
              <span className="font-bold">{" frontend"}</span>,
              <span className="font-bold">{" backend "}</span> or
              <span className="font-bold">{" full-stack "}</span>development.
            </p>
            <br />
            <p>
              {/* I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, 
              I am excited to see where my career takes me and am always open to
              new opportunities. 🙂*/}
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            {/* <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
