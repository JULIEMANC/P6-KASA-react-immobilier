import React, { useState, useEffect, useRef } from "react";

const CollapseComponent = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const contentRef = useRef(null);
  const contentHeightRef = useRef(0);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (isCollapsed) {
      contentHeightRef.current = contentRef.current.scrollHeight;
    } else {
      contentHeightRef.current = 0;
    }
  }, [isCollapsed]);

  return (
    <div className="allcollapse">
      <button onClick={toggleCollapse} className="collapse-button">
        <h3>{title}</h3>
        <img
          src="../assets/logo/collapse.arrow.png"
          alt="logo fleche collapse"
          className={`arrow ${isCollapsed ? "up" : "down"}`}
        />
      </button>
      <div ref={contentRef} className={`collapse-content ${isCollapsed ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
};
export default CollapseComponent;