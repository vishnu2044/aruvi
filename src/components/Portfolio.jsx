import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";
import projects from "../data/projects";
import useReveal from "../hooks/useReveal";

export default function Portfolio() {
  const headerRef = useReveal();

  // Show max 3 on home page
  const preview = projects.slice(0, 3);

  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        {/* Header with inline "View All" link */}
        <div className="section-header-row reveal" ref={headerRef}>
          <div>
            <span className="section-label">Portfolio</span>
            <h2 className="section-title">Our Work</h2>
          </div>
          <Link to="/work" className="section-header-link">
            View all work <HiArrowUpRight />
          </Link>
        </div>

        <div className="portfolio-home-grid" style={{ marginTop: '40px' }}>
          {preview.map((project, i) => (
            <HomeProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeProjectCard({ project, index }) {
  const ref = useReveal();

  return (
    <article className="home-project-card reveal" ref={ref}>
      <div 
        className="home-project-card-image"
        style={{ backgroundColor: `${project.color}15` }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} — ${project.category} website`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div
            className="project-placeholder"
            style={{
              background: `linear-gradient(135deg, ${project.color}22, ${project.color}08)`,
            }}
          >
            <div className="project-placeholder-mockup">
              <div className="project-placeholder-toolbar">
                <span className="project-placeholder-toolbar-dot"></span>
                <span className="project-placeholder-toolbar-dot"></span>
                <span className="project-placeholder-toolbar-dot"></span>
              </div>
              <div className="project-placeholder-content">
                <div className="project-placeholder-bar" style={{ background: `${project.color}33` }}></div>
                <div className="project-placeholder-bar" style={{ background: `${project.color}22` }}></div>
                <div className="project-placeholder-bar" style={{ background: `${project.color}18` }}></div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="home-project-card-info">
        <div className="work-detail-card-meta">
          <span className="project-card-category">{project.category}</span>
        </div>
        
        <h3 className="home-project-card-title">{project.title}</h3>
        
        <Link
          to="/work"
          className="home-project-card-link"
          aria-label={`View ${project.title} details`}
        >
          View Details <HiArrowUpRight />
        </Link>
      </div>
    </article>
  );
}
