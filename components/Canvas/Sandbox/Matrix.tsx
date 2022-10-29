import { useCallback, useEffect, useRef, useState } from "react";
import Canvas from "..";

class Symbol {
	characters: string;
	x: number;
	y: number;
	fontSize: number;
	text: string;
	canvasHeight: number;
	constructor(x: number, y: number, fontSize: number, canvasHeight: number) {
		this.characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		this.x = x;
		this.y = y;
		this.fontSize = fontSize;
		this.text = '';
		this.canvasHeight = canvasHeight;
	}
	draw(ctx: CanvasRenderingContext2D) {
		this.text = this.characters.charAt(Math.floor(Math.random()*this.characters.length));
		ctx.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
		if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.97) {
			this.y = 0;
		} else {
			this.y += 1;
		}
	}
}

class Effect {
	canvasWidth: number;
	canvasHeight: number;
	fontSize: number;
	columns: number;
	symbols: Array<Symbol>;
	constructor(canvasWidth: number, canvasHeight: number) {
		this.canvasWidth = canvasWidth;
		this.canvasHeight = canvasHeight;
		this.fontSize = 16;
		this.columns = this.canvasWidth / this.fontSize;
		this.symbols = [];

		// initialize
		for (let i = 0; i < this.columns; i++) {
			this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);	
		}
	}

}

const Matrix = () => {
	const canvasWidth = useRef(640)
	const canvasHeight = useRef(480);
	const [effect, setEffect] = useState<Effect>();
	// Modes: 
	// 0: fullscreen, 1: 640x 480
	const mode: number = 1;

	const draw = useCallback(
		(ctx: CanvasRenderingContext2D,  effect: any) => {
			ctx.font = effect.fontSize + 'px monospace';
			let eff: Effect = effect as Effect;
			eff.symbols.forEach(symbol => symbol.draw(ctx));
			ctx.fillStyle = 'rgba(0,0,0,0.05)';
			ctx.textAlign = 'center';
			ctx.fillRect(0, 0, canvasWidth.current, canvasHeight.current);
			ctx.fillStyle = "#0aff0a";
		},
		[],
	)
	

	useEffect(() => {

		if (mode === 0) {
			canvasWidth.current = window.innerWidth;
			canvasHeight.current = window.innerHeight;
		} else if (mode === 1) {
			canvasWidth.current = 640;
			canvasHeight.current = 480;
		}
		
		setEffect(new Effect(canvasWidth.current, canvasHeight.current));

	}, [])
	

	return (
		<Canvas 
			width={canvasWidth.current}
			height={canvasHeight.current}
			id="canvasMatrix"
			draw={draw} 
			objs={effect}
			style={{backgroundColor: "#000"}}/>
	);
}
 export default Matrix;