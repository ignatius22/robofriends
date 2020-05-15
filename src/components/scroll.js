import React from 'react';

const scroll = (props) =>{
	console.log(props)
	return(
			<div style={{ overflowY: 'scroll', border:'1px black solid', height:'500px' }}>
				{props.children}
			</div>
		) 
}


export default scroll