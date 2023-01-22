import React from 'react'
import Styled from 'styled-components'
import SocialMedia from './social-media'



const FooterContainer = Styled.footer`
max-width: 100%;
text-align:center;
padding:1rem;

`
const FooterHeader = Styled.h3`
text-transform:uppercase;


`
const FooterSocialContainer = Styled.div`

`
const FooterCopyright = Styled.small`


`
const FooterMessage = Styled.small`
display:block;
`

const Footer = () => (
  <FooterContainer>
    <FooterSocialContainer>
      <FooterHeader>Follow Me On</FooterHeader>
      <SocialMedia/>
    </FooterSocialContainer>
  <FooterCopyright>&copy;Copyright {new Date().getFullYear()} Jackie Ho. All rights reserved.</FooterCopyright>
  <FooterMessage>Built with Gatsby & Contentful </FooterMessage>
  </FooterContainer>
)

export default Footer
