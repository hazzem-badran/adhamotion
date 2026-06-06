import { PROJECTS } from "../../../constants/projects";
import { useEffect, useState } from "react";

const Projects = () => {
  const [loadedImages, setLoadedImages] = useState(new Set());

  const handleImageLoad = (index) => {
    setLoadedImages(prev => new Set([...prev, index]));
  };

  useEffect(() => {
  // تحميل مسبق للصور
  PROJECTS.forEach((project) => {
    const img = new Image();
    img.src = project.image;
  });
}, []);

  return (
    <div className="tab-content active" id="projects">
      <div className="projects-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        padding: '20px 0'
      }}>
        {PROJECTS.map((project, index) => (
          <div 
            key={index}
            className="project-card"
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onClick={() => window.open(project.link.href, '_blank')}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
            <div style={{
              width: '100%',
              height: '250px',
              backgroundColor: '#f3f4f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              {!loadedImages.has(index) && (
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: '#9ca3af',
                  fontSize: '14px'
                }}>
                  Loading...
                </div>
              )}
              <img 
                src={project.image}
                alt={project.title}
                loading="lazy"
                onLoad={() => handleImageLoad(index)}
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  opacity: loadedImages.has(index) ? 1 : 0,
                  transition: 'opacity 0.3s ease'
                }}
              />
            </div>
            <div style={{
              padding: '15px'
            }}>
              <h3 style={{
                margin: '0 0 8px 0',
                fontSize: '18px',
                fontWeight: '600',
                color: '#1f2937'
              }}>
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
