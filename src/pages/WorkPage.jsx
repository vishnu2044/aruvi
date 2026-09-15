import { useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiArrowUpRight, HiCheckBadge, HiOutlineViewColumns, HiOutlineListBullet } from "react-icons/hi2";
import { HiOutlineUserGroup } from "react-icons/hi2";
import projects from "../data/projects";
import useReveal from "../hooks/useReveal";

export default function WorkPage() {
  const headerRef = useReveal();
  const [viewMode, setViewMode] = useState("list");
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <Link to="/" className="page-back-link">
            <HiArrowLeft /> Back to Home
          </Link>
          <div className="page-hero-content reveal" ref={headerRef}>
            <span className="section-label">Archive &bull; Our Work</span>
            <h1 className="page-hero-title" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)' }}>Our Work</h1>
            <p className="page-hero-subtitle" style={{ maxWidth: '700px', fontSize: '1.1rem' }}>
              A deliberate curation of flagship e-commerce platforms, premium property listings, and dynamic hospitality interfaces built for modern digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <div className="container">
          
          {/* Toolbar */}
          <div className="work-toolbar">
            <div className="work-filters desktop-only">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  className={`work-filter-btn ${filter === cat ? "active" : ""}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat === "All" ? `All (${projects.length})` : cat}
                </button>
              ))}
            </div>

            <div className="work-filters-mobile mobile-only">
              <select 
                className="work-filter-select" 
                value={filter} 
                onChange={(e) => setFilter(e.target.value)}
                aria-label="Filter projects"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === "All" ? `All (${projects.length})` : cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="work-view-toggle">
              <button 
                className={`work-view-btn ${viewMode === "list" ? "active" : ""}`}
                onClick={() => setViewMode("list")}
                aria-label="List View"
              >
                <HiOutlineListBullet size={20} />
              </button>
              <button 
                className={`work-view-btn ${viewMode === "grid" ? "active" : ""}`}
                onClick={() => setViewMode("grid")}
                aria-label="Grid View"
              >
                <HiOutlineViewColumns size={20} />
              </button>
            </div>
          </div>

          {viewMode === "list" ? (
            <div className="work-page-list">
              {filteredProjects.map((project, i) => (
                <WorkCard key={project.id} project={project} index={i} />
              ))}
            </div>
          ) : (
            <div className="work-page-grid">
              {filteredProjects.map((project) => (
                <GridCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="page-cta-section">
        <div className="container">
          <div className="page-cta-box">
            <h2>Want your project featured here?</h2>
            <p>Let's build something worth showing off.</p>
            <Link to="/contact" className="btn btn-primary">
              Start a Project <HiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function WorkCard({ project, index }) {
  const ref = useReveal();
  const isEven = index % 2 === 0;

  return (
    <article
      className={`work-detail-card reveal${isEven ? "" : " work-detail-card--reversed"}`}
      ref={ref}
    >
      {/* Image */}
      <div 
        className="work-detail-card-image"
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

      {/* Info */}
      <div className="work-detail-card-info">
        <div className="work-detail-card-meta">
          <span className="work-detail-card-number">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="work-detail-card-divider">—</span>
          <span className="project-card-category">{project.category}</span>
        </div>

        <h2 className="work-detail-card-title">{project.title}</h2>

        {/* Target client */}
        {project.targetClient && (
          <div className="work-detail-client">
            <HiOutlineUserGroup aria-hidden="true" />
            <span>{project.targetClient}</span>
          </div>
        )}

        {/* About the project */}
        {project.about && (
          <p className="work-detail-about">{project.about}</p>
        )}

        {/* Specialties */}
        {project.specialties && project.specialties.length > 0 && (
          <div className="work-detail-specialties">
            <p className="work-detail-specialties-label">Key specialties</p>
            <div className="work-detail-specialties-list">
              {project.specialties.map((s) => (
                <span key={s} className="work-detail-specialty">
                  <HiCheckBadge aria-hidden="true" />
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <a
          href={project.url}
          className="btn btn-primary work-detail-cta"
          target={project.url !== "#" ? "_blank" : undefined}
          rel={project.url !== "#" ? "noopener noreferrer" : undefined}
          aria-label={`View ${project.title} live site`}
        >
          View Live Site <HiArrowUpRight />
        </a>
      </div>
    </article>
  );
}

function GridCard({ project }) {
  const ref = useReveal();

  return (
    <article className="work-page-card reveal" ref={ref}>
      <div 
        className="work-page-card-image"
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
      <div className="work-page-card-info">
        <span className="project-card-category">{project.category}</span>
        <h3 className="home-project-card-title">{project.title}</h3>
        <a
          href={project.url}
          className="home-project-card-link"
          target={project.url !== "#" ? "_blank" : undefined}
          rel={project.url !== "#" ? "noopener noreferrer" : undefined}
          aria-label={`View ${project.title} project`}
        >
          View Live Site <HiArrowUpRight />
        </a>
      </div>
    </article>
  );
}
