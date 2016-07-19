import React , {Component , PropTypes} from 'react'
import Linkto from './Link'
import leftCss from  '../css/left.less'

class Leftt extends Component {
	render () {
		
		return (
			<div className="left-panel">
				<Linkto />
			</div>
		)
	}
}

Leftt.propTypes = {
	
}

export default Leftt