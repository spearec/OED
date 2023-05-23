/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react';

import { LanguageTypes } from '../types/redux/i18n';
import { UpdateDefaultLanguageAction } from '../types/redux/admin';
import { FormattedMessage } from 'react-intl';
import TooltipMarkerComponent from './TooltipMarkerComponent';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

interface LanguageSelectProps {
	selectedLanguage: LanguageTypes;
	isDarkMode: boolean;
	changeLanguage(languageType: LanguageTypes): UpdateDefaultLanguageAction;
}

interface DropdownState {
	dropdownOpen: boolean;
	compareSortingDropdownOpen: boolean;
}

// Convert the i18n language type to its full name.
enum LanguageNames {
	en = 'English',
	fr = 'Français',
	es = 'Español'
}

/**
 * A component that allows users to select which language the page should be displayed in.
 */
export default class LanguageSelectorComponent extends React.Component<LanguageSelectProps, DropdownState> {
	constructor(props: LanguageSelectProps) {
		super(props);
		this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
		this.toggleDropdown = this.toggleDropdown.bind(this);
		this.state = {
			dropdownOpen: false,
			compareSortingDropdownOpen: false
		};
	}

	public render() {
		const divBottomPadding: React.CSSProperties = {
			paddingBottom: '15px'
		};

		const labelStyle: React.CSSProperties = {
			fontWeight: 'bold',
			margin: 0
		};

		const themeStyle = this.props.isDarkMode ? 'dark' : '';

		return (
			<div>
				<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown} direction='end'>
					<DropdownToggle outline className={themeStyle} caret>
						{/* Show the currently selected language as its name */}
						{/* {LanguageNames[this.props.selectedLanguage]} */}
						<FormattedMessage id='language' />
					</DropdownToggle>
					<DropdownMenu className={themeStyle} right>
						<DropdownItem
							className={themeStyle}
							onClick={() => this.handleChangeLanguage(LanguageTypes.en)}
						>
							English
						</DropdownItem>
						<DropdownItem
							className={themeStyle}
							onClick={() => this.handleChangeLanguage(LanguageTypes.fr)}
						>
							Français
						</DropdownItem>
						<DropdownItem
							className={themeStyle}
							onClick={() => this.handleChangeLanguage(LanguageTypes.es)}
						>
							Español
						</DropdownItem>
						<DropdownItem divider />
						<TooltipMarkerComponent page='home' helpTextId='help.home.language' />
						<DropdownItem className={themeStyle}><TooltipMarkerComponent page='home' helpTextId='help.home.language' /></DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
		);
	}

	private handleChangeLanguage(value: LanguageTypes) {
		this.props.changeLanguage(value);
	}

	private toggleDropdown() {
		this.setState(prevState => ({ dropdownOpen: !prevState.dropdownOpen }));
	}
}