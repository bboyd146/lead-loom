import * as Icons from 'react-feather';

export const FeatherIcon = ({ name, size = 20, color = "currentColor", ...props }) => {
  // Convert name to PascalCase (e.g., 'twitter' -> 'Twitter')
  const iconName = name.charAt(0).toUpperCase() + name.slice(1);
  const IconComponent = Icons[iconName];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in react-feather`);
    return null;
  }
  
  return <IconComponent size={size} color={color} {...props} />;
};