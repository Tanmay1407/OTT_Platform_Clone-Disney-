import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { setUserLogin } from '../features/user/userSlice'
import { auth, provider } from '../firebase'
function Login() {
    const dispatch = useDispatch()
    const history = useHistory()
    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then((result)=>{
          let user = result.user
         dispatch(setUserLogin({
           name: user.displayName,
           email: user.email,
           photo: user.photoURL
         }))
         history.push('/')
        })
    }
    return (
        <Container>
        <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg"/ >
            <SignUp onClick={signIn}>
                GET ALL THERE!!
            </SignUp>
            <Discription>
            Get Access to Premier Series !
            </Discription>
            <CTALogoTwo src="/images/cta-logo-two.png"/ >
        </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
position: relative;
height: calc(100vh - 70px);
display: flex;
align-items: top;
justify-content: center;


&:before{
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
position: absolute;
content: "";
top: 0;
bottom: 0;
left: 0;
right:0;
z-index: -1;
opacity: 0.7;
}


`
const CTA = styled.div`
max-width: 650px;
padding: 80px 40px;
width: 90%;
display:flex;
flex-direction: column;
margin-top: 100px;
align-items:center;

`
const CTALogoOne = styled.img`

`
const SignUp = styled.a`
width: 100%;
background-color: #0063e5;
font-weight: bold;
padding: 17px 0 ;
color: #f9f9f9;
border-radius: 4px;
text-align: center;
font-size: 18px;
cursor: pointer;
transition: all 250ms;
letter-spacing: 1.5px;
margin-top: 8px;
margin-bottom: 12px;

&:hover{
    background: #0483ee;
  
}
`
const Discription = styled.p`
font-size: 11px;
letter-spacing: 1.5px;
text-align: center;
line-height: 1.5;
`

const CTALogoTwo = styled(CTALogoOne)`
    width: 90%;
    
`