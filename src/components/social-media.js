import React from 'react'
import styled from 'styled-components'

const StyledSocialContainer = styled.section`

`

const StyledSocialList = styled.ul`
list-style-type:none;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
padding:0;
`

const StyledSocialListItem = styled.li`
padding:8px;
`

const StyledSocialLinks = styled.a`

`
const StyledSocialImages = styled.img`

`

const SocialMedia = () => (
    <StyledSocialContainer>
        <StyledSocialList>
            <StyledSocialListItem>
                <StyledSocialLinks>
                    <StyledSocialImages src="https://via.placeholder.com/32x32" />
                </StyledSocialLinks>
            </StyledSocialListItem>
            <StyledSocialListItem>
                <StyledSocialLinks>
                    <StyledSocialImages src="https://via.placeholder.com/32x32" />
                </StyledSocialLinks>
            </StyledSocialListItem>
            <StyledSocialListItem>
                <StyledSocialLinks>
                    <StyledSocialImages src="https://via.placeholder.com/32x32" />
                </StyledSocialLinks>
            </StyledSocialListItem>
            <StyledSocialListItem>
                <StyledSocialLinks>
                    <StyledSocialImages src="https://via.placeholder.com/32x32" />
                </StyledSocialLinks>
            </StyledSocialListItem>
            <StyledSocialListItem>
                <StyledSocialLinks>
                    <StyledSocialImages src="https://via.placeholder.com/32x32" />
                </StyledSocialLinks>
            </StyledSocialListItem>
        </StyledSocialList>
    </StyledSocialContainer>
)

export default SocialMedia
