import { NavLink } from 'react-router-dom';
import styles from './AppNav.module.css';

export default function AppNav() {
	return (
		<div className={styles.nav}>
			<nav>
				<ul>
					<li>
						<NavLink to="cities">Cities</NavLink>
					</li>
					<li>
						<NavLink to="contries">Countries</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
}
