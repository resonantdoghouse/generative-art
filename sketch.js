const canvasSketch = require("canvas-sketch");

const settings = {
  // dimensions: [2048, 2048],
  units: 'in',
  dimensions: "A4",
  pixelsPerInch: 300
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "skyblue";
    context.fillRect(0, 0, width, height);

    context.beginPath();
    context.arc(width / 2, height / 2, width * 0.2, 0, Math.PI * 2, false);
    context.fillStyle = "coral";
    context.fill();
    context.lineWidth = width * 0.03;
    context.strokeStyle = "slategrey";
    context.stroke();
  };
};

canvasSketch(sketch, settings);
