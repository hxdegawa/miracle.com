export default {
  data: {
    particles: {
      number: {
        value: 400,
        density: {
          enable: false
        }
      },
      color: {
        value: '#ffffff'
      },
      shape: {
        type: ['circle', 'triangle'],
        stroke: {
          width: 0,
          color: '#fafafa'
        },
        polygon: {
          nb_sides: 5
        }
      },
      opacity: {
        value: 0.7,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 2,
        color: '#ffffff',
        opacity: 0.6,
        width: 2
      },
      move: {
        enable: true,
        speed: 5,
        direction: 'bottom',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 300,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      modes: {
        grab: {
          line_linked: {
            opacity: 0
          }
        }
      }
    },
    retina_detect: true
  }
}
