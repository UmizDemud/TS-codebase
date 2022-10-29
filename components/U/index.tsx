import { FunctionComponent } from 'react';
import styles from './U.module.css'

interface UProps {
	width: number;
	height: number;
}
 
const U: FunctionComponent<UProps> = ({width, height}) => {
	const bentX = 0.037;
	const bentY = 0.01;
	const sizeX = 0.14;
	const sizeY = 0.12;
	const startX = width * sizeX + width * bentX;
	const startY = height * sizeY + height * bentY;
	const colorGrad = ["#fff3d6", "#eedf36", "#333"];
	const colorGradBack = ["#ccaa33", "#ccaa33", "#111"];
	const strokeWidth = "1"

	return (
		<svg
			className={styles.U}
			version="1.0"
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<linearGradient id="gradColor" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor={colorGrad[0]} />
					<stop offset="98%" stopColor={colorGrad[1]} />
          <stop offset="100%" stopColor={colorGrad[2]} />
        </linearGradient>
				<linearGradient id="gradColorBack" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor={colorGradBack[0]} />
					<stop offset="57%" stopColor={colorGradBack[1]} />
          <stop offset="100%" stopColor={colorGradBack[2]} />
        </linearGradient>
			</defs>
			<g>
				<path
					className={styles["toDraw"] + " " + styles["backLine"]}
					transform={`translate(-${width * bentX},-${height * bentY})`}
					d={`M${startX} ${startY} 
									C ${-width * sizeX * 1.9} ${height * 1.2} ${width + width * sizeX * 1.9} ${height * 1.2} 
              		 ${startX + width * sizeX * 5} ${startY}
									L ${startX + width * sizeX * 5 - width * sizeX} ${startY}
									C ${width - width * sizeX} ${height * 1.05} ${width * sizeX} ${height * 1.05}
									 ${startX + width * sizeX} ${startY}Z`}
					stroke="#111"
					strokeWidth={strokeWidth}
					fill="url(#gradColorBack)"
				></path>
				<path
					className={styles["toDraw"] + " " + styles["frontLine"]}
					d={`M${startX} ${startY} 
									C ${-width * sizeX * 1.9} ${height * 1.2} ${width + width * sizeX * 1.9} ${height * 1.2} 
              		 ${startX + width * sizeX * 5} ${startY}
									L ${startX + width * sizeX * 5 - width * sizeX} ${startY}
									C ${width - width * sizeX} ${height * 1.05} ${width * sizeX} ${height * 1.05}
									 ${startX + width * sizeX} ${startY}Z`}
					stroke="#111"
					strokeWidth={strokeWidth}
					fill="url(#gradColor)"
				></path>

			</g>				
			<g fill={colorGrad[0]}>
				<path
					className={styles["toDraw"] + " " + styles["topLine1"]}
					d={`M${startX} ${startY} L ${startX - width * bentX} ${startY - height * bentY} L ${startX + width * sizeX - width * bentX} ${startY - height * bentY}
					 L ${startX + width * sizeX} ${startY}Z`}
					stroke="#333"
					strokeWidth={strokeWidth}
				></path>
				<path
					className={styles["toDraw"] + " " + styles["topLine2"]}
					d={`M${startX + width * sizeX * 5} ${startY} L ${startX - width * bentX + width * sizeX * 5} ${startY - height * bentY} L ${startX - width * sizeX - width * bentX + width * sizeX * 5} ${startY - height * bentY}
					 L ${startX - width * sizeX + width * sizeX * 5} ${startY}Z`}
					stroke="#333"
					strokeWidth={strokeWidth}
				></path>
				</g>
		</svg>
	);

}
 
export default U;