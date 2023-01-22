import React from 'react'
import styled from 'styled-components'
import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
import { device } from './devices'


const StyledLayout = styled.div`
max-width: var(--layout-width-min);
@media ${device.laptop} {
  margin: 0 auto;
  max-width: var(--layout-width-max);

}
`
class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <StyledLayout>
        <Seo />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </StyledLayout>
    )
  }
}

export default Template
