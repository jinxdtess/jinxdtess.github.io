import React from 'react';
import flog from '../../asserts/image/flog.gif';
import gay from '../../asserts/image/gay.gif';
import {connect} from 'react-redux';

class Boy extends React.Component{
	//定义UI级别的state（还有服务器返回的state，App级别的state）
	state={
		isSend:false
	};

	handleClick=()=>{
		let {isSend}=this.state;
		isSend? this.props.stopLove() : this.props.sendLove();
		this.setState({
			isSend:!isSend
		});
	};
	render(){
		return (
			<div>
				<img src={this.state.isSend ? gay : flog} alt="青蛙耶" />
				<div>
					<button onClick={this.handleClick}>{this.state.isSend? '魔法解除' : '被施魔法'}</button>
				</div>
			</div>
		);
	}
};
const mapDispatchToProps = (dispatch) =>{
	return{
		sendLove: ()=>{
			dispatch({type:'send_love'});
		},
		stopLove: ()=>{
			dispatch({type:'stop_love'});
		}
	}
};
export default connect(null,mapDispatchToProps)(Boy);