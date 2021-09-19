import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeRounded, Telegram } from '@material-ui/icons';
import { NavLink, withRouter } from 'react-router-dom';
import resumeData from '../../utils/resumeData';
import CustomButton from '../Button/Button';
import './Header.css';

const Header = (props) => {
	const pathName = props?.location?.pathname;

	return (
		<Navbar expand="lg" sticky="top" className="header">
			{/* Home link */}
			<Nav.Link as={NavLink} to="/" className="header_navlink">
				<Navbar.Brand className="header_home">
					<HomeRounded />
				</Navbar.Brand>
			</Nav.Link>

			<Navbar.Toggle />

			<Navbar.Collapse>
				<Nav className="header_left">
					{/* Resume Link */}
					<Nav.Link
						as={NavLink}
						to="/"
						className={pathName === '/' ? 'header_link_active' : 'header_link'}>
						Resume
					</Nav.Link>

					{/* Portfolio Link */}
					<Nav.Link
						as={NavLink}
						to="/portfolio"
						className={
							pathName === '/portfolio' ? 'header_link_active' : 'header_link'
						}>
						Portfolio
					</Nav.Link>
				</Nav>

				<div className="header_right">
					{Object.keys(resumeData.socials).map((key) => (
						<a
							href={resumeData.socials[key].link}
							key={key}
							target="_blank"
							rel="noreferrer">
							{resumeData.socials[key].icon}
						</a>
					))}
					<Nav.Link
						href="https://t.me/syritchenkom"
						target="_blank"
						rel="noreferrer">
						<CustomButton text={'Hire My'} icon={<Telegram />} />
					</Nav.Link>
				</div>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default withRouter(Header);
