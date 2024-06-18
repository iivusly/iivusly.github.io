'use client'

import styled from 'styled-components'

const WIPBadgeContainer = styled.a`
	z-index: 9999;
	position: fixed;
	display: block;
	width: 15.38em;
	height: 1.54em;
	top: 3.23em;
	right: -3.23em;
	box-sizing: content-box;
	transform: rotate(45deg);

	pointer-events: none;
	text-decoration: none;

	color: #fff;
	line-height: 1.54em;
	text-decoration: none;
	text-align: center;
	text-indent: 0;

	padding: 0.15em 0;
	margin: 0.15em 0;

	background-color: hsl(10.5, 100%, 60%);
	color: hsl(10.5, 100%, 30%);
`

const WIPBadge = () => (
	<WIPBadgeContainer>This Website is WIP!</WIPBadgeContainer>
)

export default WIPBadge
