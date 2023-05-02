/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ToggleDarkMode } from '../actions/graph';
import '../styles/dark-mode.css'
import { State } from 'types/redux/state';

export default function DarkModeComponent() {
	const dispatch = useDispatch();

	const isDarkMode = useSelector((state: State) => state.graph.darkMode);
	const theme  = isDarkMode ? 'dark' : 'light';

	const switchDarkMode = () => {
		dispatch(ToggleDarkMode());
	}

	useEffect(() => {
		//changing color of body with darkmode in useEffect
		document.body.className = theme
		if(theme === 'dark') {
			document.querySelectorAll('.card').forEach(card => {
				card.classList.add('.dark');
			})
		} else {
			document.querySelectorAll('.card').forEach(card => {
				card.classList.remove('.dark');
			})
		}
	}, [theme]);

	return (
		<div>
			<div className="darkmode">
				<input
					type="checkbox"
					className="checkbox"
					id="checkbox"
					onChange={switchDarkMode}
					checked={isDarkMode}
				/>
				<label htmlFor="checkbox" className="label">
					<div className="ball"></div>
				</label>
			</div>
		</div>
	)
}

