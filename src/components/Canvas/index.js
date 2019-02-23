import React, { Component } from 'react';

class Canvas extends Component {
  // create a ref to access the canvas
  canvasRef = React.createRef();
  
  componentDidMount() {
    // props
    const colorArray = typeof(this.props.colors) === 'object' ? this.props.colors : ['#2B3542', '#305854', '#558A84', '#F0CFC4', '#D8726B'];
    const velocity = typeof(this.props.velocity) === 'number' ? this.props.velocity : 1;
    
    const canvas = this.canvasRef.current;
    // set the canvas to the screen's full width and height
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // mouse's position (x, y)
    const mouse = {};

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      init();
    });

    window.addEventListener('mousemove', (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    const c = canvas.getContext('2d');


    class Circle {
      constructor(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.maxRadius = radius * 14;
        this.minRadius = radius;
        this.color = color;
      };
      draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.fill();
      };
      update = () => {
        this.draw();
        if (this.x > window.innerWidth - this.radius || this.x < this.radius) this.dx = -this.dx;
        if (this.y > window.innerHeight - this.radius || this.y < this.radius) this.dy = -this.dy;

        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
          if (this.radius < this.maxRadius) {
            this.radius += 1;
          };
        } else if (this.radius > this.minRadius) {
          this.radius -= 1;
        }
        
        this.x += this.dx;
        this.y += this.dy;
      };
    };
    
    let circleArray = [];

    const init = () => {
      circleArray = [];
      for (let i=0; i<1000; i++) {
        let radius = Math.floor(Math.random() * 4);
        let color = colorArray[Math.floor(Math.random() * colorArray.length)];
        let x = Math.random() * (window.innerWidth - (radius * 2)) + radius;
        let y = Math.random() * (window.innerHeight - (radius * 2)) + radius;
        let dx = (Math.random() - 0.5) * velocity;
        let dy = (Math.random() - 0.5) * velocity;
        circleArray.push(new Circle(x, y, dx, dy, radius, color));
      };
    };

    const animate = () => {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i=0; i<circleArray.length; i++) {
        circleArray[i].update()
      };
    };

    init()
    animate();
  };
  
  render() {
    return (
      <canvas style={{ position: 'fixed', zIndex: -1 }} ref={this.canvasRef}></canvas>
    )
  }
};

export default Canvas;
