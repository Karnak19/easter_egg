import React, { Component } from "react";
import Particles from "react-particles-js";

class Particle extends Component {
   render() {
      return (
         <Particles
            className="particles"
            params={{
               particles: {
                  number: {
                     value: 70,
                     density: {
                        enable: true,
                        value_area: 400
                     }
                  },
                  color: {
                     value: "#000"
                  },
                  shape: {
                     type: "circle",
                     stroke: {
                        width: 0,
                        color: "#000000"
                     },
                     polygon: {
                        nb_sides: 10
                     }
                  },
                  opacity: {
                     value: 0.5,
                     random: false,
                     anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                     }
                  },
                  size: {
                     value: 2,
                     random: true,
                     anim: {
                        enable: false,
                        speed: 60,
                        size_min: 0.1,
                        sync: false
                     }
                  },
                  line_linked: {
                     enable: true,
                     distance: 150,
                     color: "#000",
                     opacity: 0.4,
                     width: 2
                  },
                  move: {
                     enable: true,
                     speed: 4,
                     direction: "none",
                     random: true,
                     straight: false,
                     out_mode: "out",
                     bounce: false,
                     attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                     }
                  }
               },
               interactivity: {
                  detect_on: "canvas",
                  events: {
                     onhover: {
                        enable: false,
                        mode: "repulse"
                     },
                     onclick: {
                        enable: false,
                        mode: "push"
                     },
                     resize: true
                  },
                  modes: {
                     grab: {
                        distance: 800,
                        line_linked: {
                           opacity: 1
                        }
                     },
                     bubble: {
                        distance: 800,
                        size: 80,
                        duration: 2,
                        opacity: 0.8,
                        speed: 3
                     },
                     repulse: {
                        distance: 75,
                        duration: 0.4
                     },
                     push: {
                        particles_nb: 4
                     },
                     remove: {
                        particles_nb: 2
                     }
                  }
               },
               retina_detect: true
            }}
            style={{
               width: "100%",
               background: "linear-gradient(to left, rgb(9, 89, 191 ),rgba(142, 134, 134, 0.6), rgb(9, 89, 191))"
            }}
         />
      );
   }
}

export default Particle;
