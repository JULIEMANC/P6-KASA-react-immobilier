import React, {  useState } from 'react';

const CollapseComponent=({ title, children })=> {
    const [isCollapsed, setIsCollapsed] = useState(true);
   
    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed); 
    };

    return (
      <div className={`allcollapse ${isCollapsed ?``:`open`}`}>
        <button onClick={toggleCollapse} className="collapse-button">
          {title}
        <img src='../assets/logo/collapse.arrow.png' 
        alt='logo fleche collapse'
        className={`arrow ${isCollapsed ? '' : 'rotate'}`}/>
        </button>
        {!isCollapsed && 
        <div className={`collapse-content ${isCollapsed ?``: `animation`}`} >
          {children}
          </div>}
</div>
    )
  }
  export default CollapseComponent;

  
  
  