import styled from 'styled-components';

export const Page = styled.div`
`

export const Grid = styled.div`
    position: relative;
    span {
        color: #ba8989;
    }
`

export const Warning = styled.div`
    position: absolute;
    height: 30px;
    top: -40px;
    right: 10px;
    border: 1px solid #000;
    padding: 0 15px;
    font-size: 14px
`

export const Row = styled.div`
    display: flex;

    @media (max-width: 768px){
        flex-direction: column;
        width: 100%;
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 280px;
    margin: 20px 20px 0 10px;
    padding: 20px;

   >  img {
        width: 170px;
        border-radius: 50%;
    }

    @media (max-width: 600px){
        margin: 20px auto;
    }

    background-color: #fff;


    h6 {
        margin-bottom: 7px;
    }

    p {
        color: #ba8989;
    }
`

export const CardAbout = Card.extend`
    width: 33%;
    @media (max-width: 768px){
        width: 100%;
    }
    span {
        color: #ba8989;
        font-weight: bold;
    }
`

export const CardAboutWide = CardAbout.extend`
    width: 70%;
    @media (max-width: 768px){
        width: 100%;
    }
`

export const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 0;
    background-color: #f4f7f6;
`

export const Logo = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: center;
    font-size: 22px;


    img {
        width: 20px;
        height: 20px;
        margin-left: 10px;
        margin-top: 3px;
        color: black;
    }
`

export const Navigation = styled.div`
    @media (max-width: 650px){
        display: none;
    }
    a {
        position: relative;
        margin: 0 20px;
        font-size: 22px;
    }

    a:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 1px;
            bottom: 0;
            left: 0;
            background-color: #000;
            visibility: hidden;
            transform: scaleX(0);
            transition: all 0.3s ease-in-out 0s;
    }
    a:hover:before {
        visibility: visible;
        transform: scaleX(1);
    }
   
`

export const ToggledNavWrapper = styled.ul`
    padding: 20px;
    margin: 10px 0;
    text-align: center;

    background-color: #f4f7f6;
    display: flex;
    flex-direction: column;

    li {
        padding-top: 5px;
    }
`

export const DraverWrapper = styled.div`
    text-align: center;
    padding-top: 10px;
    @media (min-width: 650px){
        display: none;
    }
    div {
        width: 50px;
        height: 30px;
        position: relative;
        margin: 20px auto;
        transform: rotate(0deg);
        transition: .5s ease-in-out;
        cursor: pointer;
    }
    span {
        display: block;
        position: absolute;
        height: 5px;
        width: 100%;
        border-radius: 9px;
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: .25s ease-in-out;
        background: #f2d1d1;
    }
    span:nth-child(1) {
        top: ${props => props.open ? '9px' : '0px'};
        transform: ${props => props.open ? 'rotate(135deg)' : 'null'}
    }
    span:nth-child(2) {
        top: 9px;
        opacity: ${props => props.open ? '0' : '1'};
        left: ${props => props.open ? '-60px' : 'null'};
    }
      span:nth-child(3) {
        top: ${props => props.open ? '9px': '18px'};
        transform: ${props => props.open ? 'rotate(-135deg)': 'null'} ;
    }
`

export const LongCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-align: center;

    p {
        padding-top: 0;
    }

    ul {
        margin-left: 0;
    }

    ul li {
        margin-bottom: 0;
    }
`

export const LongCard = styled.div`
    font-size: 20px;
    width: 100%;
    margin-top: 20px;
    padding: 20px;
    background-color: #fff4f4;
    text-align: center;
`

export const CardWrapper = styled.div`
   display: flex;
   justify-content: space-around;
   @media (max-width: 600px){
       flex-direction: column;
   }
`


export const Social = styled.div`
    display: flex;
    
    a {
        width: 20px;
        margin-right: 15px;
    }
`


export const Team = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    text-align: center;

    span {
        color: #ba8989;
    }

    h4 {
        font-size: 25px;
    }
`

export const FooterWrapper = styled.div`
    padding-top: 20px;
    background-color: #f4f7f6;
    text-align: center;

    a {
        font-weight: bold;
    }

    p {
        padding: 5px;
    }
`

export const SocialWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px 0;
    height: 50px;
    // margin-top: 20px;
    background-color: #f4f7f6;

    a {
        display: flex;
        align-items: flex-start;
        // padding: 10px;
    }

    img {
        margin-left: 10px;
        width: 20px;
    }
`

export const Link = styled.div`
    display: flex;
    flex-direction: column;
`

export const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;

    margin-left: 10%;
    margin-top: 50px;

   
`

export const CurrentPost = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    justify-content: space-beetwen;

    @media (max-width: 1200px){
        flex-direction: column;
    }
    

    p {
        border: 1px solid black;
        height: 100px;
        margin-left: 30px;
        align-self: center;
        padding: 30px;
    }
`

export const GridImages = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-left: 50px;

    div:nth-child(even){
        align-self: flex-end;
        margin-right: 50px;
    }
    
`

