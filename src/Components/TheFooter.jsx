import React from "react";
import { Link } from "react-router-dom";
import { Row } from "reactstrap";

import styles from "./TheFooter.module.css";
class TheFooter extends React.Component {
   constructor(props) {
      super(props);
      this.state = { footItems: this.props.items() };
   }

   render() {
      return (
         <Row>
            <footer className={styles.footer}>
               <ul className={styles.copyright}>
                  <li>
                     <a style={{ color: "white" }} href={this.state.footItems[0].to}>
                        {this.state.footItems[0].label}
                     </a>
                  </li>
                  <li>
                     <Link style={{ color: "white" }} to={this.state.footItems[1].to}>
                        {this.state.footItems[1].label}
                     </Link>
                  </li>
               </ul>
            </footer>
         </Row>
      );
   }
}

export default TheFooter;
