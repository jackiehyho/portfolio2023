import React from 'react'
import styled from 'styled-components'
import LinkedInImage from '../assets/linkedin.svg'
import InstagramImage from '../assets/instagram.svg'
import FacebookImage from '../assets/facebook.svg'
import TwitterImage from '../assets/twitter.svg'
import YouTubeImage from '../assets/youtube.svg'


const StyledSocialContainer = styled.section`
padding:0;
margin: 0;
`

const StyledSocialList = styled.ul`
list-style-type:none;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding:0;
margin: 0;
`

const StyledSocialListItem = styled.li`
display:inline-block;
height: 48px;
width:48px;
padding: 0;
margin: 0;
padding:8px;
`

const StyledSocialLinks = styled.a`
display:inline-block;
width: 32px;
height: 32px;
line-height: 100%;
padding: 0;
margin: 0;
`
const StyledLinkedInImage = styled(LinkedInImage)`
circle#background {
    fill: #000;
    transition: 0.3s fill ease-in;
}
`

const StyledLinkedInLink = styled(StyledSocialLinks)`
&:hover circle#background {
    fill:rgb(11, 105, 199);
    transition: 0.3s fill ease-in;
}
`

const StyledInstagramImage = styled(InstagramImage)`
#stop1, #stop2, #stop3, #stop4 {
    stop-color: #000;
    transition: 0.3s fill ease-in;
}
`
const StyledInstagramLink = styled(StyledSocialLinks)`
&:hover #stop1{
    stop-color: #e09b3d;
    transition: 0.3s stop-color ease-in;

}
&:hover #stop2{
    stop-color: #c74c4d;
    transition: 0.3s stop-color ease-in;

}
&:hover #stop3{
    stop-color: #c21975;
    transition: 0.3s stop-color ease-in;

}
&:hover #stop4{
    stop-color: #7024c4;
    transition: 0.3s stop-color ease-in;

}
`
const StyledFacebookLink = styled(StyledSocialLinks)`
&:hover circle#background{
    fill: #334c8c;
}
`

const StyledFacebookImage = styled(FacebookImage)`
circle#background {
    fill: #000;
    transition: 0.3s fill ease-in;
}
`

// const StyledTwitterLink = styled(StyledSocialLinks)`
// &:hover circle#background{
//     fill: #00a6de;
// }
// `

// const StyledTwitterImage = styled(TwitterImage)`
// circle#background {
//     fill: #000;
//     transition: 0.3s fill ease-in;
// }
// `

// const StyledYouTubeLink = styled(StyledSocialLinks)`
// &:hover circle#background{
//     fill: #f20000;
// }
// `

// const StyledYouTubeImage = styled(YouTubeImage)`
// circle#background {
//     fill: #000;
//     transition: 0.3s fill ease-in;
// }
// `

const SocialMedia = () => (
    <StyledSocialContainer>
        <StyledSocialList>
            <StyledSocialListItem>
                <StyledLinkedInLink href="https://www.linkedin.com/in/jackiehyho/">
                    <StyledLinkedInImage />
                </StyledLinkedInLink>
            </StyledSocialListItem>
            <StyledSocialListItem>
                <StyledInstagramLink href="https://www.linkedin.com/in/jackiehyho/">
                    <StyledInstagramImage />
                </StyledInstagramLink>
            </StyledSocialListItem>
            <StyledSocialListItem>
                <StyledFacebookLink href="https://www.linkedin.com/in/jackiehyho/">
                    <StyledFacebookImage />
                </StyledFacebookLink>
            </StyledSocialListItem>
            {/* <StyledSocialListItem>
                <StyledTwitterLink href="https://www.linkedin.com/in/jackiehyho/">
                    <StyledTwitterImage />
                </StyledTwitterLink>
            </StyledSocialListItem>
            <StyledSocialListItem>
                <StyledYouTubeLink href="https://www.linkedin.com/in/jackiehyho/">
                    <StyledYouTubeImage />
                </StyledYouTubeLink>
            </StyledSocialListItem> */}
        </StyledSocialList>
    </StyledSocialContainer>
)

export default SocialMedia
