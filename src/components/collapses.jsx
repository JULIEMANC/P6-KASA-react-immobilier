import React, { useState } from 'react';

function CollapseComponent({ title, content }) {
    const [isCollapsed, setIsCollapsed] = useState(true);
  
    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };
  
    return (
      <div className="allcollapse">
        <button onClick={toggleCollapse} className="collapse-button">
          {title}
        <img src='./assets/logo/collapse.arrow.png' alt='logo fleche collapse'className='arrow'/>
        </button>
        {!isCollapsed && <div className="collapse-content">{content}</div>}
      </div>
    );
  }

  
  export default CollapseComponent;

  
  
  