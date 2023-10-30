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
        <img src='../assets/logo/collapse.arrow.png' alt='logo fleche collapse'className={`arrow ${isCollapsed ? '' : 'rotate'}`}/>
        </button>
        {!isCollapsed && <div className="collapse-content"           style={{
            maxHeight: isCollapsed ? 0 : '1000px', 
            transform: isCollapsed ? 'translateY(-100%)' : 'translateY(0)',
            transition: 'max-height 0.9s ease-in-out, transform 0.3s ease-in-out'}}
      >{children}</div>}
</div>
    )
  }
  export default CollapseComponent;

  
  
  