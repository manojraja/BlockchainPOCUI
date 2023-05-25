import * as React from 'react';
import Header from '../Header'
import Style from './layout.module.css'

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function Layout(props) {
 

  return (
    <div className={"d-flex flex-column h-100 scrollbar"}>
    <Header/>
    <div className={[Style.mainLayout, "mt-auto"].join(" ")}>
      <div class={Style.header}>
      </div>
      <h5 className={[Style.bordertitle, "mt-4"].join(" ")}>Certificate Portal</h5>

  </div>
  </div>
  );
}



export default Layout;