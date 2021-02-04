/*
 * Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

export const Container = {
  boxSizing: 'border-box',
  padding: '10px'
};
export const FormContainer = {};
export const FormSection = {};
export const FormField = {
  marginBottom: "10px"
};
export const SectionHeader = {
  fontSize: "20px",
  marginBottom: "10px"
};
export const SectionBody = {};
export const SectionFooter = {
  display: "flex",
  flexDirection: "column"
};
export const SectionFooterPrimaryContent = {};
export const SectionFooterSecondaryContent = {
  fontSize: "12px",
  color: "gray",
  marginTop: "3px"
};
export const Input = {
  border: '1px solid rgb(55, 66, 92)',
  padding: '10px',
  borderRadius: '10px',
  boxShadow: '1px 2px 5px rgb(120, 128, 146)',
  width: '61%',
  marginTop: "2px"
};
export const Button = {
  background: 'linear-gradient(to bottom right, rgb(60, 122, 255), rgb(28, 85, 208))',
  border: '1px solid rgb(55, 66, 92)',
  padding: '10px',
  color: 'white',
  borderRadius: '10px',
  boxShadow: '1px 2px 5px rgb(120, 128, 146)',
  width: '70%',
};
export const PhotoPickerButton = {};
export const PhotoPlaceholder = {};
export const SignInButton = {};
export const SignInButtonIcon = {};
export const SignInButtonContent = {};
export const Strike = {};
export const StrikeContent = {};
export const ActionRow = {};
export const FormRow = {};
export const A = {
  color: 'rgb(28, 85, 208)'
};
export const Hint = {
  fontSize: "12px",
  color: "gray",
  marginTop: "3px"
};
export const Radio = {};
export const Label = {};
export const InputLabel = {};
export const AmazonSignInButton = {};
export const FacebookSignInButton = {};
export const GoogleSignInButton = {};
export const OAuthSignInButton = {};
export const Toast = {};
export const NavBar = {};
export const NavRight = {};
export const Nav = {};
export const NavItem = {};
export const NavButton = {};

const AmplifyTheme = {
	container: Container,
	formContainer: FormContainer,
	formSection: FormSection,
	formField: FormField,

	sectionHeader: SectionHeader,
	sectionBody: SectionBody,
	sectionFooter: SectionFooter,
	sectionFooterPrimaryContent: SectionFooterPrimaryContent,
	sectionFooterSecondaryContent: SectionFooterSecondaryContent,

	input: Input,
	button: Button,
	photoPickerButton: PhotoPickerButton,
	photoPlaceholder: PhotoPlaceholder,
	signInButton: SignInButton,
	signInButtonIcon: SignInButtonIcon,
	signInButtonContent: SignInButtonContent,
	amazonSignInButton: AmazonSignInButton,
	facebookSignInButton: FacebookSignInButton,
	googleSignInButton: GoogleSignInButton,
	oAuthSignInButton: OAuthSignInButton,

	formRow: FormRow,
	strike: Strike,
	strikeContent: StrikeContent,
	actionRow: ActionRow,
	a: A,

	hint: Hint,
	radio: Radio,
	label: Label,
	inputLabel: InputLabel,
	toast: Toast,

	navBar: NavBar,
	nav: Nav,
	navRight: NavRight,
	navItem: NavItem,
	navButton: NavButton,
};

export default AmplifyTheme;