import React from "react";
import Logo from "../Logo";
import Section from "./Section";
import Item from "./Item";
import {
  RiPieChart2Line as Pie,
  RiWallet2Line as Money,
  RiLineChartLine as Line,
  RiSettings3Line as Settings,
  RiFireLine as Fire,
} from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Logo />

      <div className="sidebar-container">
        <Section text="General" />
        <Item path="/" name="dashboard" IconComponent={Pie} />
        <Item path="/sales" name="sales" IconComponent={Money} />

        <Section text="Statistics" />
        <Item path="/data" name="data" IconComponent={Line} />
        <Item path="/leads" name="leads" IconComponent={Fire} />

        <Section text="Options & Settings" />
        <Item path="/settings" name="settings" IconComponent={Settings} />
      </div>
    </div>
  );
};

export default Sidebar;
