// ** Custom Menu Components
// import VerticalNavLink from './VerticalNavLink'
// import VerticalNavSectionTitle from './VerticalNavSectionTitle'

// const resolveNavItemComponent = item => {
//   if (item.sectionTitle) return VerticalNavSectionTitle

//   return VerticalNavLink
// }

// const VerticalNavItems = props => {
//   // ** Props
//   const { verticalNavItems } = props

//   const RenderMenuItems = verticalNavItems?.map((item, index) => {
//     const TagName = resolveNavItemComponent(item)

//     return <TagName {...props} key={index} item={item} />
//   })

//   return <>{RenderMenuItems}</>
// }

// export default VerticalNavItems

import React, { useState } from "react";
import VerticalNavLink from "./VerticalNavLink";
import VerticalNavSectionTitle from "./VerticalNavSectionTitle";
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ListItemIcon from "@mui/material/ListItemIcon";

const resolveNavItemComponent = (item) => {
  if (item.sectionTitle) return VerticalNavSectionTitle;
  return VerticalNavLink;
};

const VerticalNavItems = (props) => {
  const [isOpen, setIsOpen] = useState({
    Dashboards: false,
    Invoice: false,
  });

  const toggleSection = section => {
    setIsOpen(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const { verticalNavItems } = props;

  const RenderMenuItems = verticalNavItems?.map((item, index) => {
    const isDashboard = item.title === "Dashboard";

    if (item.children) {
      return (
        <React.Fragment key={index}>
          <ListItem button onClick={() => toggleSection(item.title)}>
            {item.icon && (
              <ListItemIcon sx={{ ml: "17px" }}>
                <item.icon />
              </ListItemIcon>
            )}
            <ListItemText
              primary={item.title}
              sx={{ ...(item.title === "Dashboards" && { ml: "3px" }) }}
            />
            {isOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            {item.children.map((child, childIndex) => {
              const ChildTagName = resolveNavItemComponent(child);
              return <ChildTagName {...props} key={childIndex} item={child} />;
            })}
          </Collapse>
        </React.Fragment>
      );
    } else {
      const TagName = resolveNavItemComponent(item);
      return <TagName {...props} key={index} item={item} />;
    }
  });

  return <>{RenderMenuItems}</>;
};

export default VerticalNavItems;
