import PropTypes from "prop-types";

const ProjectCard = ({
    imgSrc,
    title,
    tags,
    projectLink,
    classes
}) => {
  return (
    <div className={"relative p-4 rounded-2xl flex flex-col gap-4 bg-zinc-800 hover:bg-zinc-500 ring-1 ring-zinc-50/5 ring-inset transition-colors" + classes}>
        <figure className="img-box aspect-square rounded-lg mb-4">
            <img src={imgSrc} alt={title} loading='lazy' className="img-cover" />
        </figure>

        <div className="flex items-center justify-between gap-4">
            <div>
                <h3 className="title-1 mb-3">
                    {title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 ">
                    {tags.map((label, key) => (
                        <span key={key} className="h-8 text-sm px-3 rounded-full bg-zinc-700 text-zinc-200 flex  items-center gap-1 ">
                            {label}
                        </span>
                    ))}
                </div>
            </div>

            <div className="w-11 h-11 grid  place-items-center justify-center rounded-full bg-zinc-700 hover:bg-zinc-900 transition-colors text-zinc-100">
                <span className="material-symbols-rounded" aria-hidden="true">arrow_outward</span>
            </div>
        </div>

        <a href={projectLink} target="_blank" rel="noopener noreferrer" className="absolute inset-0">
            
        </a>
    </div>
  )
}

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectLink: PropTypes.string,
    classes: PropTypes.string
}

export default ProjectCard