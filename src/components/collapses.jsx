import React, { useState, useEffect, useRef } from "react";

const CollapseComponent = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const contentRef = useRef(null);
  const contentHeightRef = useRef(0);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (isCollapsed) {
      contentHeightRef.current = contentRef.current;
  
    } else {
      contentHeightRef.current = 0;
    }
  }, [isCollapsed]);

  return (
    <div className={`allcollapse ${isCollapsed ? "" : "open"}`}>
      <button onClick={toggleCollapse} className="collapse-button">
        {title}
        <img
          src="../assets/logo/collapse.arrow.png"
          alt="logo fleche collapse"
          className={`arrow ${isCollapsed ? "" : "rotate"}`}
        />
      </button>
      {!isCollapsed && (
        <div ref={contentRef} className={`collapse-content ${isCollapsed ? `` : `animation`}`}>
          {children}
        </div>
      )}
    </div>
  );
};
export default CollapseComponent;

