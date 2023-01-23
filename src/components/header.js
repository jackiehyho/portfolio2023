import React from 'react'
import { Link } from 'gatsby'
import Styled from 'styled-components'

const StyledHeader = Styled.header`
display: flex;
justify-content: center;
max-width: var(--layout-min-width);
align-items: center;
padding:1rem;
`

const StyledLogoLink = Styled(Link)`
display: flex;
font-weight: var(--medium);
align-items: center;
flex-direction: row;
flex-shrink: 0;
gap: var(--space-md);
`

const StyledLogoImage= Styled.img`
height: var(--size-logo);
width: var(--size-logo);
display: block;
`



const Header = () => (
  <StyledHeader aria-label="Main">
    <StyledLogoLink to="/">
      <StyledLogoImage src="https://via.placeholder.com/32x32" />
      {/* <span className={styles.navigationItem}>Jackie Ho's Portfolio</span> */}
    </StyledLogoLink>
   
  </StyledHeader>
)

export default Header
