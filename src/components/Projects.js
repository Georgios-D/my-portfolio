import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
    return (
        <section id="projects" className="text-gray-400 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Apps I've Built
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Here are some apps I've built in the past that portray
                        my experiences and my immense room to grow further as a
                        developer! View at your leisure.
                    </p>
                </div>
                <div className="flex xl:flex-row sm:flex-col sm:items-center -m-4 justify-center">
                    {projects.map((project) => (
                        <div
                            onClick={() => {
                                //redirect to project.link
                                window.location.href = project.link;
                            }}
                            className="flex flex-col items-center justify-center p-4 cursor-pointer relative"
                        >
                            <img
                                src={project.image}
                                alt="project"
                                className="w-80 h-80 object-fill rounded-lg shadow-md"
                            />
                            <div className="flex flex-col items-center justify-center p-4 absolute opacity-0 hover:opacity-90 bg-gray-900 h-full border-4 border-gray-800">
                                <a href={project.githublink1}>
                                    <img
                                        alt="Icon"
                                        className="w-6 h-6 cursor-pointer transform transition duration-500 hover:scale-110"
                                        src={project.github1}
                                    />
                                </a>
                                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                    {project.subtitle}
                                </h2>
                                <h1 className="text-font text-lg font-medium">
                                    {project.title}
                                </h1>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
