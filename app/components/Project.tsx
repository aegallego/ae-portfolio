import React, { useState } from "react";
import Image from "next/image";
//@ts-ignore
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";
interface ProjectProps {
  name: string;
  desc: string;
  date: string;
  thumbnail: string;
  website_link: string;
  video_demo_link: string;
  tech_used: string[];
  thumbnail2: string;
}

const Project: React.FC<ProjectProps> = ({
  name,
  desc,
  date,
  thumbnail,
  website_link,
  video_demo_link,
  tech_used,
  thumbnail2,
}) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="w-full border border-white border-opacity-10 rounded-lg p-4 mb-6">
      <a
        href={website_link}
        target="_blank"
        className="flex text-lg font-medium leading-tight text-slate-200 hover:text-teal-300 cursor-pointer"
      >
        {name}
        {website_link !== "" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="ml-2 w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        )}
      </a>
      <span className="text-xs text-slate-300 ">{date}</span>
      <p className="text-sm text-slate-400 leading-normal mb-5 mt-4">
        {desc.split("\n")}
      </p>
      <div className="relative group">
      {thumbnail2 === "" ? (
          <>
            <Image src={thumbnail} alt="Project1" width={800} height={300} />
          </>
        ) : (
          <div className="relative w-800 h-300">
            <Image
              src={thumbnail}
              alt="Project1"
              width={800}
              height={300}
              className="transition-opacity duration-300 ease-in-out group-hover:opacity-0"
            />
            <Image
              src={thumbnail2}
              alt="Project2"
              width={800}
              height={300}
              className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
            />
          </div>
        )}

        <div className="flex absolute bottom-2 right-2 gap-2 z-50 ">
          <ModalVideo
            channel="youtube"
            youtube={{ mute: 1, autoplay: 1 }}
            isOpen={isOpen}
            videoId={video_demo_link}
            onClose={() => setOpen(false)}
          />
          <h3
            onClick={() => setOpen(true)}
            className="cursor-pointer text-white transition-all duration-300 ease-in-out hover:text-teal-300 font-medium text-sm border border-white border-opacity-20 p-2 rounded-md px-4  bg-black bg-opacity-60"
          >
            Watch Demo
          </h3>
          {website_link !== "" && (
            <a
              href={website_link}
              target="_blank"
              className="cursor-pointer text-white transition-all duration-300 ease-in-out hover:text-teal-300 font-medium text-sm border border-white border-opacity-20 p-2 rounded-md px-4 bg-black bg-opacity-60"
            >
              Go to{" "}
              {name === "Youtube Info Grabber Extension"
                ? "Extension"
                : "Website"}
            </a>
          )}
        </div>
      </div>
      <div className="">
        <ul className="mt-2 flex ">
          <li className="mr-1.5 mt-2 flex gap-2 flex-wrap">
            {tech_used.map((tech, index) => (
              <div
                key={index}
                className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 "
              >
                {tech}
              </div>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
