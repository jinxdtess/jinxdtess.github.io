import React from 'react';
import dance from '../../asserts/image/dance.gif';
import dinosaur from '../../asserts/image/dinosaur.gif';
import {connect} from 'react-redux';

class Girl extends React.Component{
	render(){
		return (
			<div>
				<img src={this.props.status? dance : dinosaur} alt="" />
			</div>
		);
	}
};
const mapStateToProps= (state)=>{
	return state;
};

export default connect(mapStateToProps)(Girl);