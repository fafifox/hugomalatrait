import React from "react";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    website?: string;
    github?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
    return (
        <div className="flex flex-col p-4 transition duration-500 ease-in-out border-2 shadow-lg lg:max-w-lg md:p-3 md:justify-start bg-zinc-800 text-zinc-50 border-zinc-700 rounded-3xl md:flex-row hover:border-zinc-600">
            <img src={props.image} className={`object-cover bg-center md:mr-3 h-[168px] md:w-[168px] rounded-2xl`} alt="" />
            <div className="flex flex-col justify-between mt-3 md:mt-0">
                <h3 className="text-xl font-medium">{props.title}</h3>
                <p className="text-base font-normal text-zinc-400">{props.description}</p>
                <div className="space-x-3">
                    {props.website && (
                        <a
                            href={props.website}
                            className="inline-flex items-center h-6 mb-2 text-sm font-normal leading-none transition duration-500 ease-in-out transform text-zinc-200 hover:text-zinc-400"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-full h-full"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                />
                            </svg>
                        </a>
                    )}
                    {props.github && (
                        <a
                            href={props.github}
                            className="inline-flex items-center h-6 mb-2 text-sm font-normal leading-none transition duration-500 ease-in-out transform text-zinc-200 hover:text-zinc-400"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg className="w-full h-full" fill="currentColor" role="img" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
                                <title>GitHub icon</title>
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
