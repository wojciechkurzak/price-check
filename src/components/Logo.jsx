import React from 'react'
import logo from '../images/logo.png'
import '../styles/Logo.scss'

const Logo = () => {
	return (
		<div className='logoContainer'>
			<div className='logo'>
				<img src={logo} alt='logo' />
			</div>
			<span className='title'>BDO Pricecheck</span>
		</div>
	)
}

export default Logo
