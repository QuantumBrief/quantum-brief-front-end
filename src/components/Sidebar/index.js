import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="ourmission" onClick={toggle}>
            Our Mission
          </SidebarLink>
          <SidebarLink to="aboutus" onClick={toggle}>
            About us
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Audit Process
          </SidebarLink>
          <SideBtnWrap>
          <SidebarRoute to={{ pathname: "https://tally.so/r/waQ97v" }} target="_blank" onClick={toggle}>
            Request a Quote
          </SidebarRoute>
        </SideBtnWrap>
        </SidebarMenu>
      </SidebarWrapper>
      
    </SidebarContainer>
  );
}

export default Sidebar;
