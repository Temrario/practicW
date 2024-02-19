import React, { useState } from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';


const ExperienceItem = ({ title, description }) => {
    const [expanded, setExpanded] = useState(false);
    
    const handleToggle = () => {
        setExpanded(!expanded);
      };

      return (
        <div className="experience_history_item">
          <div className="experience_history_title_box" onClick={handleToggle}>
            <div className="experience_history_title">{title}</div>
            <div className={`plus_div ${expanded ? 'expanded' : ''}`}></div>
          </div>
          {expanded && (
            <div className={`experience_history_underTitle ${expanded ? 'expanded' : ''}`}>
              <strong>2019 - present</strong><br />
              {description}
            </div>
          )}
        </div>
      );
    };
  
  const Experience = () => {
    return (
      <div className="experience_divBlock">
        <div className="experience_content">
          <div className="experience_title">Experience</div>
          <div className="palka"></div>
          <div className="experience_history_box">
            <ExperienceItem
              title="Team Leader"
              description="Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu. Vitae faucibus diam consequat maecenas. Turpis metus sit diam purus leo in varius ac quam. Nunc amet tristique volutpat adipiscing vulputate phasellus. Volutpat faucibus praesent ac lobortis aliquam dolor."
            />
            <ExperienceItem
              title="Product Designer"
              description="Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu. Vitae faucibus diam consequat maecenas. Turpis metus sit diam purus leo in varius ac quam. Nunc amet tristique volutpat adipiscing vulputate phasellus. Volutpat faucibus praesent ac lobortis aliquam dolor."
            />
            <ExperienceItem
              title="Senior UX Designer"
              description="Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu. Vitae faucibus diam consequat maecenas. Turpis metus sit diam purus leo in varius ac quam. Nunc amet tristique volutpat adipiscing vulputate phasellus. Volutpat faucibus praesent ac lobortis aliquam dolor."
            />
            <ExperienceItem
              title="UX Designer"
              description="Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu. Vitae faucibus diam consequat maecenas. Turpis metus sit diam purus leo in varius ac quam. Nunc amet tristique volutpat adipiscing vulputate phasellus. Volutpat faucibus praesent ac lobortis aliquam dolor."
            />
            <ExperienceItem
              title="Junior Designer"
              description="Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu. Vitae faucibus diam consequat maecenas. Turpis metus sit diam purus leo in varius ac quam. Nunc amet tristique volutpat adipiscing vulputate phasellus. Volutpat faucibus praesent ac lobortis aliquam dolor."
            />
          </div>
        </div>
      </div>
    );
  };

  const root = createRoot(document.getElementById('experience'));
  root.render(<Experience />);


  const PreviewContent = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true); // Встановлюємо стан наведення на true
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false); // Встановлюємо стан наведення на false
      };
  
      return (
        <div className="preview_content">
          <div className="preview_titlebox">
            <div className="preview_title">Hello<br />I’m John<br />Doe</div>
            <div className="preview_underTitle">A full stack allaround designer that tristique est placerat in massa <span className="highlight">consectetur quisque</span> lobortis Vitae faucibus diam consequat maecenas turpis.</div>
          </div>
          <div className={`photo_img ${isHovered ? 'hovered' : ''}`}>
            <img
              src="./img/photo.png"
              alt="photo"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        </div>
      );
    };

  const prev = createRoot(document.getElementById('preview_content'));
  prev.render(<PreviewContent />);  


  