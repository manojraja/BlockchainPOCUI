import * as React from 'react';
import Header from '../Header'
import Style from './layout.module.css'
import Form from '../Form/Form'

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function Layout(props) {
 console.log("props",props)

  return (
    <div className={"d-flex flex-column h-100 scrollbar"}>
    <Header/>
    <div >
      <div class={Style.header}>
      <h5 className={Style.bordertitle}>Certificate Portal</h5>
      </div>
      {props.page!="NoForm"?<Form />:<></>}
      
  </div>
  </div>
  );
}



export default Layout;