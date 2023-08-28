import { createSignal } from "solid-js";
import p5 from "p5";

const MySliceOfHell = () => {
	const [width, setWidth] = createSignal(500);
	const [height, setHeight] = createSignal(500);

	const createSketch = (ref: HTMLDivElement) => {
		const sketch = (p: p5) => {
			p.setup = () => {
				const canvas = p.createCanvas(width(), height());
				canvas.parent(ref);
				p.background(255);
				p.noStroke();
				p.blendMode(p.DIFFERENCE);

				const i = 130;
				const p1 = { x: width() / 1.75, y: height() / 1.75 };
				const p2 = { x: width() / 2.5, y: height() / 1.75 };
				const p3 = { x: width() / 2, y: height() / 2.5 };

				p.fill(255, 0, 0); // red=cyan
				p.ellipse(p1.x, p1.y, i, i);

				p.fill(0, 255, 0); // green=magenta
				p.ellipse(p2.x, p2.y, i, i);

				p.fill(0, 0, 255); // blue=yellow
				p.ellipse(width() / 2, height() / 2.5, i, i);
				p.blendMode(p.BLEND);
				p.fill(0);
				p.textAlign(p.CENTER);
				p.textSize(10);
				p.text("No sugar", p1.x, p1.y + 5);
				p.text("No milk", p2.x, p2.y + 5);
				p.text("No gluten", p3.x, p3.y + 5);
				p.fill(255);
				p.text("me", width() / 2 - 5, height() / 2 + 5);
			};
			// p.draw = () => {

			// };
		};
		new p5(sketch, ref);
	};

	return (
		<div
			ref={(el) => createSketch(el)}
			style={{
				display: "flex",
				height: "100vh",
				"justify-content": "center",
				"align-items": "center",
			}}
		/>
	);
};

export default MySliceOfHell;
