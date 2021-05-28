import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Movies from './Movies'
import Vierwers from './Vierwers'
import db from '../firebase'
import {useDispatch} from 'react-redux'
import { setMovies } from '../features/movie/movieSlice'
import { useHistory} from 'react-router-dom'
import { useSelector } from "react-redux"
import { selectUserEmail } from '../features/user/userSlice'
function Home() {
    const dispatch = useDispatch();
    const history = useHistory();
    const email = useSelector(selectUserEmail)

    useEffect(()=>{
        db.collection("movies").onSnapshot((snapshot) => {
            let tempMovies = snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });
            dispatch(
                setMovies(tempMovies)
            );
        })
        // if(!email){
        //     history.push("/login")
        // }
    }, [])

    return (
        <Container>
            <ImgSlider />
            <Vierwers />
            <Movies />
        </Container>
    )
}

export default Home

const Container = styled.main`
    min-height : calc(100vh - 70px);
    padding : 0 calc(3.5vw + 5px);
    position : relative;
    overflow-x: hidden;
    &:before {
        background : url("/images/home-background.png") center center / cover 
        no-repeat fixed;
        content: "";
        position: absolute;
        top :0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;

    }
    
`