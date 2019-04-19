import React from "react";
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

import logo from "../wild.jpg";

export default class TheNavbar extends React.Component {
   constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
         isOpen: false,
         navItems: this.props.items()
      };
   }
   toggle() {
      this.setState({
         isOpen: !this.state.isOpen
      });
   }
   render() {
      if (this.state.switch == true) {
         {
            this.props.items();
         }
      }
      return (
         <div>
            <Navbar color="dark" dark expand="md">
               <NavbarBrand tag={Link} to={"/"} style={{ margin: 0, padding: 0 }}>
                  <img src={logo} style={{ maxHeight: 50, marginRight: 15 }} />
                  Home
               </NavbarBrand>
               <NavbarToggler onClick={this.toggle} />
               <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                     {this.state.navItems.map((items, i) => {
                        return (
                           <NavItem key={i}>
                              <NavLink tag={Link} to={items.to}>
                                 {items.label}
                              </NavLink>
                           </NavItem>
                        );
                     })}
                  </Nav>
               </Collapse>
            </Navbar>
         </div>
      );
   }
}
