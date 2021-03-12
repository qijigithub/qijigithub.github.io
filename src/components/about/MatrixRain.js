import React,{useRef,useState,useEffect} from 'react';
import styled from 'styled-components';
import RainStream from './RainStream';

const MatrixRain = (props) => {
    // return (
    //     // <Container>
    //     //     <RainStream/>
    //     // </Container>
        
    // )
    const containerRef = useRef(null);
	const [containerSize, setContainerSize] = useState(null); // ?{width, height}

	useEffect(() => {
		const boundingClientRect = containerRef.current.getBoundingClientRect();
		setContainerSize({
			width: boundingClientRect.width,
			height: boundingClientRect.height,
		});
	}, []);

	const streamCount = containerSize ? Math.floor(containerSize.width / 10) : 0;

	return (
		<Container 
			style={{
				// background: 'black',
				// position: 'fixed',
				// top: 0,
				// left: 0,
				// bottom: 0,
				// right: 0,
				overflow: 'hidden',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
			}}
			ref={containerRef}>
			{new Array(streamCount).fill().map(_ => (
				<RainStream height={containerSize?.height} />
			))}
		</Container >
	);
}
const Container = styled.div`
// height:100%;
width:100%;
margin-top:60px;
background-image: radial-gradient(at 45px 45px, rgb(0,255,255)0%, rgba(0,0,255,0)50%, rgb(0,0,255)95%);
// background:#000;
opacity:0.18;
display: inline-block;
// position:absolute;

`

export default MatrixRain
