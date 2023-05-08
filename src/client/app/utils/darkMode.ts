/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from 'react';

export function getThemeStyle(isDarkMode: boolean): React.CSSProperties {
	return {
		backgroundColor: (isDarkMode ? '#333333' : 'white'),
		color: (isDarkMode ? 'white' : '#333333')
	};
}