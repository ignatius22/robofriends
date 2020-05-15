import React from 'react';


const Card = ({name, email, id}) =>{
	return(
	<div className = 'tc bg-light-green dib br4 pa3 ma2 bw2 shadow-5 grow'>
		<img alt='robot' src={`https://robohash.org/${id}`}/>
		<div>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	</div>
	)
}

export default Card;