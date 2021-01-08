import React from 'react'
import './style.css';

interface Props {
	message?: string;
	messageTimeMs?: number;
	color?: string;
	logoSrc?: string;
	logoRender?: any;
	pClassName?: string;
}

export const NinjaMessage: React.FC<Props> = ({
	message = 'hi !',
	messageTimeMs = 10 * 1000,
	logoSrc = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
	logoRender = undefined,
	pClassName = undefined,
	color = undefined
}) => {
	const [hide, setHide] = React.useState(false);
	const [cleanUp, setCleanUp] = React.useState(false);
	React.useEffect(() => {
		setTimeout(() => setHide(true), messageTimeMs);
		setTimeout(() => setCleanUp(true), messageTimeMs + 2000);
	},[]);
	const logoToUse = logoRender ? logoRender : <img src={logoSrc} width="50px" height="50px"></img>;
	const baseClassName = pClassName ? pClassName : 'react-ninja-message';
	const styleMyNinja = { "--my-ninja-color": color ? color : 'red' } as React.CSSProperties;

	return (
		<React.Fragment>
			{!cleanUp && <div className={`${baseClassName}-ninja-drop ${hide ? 'backOutLeftNinja' : 'bounceInDownNinjaAnimation'}`}>
				{!hide && <div className={`${baseClassName}-bubble ${baseClassName}-bubble-bottom-left bounceInBubble`}>{message}</div>}
				<div className={`${baseClassName}-ninja color`} style={styleMyNinja}>
					<div className="n--head">
						<div className="n--ribbon"></div>
						<div className="n--eyes"></div>
					</div>
					<div className={`${baseClassName}-ninja-logo`}>
						{logoToUse}
					</div>
					<div className="n--body">
						<div className="n--weapon"></div>
						<div className="n--arm"></div>
						<div className="n--arm"></div>
						<div className="n--leg"></div>
						<div className="n--leg"></div>
					</div> 
				</div>
			</div>}
		</React.Fragment>
	);
}
