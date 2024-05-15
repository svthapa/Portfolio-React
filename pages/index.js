import Head from "next/head";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFillMoonStarsFill, BsMailbox2 } from "react-icons/bs";
import { useState } from "react";
import sam from "../public/sam.jpg";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/recommend.png";
import web2 from "../public/causal.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Portofolio website </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="/resume.docx"
                  download
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Samrajya Thapa
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Machine Learning | Data Science | Software Engineering
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Graduate Student @ Iowa State University
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                href="https://www.linkedin.com/in/svthapa/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/svthapa"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={sam} layout="fill" objectFit="cover" alt="sam"/>
            </div>
          </div>
        </section>

        <section className="py-10">
          {/* <div>
            <h3 className="text-3xl py-1 dark:text-white ">About Me </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"></p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"></p>
          </div> */}
          <div className="bg-gray-100 dark:bg-gray-800 p-10 rounded-lg shadow-lg">
            <h3 className="text-3xl py-1 dark:text-white">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Hi, I&apos;m Samrajya Thapa, I earned my Masters Degree from Iowa State University in Computer Science. My thesis is on Multimodality Pretraining in Medical Domain. I did my undergrad in The University of Mississippi- Ole Miss in Bachelor of Computer Science Emphasis on Data Science. 
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I have experience working on various projects that involve developing machine learning models, analyzing data to extract actionable insights, and creating robust software applications. My technical skills include proficiency in programming languages such as Python, JavaScript, Java, C/C++. I am proficient in Pytorch and Pytorch Lightning, but have also used Tensorflow and Keras in the past for Machine learning development. 
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Apart from my technical pursuits, I enjoy participating in marathons, and triathlons. The discipline and perseverance required for these races have greatly influenced my approach to tackling challenges in my professional life.
            </p>
          </div>
        </section>
        <section className="py-10">
          <div className="bg-gray-100 dark:bg-gray-800 p-10 rounded-lg shadow-lg">
            <h3 className="text-3xl py-1 dark:text-white">Research and Interests</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              My research assistant role at Iowa State led me to conduct novel research in Mulitmodality and Pretraining in Medical Domain, where I implemented a novel tri-modal pretraining framework with state-of-art Vision Transformer
              and Large Language Models like Bert, Llama.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              The research paper is currently under review in a prestigious conference.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              My interests are exploring applications in various fields like computer vision and medical domain with current state of the art deep learning models and find novelty that can bring useful contributions to the field.
            </p>
          </div>
        </section>
        <section className="py-10">
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <h3 className="text-3xl py-1 dark:text-white">Projects:</h3>
            <div className="basis-1/3 flex-1 relative">
              <a href="https://github.com/svthapa/Movie-Recommendation-System" target="_blank" rel="noreferrer">
              <div className="absolute inset-x-0 top-0 bg-gray-800 bg-opacity-75 text-white text-center py-2 rounded-t-lg">
                Movie Recommendation System
              </div>
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web1}
                  objectFit="contain"
                  alt="recommendation system"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1 relative">
              <a href="https://github.com/svthapa/Causal-CXR" target="_blank" rel="noreferrer">
              <div className="absolute inset-x-0 top-0 bg-gray-800 bg-opacity-75 text-white text-center py-2 rounded-t-lg">
                Causal Disentaglement in Xray Images
              </div>
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web2}
                  objectFit="contain"
                  alt="causal"
                />
              </a>
            </div>
            {/* <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div> */}
          </div>
        </section>
        <section>
          {/* for contact details  */}
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">
              Contact Information:
            </h3>

            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                href="https://www.linkedin.com/in/svthapa/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/svthapa"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
              <a
                href="mailto:samrajyathapa123@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <BsMailbox2 />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
