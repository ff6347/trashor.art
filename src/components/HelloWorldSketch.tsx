import { createSignal } from "solid-js";
import p5 from "p5";

const HelloWorld = () => {
	let x = 50;
	let y = 50;

	const [width, setWidth] = createSignal(200);
	const [height, setHeight] = createSignal(200);

	const createSketch = (ref: HTMLDivElement) => {
		const sketch = (p: p5) => {
			p.setup = () => {
				const canvas = p.createCanvas(width(), height());
				canvas.parent(ref);
			};
			p.draw = () => {
				p.background(0);
				p.fill(0);
				p.ellipse(x, y, 50, 50);
			};
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

export default HelloWorld;
