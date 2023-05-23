/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ToggleDarkMode } from '../actions/graph';
import { State } from 'types/redux/state';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import '../styles/dark-mode.css'
import { FormattedMessage } from 'react-intl';
import { Button } from 'reactstrap';

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
			<Button outline className={`button ${isDarkMode ? 'dark' : ''}`}>
				<FormattedMessage id='dark.mode.toggle' />:
				<Toggle
					checked={isDarkMode}
					onChange={switchDarkMode}
					icons={false}
				/>
			</Button>
		</div>
	)
}

