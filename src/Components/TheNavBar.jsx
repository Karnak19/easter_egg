import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

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
      return (
         <div>
            <Navbar color="dark" dark expand="md">
               <NavbarBrand href="/">Easter Charts</NavbarBrand>
               <NavbarToggler onClick={this.toggle} />
               <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
<<<<<<< HEAD:src/TheNavBar.jsx
=======
               
>>>>>>> 195d3b07ea53ba4089e9f182f8d2d9ee8737d9fb:src/Components/TheNavBar.jsx
                     {/* {this.state.navItems.map((items, i) => {
                        return (
                           <NavItem key={i}>
                              <NavLink tag={Link} to={items.to}>
                                 {items.label}
                              </NavLink>
                           </NavItem>
                        );
                     })} */}
                  </Nav>
               </Collapse>
            </Navbar>
         </div>
      );
   }
}
