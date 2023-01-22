import React from 'react'
import styled from 'styled-components'
import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
import ScreenSizes from './media-variables'

const StyledMain = styled.main`
max-width: var(--layout-width-min);
@media (${ScreenSizes.mobile}) {
  margin: 0 auto;
}
`
class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Seo />
        <Navigation />
        <StyledMain>{children}</StyledMain>
        <Footer />
      </>
    )
  }
}

export default Template
