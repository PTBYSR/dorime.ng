import React from 'react'

interface SidebarLinkProps {
  text: string;
  active?: unknown;
  Icon: React.ElementType;
}

function SidebarLink({text, Icon, active}:SidebarLinkProps) {
  return (
    <div 
      className={`text-[#000000] flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${
      active && "font-bold"
    }`}>
      <Icon className="h-7" />
      <span className="hidden xl:inline">{text}</span>
    </div>
  )
}

export default SidebarLink;