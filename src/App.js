import React, { useState } from "react"

function App() {
	let [R, setR] = useState(175)
	let [G, setG] = useState(75)
	let [B, setB] = useState(75)

	return (
		<div>
			<div className="p-3">
				<h1 className="h3 mb-3">Color chooser</h1>
				<Slider min={0} max={255} value={R} title='R' onChange={setR}/>
				<Slider min={0} max={255} value={G} title='G' onChange={setG}/>
				<Slider min={0} max={255} value={B} title='B'onChange={setB}/>

				<Style R={R} B={B} G={G}/>

				<div className="mt-2">
					<Dec R={R} B={B} G={G}/>
					<Hex R={R} B={B} G={G}/>
				</div>

			</div>
		</div>
	)
}

function Slider({min, max, value, title, onChange}) {
	return <div>
		<label>
			<strong>{title}</strong><br/>
			<input type="range" min={min} max={max} value={value}
			       onChange={e => onChange(parseInt(e.target.value))} style={{width: "25rem"}}/>
			{" "}
			{value}
		</label>
	</div>
}

function Style({R,G,B}) {
	return (
		<div className="border mt-3"
		     style={{height: "200px", width: "200px", backgroundColor: `rgb(${R} ${G} ${B})`}}>
		</div>
	)
}

function Dec({R,G,B}) {
	return (
		<div>
			Dec : <span className='badge badge-dark text-monospace'>
						rgba ({R}, {G}, {B}, 1)</span>
		</div>
	)
}

function Hex({R,G,B}) {
	let hexR = R.toString(16);
	let hexG = G.toString(16);
	let hexB = B.toString(16);
	return(
		<div>
			Hex : <span className='badge badge-dark text-monospace'>
						#{hexR}{hexG}{hexB}</span>
		</div>
	)
}

export default App;
