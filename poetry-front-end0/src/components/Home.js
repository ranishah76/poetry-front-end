import React from 'react';
import Img from './Img';
import NoImgs from './NoImgs';

const ImgList = props => {
	const results = props.data.slice(0, 1);
	let imgs;
	if (results.length > 0) {
		imgs = results.map(img => <Img url={img.urls.small} key={img.id} />);
	} else {
		imgs = <NoImgs />;
	}
	return (
		<div className="img-list">
			{imgs}
		</div>
	);
};

export default ImgList;
