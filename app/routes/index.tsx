import { ProjectCard } from "~/components/ProjectCard";
import CrappyBirds from "~/images/project-crappybirds.png";
import Kryxivia from "~/images/project-kryxivia.png";
import GlqMarket from "~/images/project-graphlinq-marketplace.png";
import GlqInterface from "~/images/project-graphlinq-interface.png";
import Glq from "~/images/project-graphlinq.png";
import AtelierTs from "~/images/project-atelier-ts.png";

const projects = [
    {
        id: 1,
        title: "Crappy Birds",
        description: "Founder of Crappy Birds, a Fun & Social MMO leveraging NFTs.",
        image: CrappyBirds,
        website: "https://www.crappybirds.io/",
        github: "https://github.com/Crappy-Birds",
    },
    {
        id: 2,
        title: "Kryxivia",
        description: "Making of the Kryxivia Staking application.",
        image: Kryxivia,
        website: "https://kryxivia.io/",
        github: "https://github.com/Kryxivia/Kryxivia.WebAppInterface",
    },
    {
        id: 3,
        title: "GraphLinq Marketplace",
        description: "Making of the whole Marketplace frontend and web3 integration.",
        image: GlqMarket,
        website: "https://marketplace.graphlinq.io/",
        github: "https://github.com/GraphLinq/GraphLinq.Marketplace",
    },
    {
        id: 4,
        title: "GraphLinq Interface",
        description: "Making of the application dashboard frontend, web3 integration and all present features.",
        image: GlqInterface,
        website: "https://app.graphlinq.io/",
        github: "https://github.com/GraphLinq/GraphLinq.AppInterface",
    },
    {
        id: 5,
        title: "GraphLinq",
        description: "Making of the Landing page in collaboration with a designer. Wireframing, copywriting & i18n system.",
        image: Glq,
        website: "https://graphlinq.io/",
    },
    {
        id: 6,
        title: "Atelier-TS",
        description: "Making of a Landing page for an industrial pipefitter and welder, aiming to bring more qualified customers.",
        image: AtelierTs,
        website: "https://atelier-ts.com/",
    },
];

export default function Index() {
    return (
        <main className="max-w-5xl p-4 mx-auto">
            <section className="my-8">
                <h1 className="mb-4 text-5xl font-extrabold bg-clip-text ">Hello, I'm Hugo Malatrait</h1>
                <p className="text-lg text-zinc-200">
                    I am passionate about computer sciences innovation, and always up for learning and building new things.<br />
                    I have experience in domains like web development, game design, game development, cloud computing, blockchains and decentralization.
                </p>
            </section>
            <section className="my-8">
                <h2 className="mb-4 text-3xl font-bold">Latest projects</h2>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard
                            key={`${project.id}-${project.title}`}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            website={project.website}
                            github={project.github}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
