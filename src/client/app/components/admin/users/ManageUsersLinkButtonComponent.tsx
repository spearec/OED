/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { State } from 'types/redux/state';
import { getThemeStyle } from '../../../utils/darkMode';

interface ManageUserLinkButtonComponentProps {
	style?: React.CSSProperties;
}

export default function ManageUsersLinkButtonComponent(props: ManageUserLinkButtonComponentProps) {
	const themeStyle = getThemeStyle(useSelector((state: State) => state.graph.darkMode));

	const inlineButtonStyle: React.CSSProperties = {
		display: 'inline',
		paddingLeft: '5px'
	}

	return (
		<Link style={{ ...inlineButtonStyle, ...props.style }} to='/users' >
			<Button outline style={themeStyle}><FormattedMessage id='users'/> </Button></Link>
	)
}