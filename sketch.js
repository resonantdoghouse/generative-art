const canvasSketch = require("canvas-sketch");
const { lerp } = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [2048, 2048]
};

const sketch = () => {
  const createGrid = () => {
    const points = [];
    const count = 32;
    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        const u = count <= 1 ? 0.5 : x / (count - 1);
        const v = count <= 1 ? 0.5 : y / (count - 1);
        points.push({
          radius: Math.abs(0.01 + random.gaussian() * 0.01),
          position: [u, v]
        });
      }
    }
    return points;
  };

  random.setSeed(512);
  const points = createGrid().filter(() => random.value() > 0.5);
  const margin = 200;

  return ({ context, width, height }) => {
    context.fillStyle = "skyblue";
    context.fillRect(0, 0, width, height);

    points.forEach(data => {
      const { position, radius } = data;

      const [u, v] = position;

      const x = lerp(margin, width - margin, u);
      const y = lerp(margin, height - margin, v);

      context.beginPath();
      context.arc(x, y, 8, 0, Math.PI * 2, false);
      context.fillStyle = "white";
      context.lineWidth = 6;
      context.fill();
    });
  };
};

canvasSketch(sketch, settings);
