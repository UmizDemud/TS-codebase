import { FunctionComponent, useEffect, useRef } from "react";

interface CanvasProps {
	width: number,
	height: number,
	id: string,
	draw: (ctx: CanvasRenderingContext2D, obj: any) => void;
	objs?: any;
  style?: React.CSSProperties;
}
 
const Canvas: FunctionComponent<CanvasProps> = (props: CanvasProps) => {
	const canvasRef: React.Ref<HTMLCanvasElement> = useRef(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);


	useEffect(() => {
		if (!props.objs) return;
		if(!canvasRef || !canvasRef.current) return;
		const canvas = canvasRef.current;

		canvasCtxRef.current = canvas.getContext("2d");
		const ctx = canvasCtxRef.current;
		if (!ctx) return

		let animationFrameId = 0;
		let lastTime = 0;
		const fps = 30;
		const nextFrame = 1000 / fps;
		let timer = 0;

		const render = (timeStamp: DOMHighResTimeStamp) => {
			const deltaTime = timeStamp - lastTime;
			lastTime = timeStamp;
			if (timer > nextFrame) {
				props.draw(ctx, props.objs);
				timer = 0;	
			} else {
				timer += deltaTime;
			}
			animationFrameId = window.requestAnimationFrame(render);
		}
		render(0);
	
		return () => {
			window.cancelAnimationFrame(animationFrameId);
		}
	}, [props, props.objs])
	
	return (
		<canvas ref={canvasRef} id={props.id} width={props.width} height={props.height} style={props.style}></canvas>
	);
}
 
export default Canvas;
