import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../App';

const NavBar = () => {
	const history = useHistory();
	const { state, dispatch } = useContext(UserContext);

	const renderList = () => {
		if (state.user) {
			return [
				<li key="1">
					<Link to="/profile">Profile</Link>
				</li>,
				<li key="2">
					<Link to="/appointment">Appointment</Link>
				</li>,
				<li key="3">
					<button
						className="btn #c62828 red darken-3"
						onClick={() => {
							localStorage.clear();
							dispatch({ type: 'CLEAR' });
							history.push('/signin');
						}}
						style={{ marginRight: '15px' }}
					>
						Logout
					</button>
				</li>,
			];
		} else if (state.doctor) {
			return [
				<li key="1">
					<Link to="docappointment">
						<p style={{ margin: '0 10px 10px 0' }}>Appointment</p>
					</Link>
				</li>,
				<li key="2">
					<button
						className="btn #c62828 red darken-3"
						onClick={() => {
							localStorage.clear();
							dispatch({ type: 'CLEAR' });
							history.push('/signin');
						}}
						style={{ marginRight: '15px' }}
					>
						Logout
					</button>
				</li>,
			];
		} else {
			return [
				<li key="5">
					<Link to="/signin">Signin</Link>
				</li>,
				<li key="6">
					<Link to="/signup">Signup</Link>
				</li>,
			];
		}
	};

	return (
		<nav>
			<div className="nav-wrapper #b2ebf2 cyan lighten-4">
				<Link
					to={state.doctor ? '/docappointment' : '/'}
					className="brand-logo left"
				>
					<span style={{ marginLeft: '15px' }}>Medi</span>
					<span style={{ color: '#e65100' }}>Care</span>
				</Link>
				<ul id="nav-mobile" className="right">
					{renderList()}
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
