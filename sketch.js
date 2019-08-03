const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [2048, 2048],
  // dimensions: ["A4"],
  // pixelsPerInch: 300
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "skyblue";
    context.fillRect(0, 0, width, height);

    context.beginPath();
    context.arc(width / 2, height / 2, 300, 0, Math.PI * 2, false);
    context.fillStyle = "coral";
    context.fill();
    context.lineWidth = 20;
    context.strokeStyle = "slategrey";
    context.stroke();
  };
};

canvasSketch(sketch, settings);
