"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import About from "./about";
import Getintouch from "./getintouch";
import { TypeAnimation } from "react-type-animation";
import Modal from "./UI Componemts/Modal";
import { Button } from "./ui/button";
import {
  ArrowUpRightFromSquare,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  NotebookTextIcon,
  TwitterIcon,
  Coffee,
  Music,
  MessageCircle,
  Code2,
} from "lucide-react";
import { Badge } from "./ui/badge";
import Card from "./UI Componemts/ProjectCard";
import expData from "./data/ExpData";
import Project from "./data/ProjectData";
import Skills from "./data/SkillsData";
import ExpCard from "./UI Componemts/ExperienceCard";
import { useTheme } from "next-themes";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedBackground from "./AnimatedBackground";
const Home = () => {
  const [Start, setStart] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpen2, setModalOpen2] = useState(false);
  const openModal = () => setModalOpen(true);
  const openModal2 = () => setModalOpen2(true);
  const closeModal = () => setModalOpen(false);
  const closeModal2 = () => setModalOpen2(false);
  const { theme } = useTheme();

  useEffect(() => {}, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStart(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);

  useEffect(() => {
    if (isModalOpen || isModalOpen2) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isModalOpen, isModalOpen2]);

  return (
    <div className="px-8 overflow-hidden lg:w-[750px] lg:m-auto z-[-1]">
      <AnimatedBackground />
      {!Start ? (
        ""
      ) : (
        <>
          {/* ============================== Introduction ============================ */}
          <div id="home" className="flex flex-col pt-[120px]">
            <Image
              data-aos="fade-down"
              // src={`/photo-${theme === "light" ? "light" : "dark"}.jpg`}
              src={`/shiveshnandan.jpg`}
              height={10000}
              width={10000}
              alt={"Profile Photo"}
              className="border rounded-full w-[90px] mb-8 border-[#333] dark:border-white"
            ></Image>
            <div data-aos="fade-right" className="">
              <h1 className="text-3xl font-[700] ">Munkhbat Ganbat</h1>
              <p className="mt-1">
                <TypeAnimation
                  sequence={[
                    "Engineer 🛠",
                    2000,
                    "Fullstack Developer 💻",
                    2000,
                    "Music Lover 🎸",
                    2000,
                    "Coffee monster ☕",
                    2000,
                  ]}
                  wrapper="span"
                  speed={65}
                  deletionSpeed={85}
                  repeat={Infinity}
                />
              </p>
            </div>
            <h1
              data-aos="fade-up"
              className=" pt-6 text-sm text-[#333] dark:text-[#d8d8d8] leading-[21px] "
            >
              Код бичиж байхдаа бүрэн амьдаар мэдэрдэг,
            </h1>
            <h1
              data-aos="fade-up"
              className=" pt-3 text-sm text-[#333] dark:text-[#d8d8d8] leading-[21px]  "
            > 
              Нөгөөх нь ажиллахгүй бол бүрэн сүнсгүй болдог. 👻
            </h1>
            <div
              data-aos="fade-up"
              className="flex mt-3 justify-center flex-wrap"
            >
              <Link href={"https://github.com/MunbaBataa"} target="_blank">
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="dark:bg-[#333] py-4 mx-2 my-1"
                >
                  <GithubIcon className="w-6 px-1" />
                  <p className="font-[500] text-sm tracking-wide">
                    @MunbaBataa
                  </p>
                  <p className=" text-[11px] px-2 text-gray-500 flex pt-1">
                    Github
                  </p>
                  <ArrowUpRightFromSquare className="h-3 w-3 text-gray-500" />
                </Button>
              </Link>
              <Link
                href={"https://linkedin.com/in/munkhbatG"}
                target="_blank"
              >
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="dark:bg-[#333] py-4 mx-2 my-1"
                >
                  <LinkedinIcon className="w-6 px-1" />
                  <p className="font-[500] text-sm tracking-wide">
                    @munkhbatG
                  </p>
                  <p className=" text-[11px] px-2 text-gray-500 flex pt-1">
                    Linkedin
                  </p>
                  <ArrowUpRightFromSquare className="h-3 w-3 text-gray-500" />
                </Button>
              </Link>
              <Link
                href={
                  "https://drive.google.com/file/"
                }
                target="_blank"
              >
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="dark:bg-[#333] py-4 mx-2 my-1"
                >
                  <NotebookTextIcon className="w-6 px-1" />
                  <p className="font-[500] text-sm tracking-wide">
                    Munkhbat Ganbat
                  </p>
                  <p className=" text-[11px] px-2 text-gray-500 flex pt-1">
                    Resume
                  </p>
                  <ArrowUpRightFromSquare className="h-3 w-3 text-gray-500" />
                </Button>
              </Link>
            </div>
          </div>

          {/* ============================== About me ============================ */}

          <div id="about" className=" flex flex-col pt-[14vh]">
            <h1
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-anchor-placement="top-bottom"
              className="text-2xl underline decoration-sky-500 dark:decoration-sky-500/80 underline-offset-[5px] decoration-4 tracking-wide antialiased "
            >
              About Me
            </h1>
            {/* Grandfather's Legacy Section */}
<div
  data-aos="fade-up"
  data-aos-delay="300"
  className="my-6 p-6 rounded-xl border border-sky-500/20 bg-gradient-to-br from-sky-50/50 to-transparent dark:from-sky-950/20"
>
  <div className="flex flex-col md:flex-row gap-6 items-start">
    <div className="flex-shrink-0">
      <Image
        src="/tsendiin-mongol.jpg"
        alt="Цэндийн Монгол"
        width={200}
        height={250}
        className="rounded-lg border-2 border-sky-500/30 shadow-lg"
      />
      <p className="text-xs text-center mt-2 text-gray-600 dark:text-gray-400">
        Цэндийн Монгол (1948–2014)
      </p>
    </div>
    <div className="flex-1">
      <h3 className="text-lg font-bold mb-3 text-sky-600 dark:text-sky-400">
        🎨 Удам ба уран сэтгэмжийн холбоо
      </h3>
      <p className="text-sm leading-relaxed mb-3">
        <strong>Миний өвөө бол Монголын нэртэй зураач{" "}
          <Link
            href="https://mn.wikipedia.org/wiki/%D0%A6%D1%8D%D0%BD%D0%B4%D0%B8%D0%B9%D0%BD_%D0%9C%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB"
            target="_blank"
            className="text-sky-600 dark:text-sky-400 hover:underline"
          >
            Цэндийн Монгол
          </Link>
        .</strong>
      </p>
      <p className="text-sm leading-relaxed mb-3">
        Тэр уран зургийг <em>өнгө, гэрэл, мэдрэмжээр</em> илэрхийлдэг байсан бол,
        би өнөө үед түүний үргэлжлэл болж,
        <strong className="text-sky-600 dark:text-sky-400"> кодоор өнгө, логикоор бүтээл урладаг хүн</strong>.
      </p>
      <p className="text-sm leading-relaxed italic text-gray-700 dark:text-gray-300">
        Миний хувьд программчлал бол бас нэг төрлийн уран зураг —
        ялгаа нь бий болох зүйл нь &quot;application&quot;,
        харин зураас нь &quot;syntax&quot; юм.
      </p>
    </div>
  </div>
</div>

<p
  data-aos="fade-up"
  data-aos-delay="200"
  data-aos-anchor-placement="top-bottom"
  className="my-3 tracking-[0.3px]"
>
  I&apos;m Ganbat Munkhbat, a passionate software engineer who graduated from the Mongolian University of Science and Technology (MUST) in June 2025 with a degree in Software Engineering. With one year of experience as a senior developer, I have a strong background in full-stack development, software architecture, and data analysis.
</p>

{/* Strengths & Working Style */}
{/* Strengths & Working Style */}
{/* Strengths & Working Style */}
<section className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Давуу тал */}
  <div
    data-aos="fade-right"
    data-aos-delay="300"
    className="rounded-lg border border-sky-300 dark:border-sky-700 bg-white dark:bg-gray-900 p-6 shadow-md transition-all hover:shadow-lg"
  >
    <h3 className="text-lg font-bold text-sky-600 dark:text-sky-400 mb-4">💪 Давуу тал</h3>
    <ul className="space-y-3 text-sm text-gray-800 dark:text-gray-200">
      <li>
        <strong className="text-sky-500">Тэвчээртэй:</strong> Би асуудлыг гүнзгий ойлгож, шийдэл олох хүртлээ ухаж судалдаг.
      </li>
      <li>
        <strong className="text-sky-500">Дасан зохицох чадвартай:</strong> Технологи, орчны өөрчлөлтөд хурдан дасан зохицож, үргэлж суралцдаг.
      </li>
      <li>
        <strong className="text-sky-500">Нарийн нягт:</strong> Надад код зөвхөн ажиллах бус, цэвэр, ойлгомжтой байх нь чухал.
      </li>
      <li>
        <strong className="text-sky-500">Сонирхолтой сэтгэдэг:</strong> Систем хөгжүүлэлтийг би уран бүтээл гэж хардаг.
      </li>
    </ul>
  </div>

  {/* Хүмүүстэй харьцах хэлбэр */}
  <div
    data-aos="fade-left"
    data-aos-delay="300"
    className="rounded-lg border border-sky-300 dark:border-sky-700 bg-white dark:bg-gray-900 p-6 shadow-md transition-all hover:shadow-lg"
  >
    <h3 className="text-lg font-bold text-sky-600 dark:text-sky-400 mb-4">🤝 Хүмүүстэй харьцах хэлбэр</h3>
    <div className="space-y-3 text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
      <p>
        Би хүмүүстэй ажиллахдаа дуу багатай ч анхааралтай сонсдог. Хүмүүс миний дэргэд санаа бодлоо тайван, итгэлтэй илэрхийлж чаддаг байхыг хүсдэг.
      </p>
      <p>
        Миний хувьд бусдыг <em className="text-sky-600 dark:text-sky-400">"засах"</em> биш, харин <em className="text-sky-600 dark:text-sky-400">"дэмжих"</em> маягаар хамт ажиллах дуртай.
      </p>
    </div>
    <p className="mt-3 text-sm font-semibold text-sky-600 dark:text-sky-400">
      → Introvert энерги + Team-oriented сэтгэлтэй developer.
    </p>
  </div>
</section>
{/* Weaknesses Reframed as Strengths */}
<section className="my-10">
  <h3
    data-aos="fade-up"
    data-aos-delay="200"
    className="text-xl font-bold text-sky-600 dark:text-sky-400 mb-6 flex items-center gap-2"
  >
    ⚖️ 4. Сул тал
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      {
        title: "Хэт төгс зүйл хийх гээд удах",
        positive: "Төслийн чанарыг илүүд үздэг. Хугацаа ба чанарыг тэнцвэржүүлэх дээр ажиллаж байна.",
      },
      {
        title: "Хааяа бусдаас тусламж гуйхгүй",
        positive: "Өөрөө шийдэх дуртай. Гэхдээ одоо багийн хүчийг илүү үнэлж сурах шатандаа явж байна.",
      },
      {
        title: "Хэт төвлөрөөд орчныг мартдаг",
        positive: "Deep work mode-д ордог — гэхдээ сүүлийн үед time management-д илүү анхаарч байгаа.",
      },
    ].map((item, idx) => (
      <div
        key={idx}
        data-aos="fade-right"
        data-aos-delay={400 + idx * 100}
        className="border border-sky-200 dark:border-sky-700 rounded-lg bg-white dark:bg-gray-900 p-5 shadow-sm hover:shadow-md transition-all"
      >
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
          🌀 {item.title}
        </h4>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <span className="text-sky-600 dark:text-sky-400 font-medium">→</span> {item.positive}
        </p>
      </div>
    ))}
  </div>
</section>


{/* Personality Traits with Tooltips */}
{/* Personality Traits with Tooltips */}
<div
  data-aos="fade-up"
  data-aos-delay="500"
  className="my-6"
>
  <h3 className="text-lg font-semibold text-sky-600 dark:text-sky-400 mb-4">😄 Хувийн зан чанар</h3>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="group relative p-4 border rounded-lg hover:border-sky-500 hover:scale-105 transition-all duration-300 ease-in-out cursor-help shadow-sm hover:shadow-md bg-white/60 dark:bg-sky-900/30 backdrop-blur">
      <Coffee className="w-6 h-6 mb-2 text-sky-500 group-hover:animate-bounce transition-all duration-300" />
      <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">Coffee level</p>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2 whitespace-nowrap">
        Critical dependency.
      </div>
    </div>
    <div className="group relative p-4 border rounded-lg hover:border-sky-500 hover:scale-105 transition-all duration-300 ease-in-out cursor-help shadow-sm hover:shadow-md bg-white/60 dark:bg-sky-900/30 backdrop-blur">
      <Music className="w-6 h-6 mb-2 text-sky-500 group-hover:animate-bounce transition-all duration-300" />
      <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">Music</p>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2 whitespace-nowrap">
        Helps me debug life.
      </div>
    </div>
    <div className="group relative p-4 border rounded-lg hover:border-sky-500 hover:scale-105 transition-all duration-300 ease-in-out cursor-help shadow-sm hover:shadow-md bg-white/60 dark:bg-sky-900/30 backdrop-blur">
      <MessageCircle className="w-6 h-6 mb-2 text-sky-500 group-hover:animate-bounce transition-all duration-300" />
      <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">Communication</p>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2 whitespace-nowrap">
        Quiet thinker, clear talker.
      </div>
    </div>
    <div className="group relative p-4 border rounded-lg hover:border-sky-500 hover:scale-105 transition-all duration-300 ease-in-out cursor-help shadow-sm hover:shadow-md bg-white/60 dark:bg-sky-900/30 backdrop-blur">
      <Code2 className="w-6 h-6 mb-2 text-sky-500 group-hover:animate-bounce transition-all duration-300" />
      <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">Work style</p>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2 whitespace-nowrap">
        Code like an artist, plan like an engineer.
      </div>
    </div>
  </div>
</div>

<div
              data-aos="fade-left"
              data-aos-anchor-placement="top-bottom"
              className="flex antialiased justify-end text-sky-600 dark:text-sky-500 relative font-bold"
            >
              {/* <Button
                onClick={openModal}
                variant={"outline"}
                className="text-sky-600 dark:text-sky-500 font-bold w-fit"
              >
                {" "}
                Read More <ArrowUpRightFromSquare className="mx-2 h-4 w-4" />
              </Button> */}
            </div>

            {isModalOpen && (
              <Modal Heading="About Me" onClose={closeModal}>
                <About />
              </Modal>
            )}
          </div>

          {/* ============================== Skills ============================ */}

          <div id="skills" className="flex flex-col pt-[14vh]">
            <h1
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
              className="text-2xl underline decoration-sky-500 dark:decoration-sky-500/80 underline-offset-[5px] decoration-4 tracking-wide antialiased "
            >
              Skills
            </h1>
            <div className="my-4">
              {Skills.map((skill, index) => (
                <Badge
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  variant="outline"
                  key={index}
                  className="my-1 mx-1 text-[14px]"
                >
                  <Image
                    src={`/Skills/${skill}.png`}
                    alt={`${skill}`}
                    height={18}
                    width={18}
                    className="mr-2"
                  />
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* ============================== Projects ============================ */}

          <div id="projects" className="flex flex-col pt-[14vh]">
            <h1
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
              className="text-2xl underline decoration-sky-500 dark:decoration-sky-500/80 underline-offset-[5px] decoration-4 tracking-wide antialiased "
            >
              Projects
            </h1>
            <div
              // data-aos="fade-up"
              // data-aos-anchor-placement="top-bottom"
              className="my-2 rounded-xl bg"
            >
              {!Start ? (
                "loading"
              ) : (
                <div className="flex justify-around flex-wrap">
                  {Project.slice(0, 3).map((project: any, index: any) => (
                    <div
                      className="flex"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      key={index}
                    >
                      <Card
                        Title={project.heading}
                        Description={project.summary}
                        link={project.link}
                        code={project.code}
                        Img={project.img}
                        techUse={project.tech}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div
              data-aos="fade-left"
              data-aos-anchor-placement="top-bottom"
              className="flex justify-end"
            >
              <Button
                onClick={openModal2}
                variant={"outline"}
                className="text-sky-600 dark:text-sky-500 font-bold w-fit"
              >
                {" "}
                View All Projects{" "}
                <ArrowUpRightFromSquare className="mx-2 h-4 w-4" />
              </Button>
            </div>

            {isModalOpen2 && (
              <Modal Heading="Projects" onClose={closeModal2}>
                <div className="flex flex-wrap">
                  {Project.map((project: any, index: any) => (
                    <Card
                      Title={project.heading}
                      Description={project.summary}
                      link={project.link}
                      code={project.code}
                      Img={project.img}
                      techUse={project.tech}
                      key={index}
                    />
                  ))}
                </div>
              </Modal>
            )}
          </div>

          {/* ============================== Experience ============================ */}

          <div id="experience" className="flex flex-col pt-[14vh]">
            <h1
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
              className="text-2xl underline decoration-sky-500 dark:decoration-sky-500/80 underline-offset-[5px] decoration-4 tracking-wide antialiased "
            >
              Experience
            </h1>
            <div className="my-2 rounded-xl bg">
              <div className="border-l-8 ">
                {!Start
                  ? "loading ! "
                  : expData.map((exp, index) => (
                      <div key={index}>
                        <ExpCard
                          img={`/Experience${exp.img}`}
                          companyName={exp.companyName}
                          role={exp.role}
                          description={exp.description}
                          timePeriod={exp.timePeriod}
                        ></ExpCard>
                      </div>
                    ))}
              </div>
            </div>
          </div>

          {/* ============================== Contact me ============================ */}

          <div id="connect" className="flex flex-col mt-8 ">
            <h1
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
              className="text-2xl underline decoration-sky-500 dark:decoration-sky-500/80 underline-offset-[5px] decoration-4 tracking-wide antialiased "
            >
              Get in Touch
            </h1>
            <p data-aos="fade-right"
              data-aos-anchor-placement="top-bottom" className="mt-3 text-sm">Feel free to reach out to me for any queries or collaborations.</p>
            <Getintouch/>
            <div className="flex flex-col my-2 rounded-xl items-center">
              <h1
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="m-auto my-4 text-center"
              >
              OR 
              </h1>
              <div className="flex">
                <Link href={"https://instagram.com/_munkhbat_"}>
                  <Button
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay="50"
                    size={"icon"}
                    className="mx-1"
                  >
                    <InstagramIcon />
                  </Button>
                </Link>
                <Link href={"https://github.com/munkhbatG"}>
                  <Button
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay="100"
                    size={"icon"}
                    className="mx-1"
                  >
                    {" "}
                    <TwitterIcon />{" "}
                  </Button>
                </Link>
                <Link
                  href={
                    "mailto:munkhnarganbat@gmail.com?subject=Hello%20there&body=How%20are%20you%3F"
                  }
                >
                  <Button
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay="150"
                    size={"icon"}
                    className="mx-1"
                  >
                    {" "}
                    <MailIcon />{" "}
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* ============================== Footer ============================ */}

          <div className="text-sm border-t-2 pt-4 mt-8 text-center dark:text-[#efefef] text-[#333]">
            <h1 className="text-left sm:text-center ">
              Powered by{" "}
              <Link href={"https://nextjs.org"}>
                <span className="text-sky-600 dark:text-sky-500">Next.js</span>
              </Link>{" "}
              and{" "}
              <Link href={"https://tailwindcss.com"}>
                <span className="text-sky-600 dark:text-sky-500">
                  TailwindCSS
                </span>
              </Link>
              . Hosted on{" "}
              <Link href={"https://vercel.com"}>
                <span className="text-sky-600 dark:text-sky-500">Vercel</span>
              </Link>
              .
            </h1>
            <h1 className="mb-6 py-1">
              © 2024 <b className="font-[700] tracking-[1px]">Munkhbat Ganbat</b>
              . All rights reserved.
            </h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
