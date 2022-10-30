import Image from "next/image";
import { useRef, useEffect } from "react";

const EscapeDog = () => {
	const canvasRef: React.Ref<HTMLCanvasElement> = useRef(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

	const Width = 100;
	const Height = 91.3;
	class Dog {
		width: number;
		height: number;
		image?: HTMLImageElement;
		frameX: number;
		frameY: number;
		maxFrame: number;
		fps: number;
		frameInterval: number;
		frameTimer: number;
		states: Array<{
			name: string,
			maxFrame: number,
			frameY: number
		}>
		currentState: {
			name: string,
			maxFrame: number,
			frameY: number
		};
		constructor(width: number, height: number, image?: HTMLImageElement) {
			this.width = width;
			this.height = height;
			if (image) this.image = image;
			this.frameX = 0;
			this.frameY = 0;
			this.maxFrame = 6;
			this.fps = 60;
			this.frameInterval = 1000 / this.fps;
			this.frameTimer = 0;
			this.states = [
				{name: "idle", maxFrame: 5, frameY: 0},
				{name: "dizzy", maxFrame: 10, frameY: 4},
				{name: "sitting", maxFrame: 4, frameY: 5},
				{name: "running", maxFrame: 8, frameY: 3},
				{name: "jump", maxFrame: 6, frameY: 1},
				{name: "falling", maxFrame: 6, frameY: 2},
				{name: "rolling", maxFrame: 6, frameY: 6},
				{name: "bite", maxFrame: 6, frameY: 7},
				{name: "faint", maxFrame: 11, frameY: 8},
			]
			this.currentState = this.states[0];
		}
		update(deltaTime: DOMHighResTimeStamp) {
			if (this.frameTimer > this.frameInterval) {
				this.frameTimer = 0;
				if (this.frameX < this.maxFrame) {
					this.frameX++;
				} else {
					this.frameX = 3;
				}
			} else {
				this.frameTimer += deltaTime;
			}
		}
		draw(context: CanvasRenderingContext2D) {
			if (!this.image) return;
			context.drawImage(
				this.image,
				this.frameX * this.width,
				this.frameY * this.height,
				this.width,
				this.height,
				0,
				0,
				this.width,
				this.height
			);
		}
		animate(context: CanvasRenderingContext2D, deltaTime: DOMHighResTimeStamp) {
			this.draw(context);
			this.update(deltaTime);
		}
		setState(state: string) {
			this.currentState = this.states.find(s => s.name === state) || this.states[0];
			this.frameY = this.currentState.frameY;
			this.maxFrame = this.currentState.maxFrame;
		}
		setImage(image: HTMLImageElement) {
			this.image = image;
		}
	}
	const draw = (context: CanvasRenderingContext2D, deltaTime: DOMHighResTimeStamp, dog: Dog) => {
		context.clearRect(0, 0, Width, Height)
		dog.animate(context, deltaTime);
	}

	const dog = useRef(new Dog(Width, Height))


	useEffect(() => {
		if(!canvasRef || !canvasRef.current) return;
		const canvas = canvasRef.current;

		canvasCtxRef.current = canvas.getContext("2d");
		const ctx = canvasCtxRef.current;
		if(!ctx) return;
		if(!document) return;

		const image = document.getElementById("dogImage");
		const img = image as HTMLImageElement;
		if (!img) return;
		dog.current.setImage(img)

		let animationFrameId = 0;
		let lastTime = 0;
		const fps = 10;
		const nextFrame = 1000 / fps;
		let timer = 0;
		const render = (timeStamp: DOMHighResTimeStamp) => {
			const deltaTime = timeStamp - lastTime;
			lastTime = timeStamp;
			if(timer > nextFrame) {
				draw(ctx, deltaTime, dog.current);
				timer = 0;
			} else {
				timer += deltaTime
			}
			animationFrameId = window.requestAnimationFrame(render);
		}
		render(0);
	
		return () => {
			window.cancelAnimationFrame(animationFrameId);
		}
	}, [dog])
	
	return (<div style={{display: "flex", flexDirection: "row", gap: "1rem", flexWrap: "wrap", margin: "1rem 0", justifyContent: "center", alignItems: "center"}}>
		<Image id="dogImage" src="/assets/images/dog.png" width={600} height={456.5} alt="dog" />
		<div style={{display: "flex", flexDirection: "column", flexWrap: "wrap", justifyContent: "space-evenly", alignItems: "center"}}>
		<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", alignItems: "center", width: "360px", height: "100px"}}>
      <label htmlFor="animations">Choose Animation:</label>
      <select onChange={(e) => {{
				console.log(e.target.value)
				dog.current.setState(e.target.value)
			}}} id="animations" name="animations">
        <option value="idle">Idle</option>
        <option value="jump">Jump</option>
        <option value="falling">Fall</option>
        <option value="running">Run</option>
        <option value="dizzy">Dizzy</option>
        <option value="sitting">Sit</option>
        <option value="rolling">Roll</option>
        <option value="bite">Bite</option>
        <option value="faint">KO</option>
      </select>
			<canvas ref={canvasRef} id="dogCanvas" width={100} height={100}></canvas>
		</div>
		<p style={{width: "400px"}}>On this animation, frame rate is kept at 10fps and the loop displays the selected state of the dog. The large spritesheet supplies the possible states and the dog class has all the necessary methods and variables to make use of such a sprite sheet. Altought the animation is basic, the necessary tweaking done to display it would suprise many people.</p>
		</div>
	</div>);
}
 
export default EscapeDog;