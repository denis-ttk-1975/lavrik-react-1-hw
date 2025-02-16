function Circle({ id, min, max, value, changed }) {
	let size = value * 20 + "px";
	let circleStyles = { width: size, height: size };
	let canDec = value > min;
	let canInc = value < max;
  
  function tryDecrease(){
    if(canDec){
      changed(value - 1);
    }
  }

  function tryIncrease(){
    if(canInc){
      changed(value + 1);
    }
  }

	return <div className="container my-2">
		<div>
			<button onClick={tryDecrease} className="btn btn-danger app-decrease" disabled={!canDec}>-</button>
			<strong className="app-value mx-2">{ value }</strong>
			<button onClick={tryIncrease} className="btn btn-success app-increase" disabled={!canInc}>+</button>
		</div>
		<hr />
		<div className="app-circle my-3" style={circleStyles}></div>
		{
			( !canDec || !canInc ) &&
			<div className="alert alert-danger mt-3">
				{ !canDec && 'Minimum now!' }
				{ !canInc && 'Maximum now!' }
			</div>
		}
	</div>;
}

export default Circle;