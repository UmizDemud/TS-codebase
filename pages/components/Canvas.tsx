import EscapeDog from "../../components/Canvas/Sandbox/EscapeDog";

const Canvas = () => {
	return (<div className="container">
		<div className="document">
		<p>
		This is an implementation of the Canvas API of HTML5. &quot;The Canvas API provides a means for drawing graphics via JavaScript and the HTML &lt;<b>canvas</b>&gt; element. Among other things, it can be used for animation, game graphics, data visualization, photo manipulation, and real-time video processing.
		The Canvas API largely focuses on 2D graphics. The WebGL API, which also uses the &lt;<b>canvas</b>&gt; element, draws hardware-accelerated 2D and 3D graphics.&quot;. Using this toolkit includes working with canvas rendering context, image data, image bitmap, 2D pathing and rendering contexts (layers).
		</p>
		<EscapeDog />
		<p>
		Using WebGL API in a generic dev ops environment can be risky. Processes that use Graphics Card outside of professional frameworks should be accompained with measurements to keep the hardware safe. Therefore, during my studies I got used to keeping an eye on the performance metrics and developed my skills to match with what the endustry 
		may come up with. However once learned, the ins and outs of coding for high speed contexes proves useful for managing the computational resources of clients in various kinds of projects.
		</p>
		<p>
		The games demonstrated here uses similar principles for the game loop and class structures. On Unity, which I also like to work with; the atomic class is the GameObject and it ties all parts of the given tools in the concept of an object in the game. On my engine, I have used object oriented principles with a light touch and only created 
		a couple layers for most of the toolkit. These tools are several, as we started with graphics let me start with the <b>particle system</b>. &quot;Particle systems are collections of small images that when viewed together form a more complex “fuzzy” object, such as fire, smoke, weather, or fireworks. These complex effects are controlled by specifying the behavior of individual particles using properties 
		such as initial position, velocity, and lifespan.&quot; Particle systems when used without causion can also create difficulties or get cumbersome for the hardware as the way of handling these objects becomes important for the risks of memory leak. However it is not difficult to handle once the system around it is conceptualized.
		</p>
		<p>
		One other important tool, used both in my engine and production level frameworks, is the finite state machines. Before the explenation I must add that today, the sophistication of the FSM is one of the main factors on how a virtual object fairs in the market. &quot;Finite State Machine is one of the oldest techniques 
		in gaming where it was used in old games like PACMAN and new games like TOMB RAIDER also. In all these games one major goal was to make non player characters more intelligent. There are some advance types also available but FSM still is one of the most used technique for non-player characters.&quot; Hierarchical Finite State Machines are used for various computational structures to overcome the difficulties of large numbers of possible interactions. Using FSM, we can create intelligent AI agents. We can implement FSM and HFSM in games to make NPS’s behave intelligent. 
		One more point here is that the <b>state structure of React</b> also has similarities that 
		are coming from using the principles of finite state machines.
		</p>
		<p>
		There are other systems being used here and mainly they are the <b>game loop</b>, <b>input handling</b>, <b>drawing orders</b>, <b>in game Physics with kinetics and geometry</b>. However I will try to keep this on point and what belongs to my blog will go to my blog (one day...). One thing to wrap this up with is adapting the canvas API of HTML5 to React.js, using typescript and server side rendering 
		with Next.js. The process requires a good weaving of the applicaiton and the what the drawings may require for a specific canvas. Passing a draw method to the Canvas component and seperating the job between the parent and Canvas must be done and the Canvas side must have the tools ready and optional for different kinds of use cases from drawing a plot, an animation, 
		or something longer like a scene or a game. 
		</p>
		</div>
	</div>);
}
 
export default Canvas;