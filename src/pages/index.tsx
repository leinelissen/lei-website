import Image from 'next/image';
import styled, { keyframes } from 'styled-components';
import GithubIcon from '@/assets/github.svg';
import LinkedinIcon from '@/assets/linkedin.svg';
import TwitterIcon from '@/assets/twitter.svg';
import EnvelopeIcon from '@/assets/envelope-sharp-solid.svg';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

const slideInLeft = keyframes`
    0% {
        opacity: 0.1;
        transform: translateX(-50%);
    }
    100% {
        opacity: 0.25;
        transform: translateX(0%);
    }
`;

const slideInTop = keyframes`
    0% {
        opacity: 0.1;
        transform: translateY(-50%);
    }
    100% {
        opacity: 0.25;
        transform: translateY(0px);
    }
`

const slideInRight = keyframes`
    0% {
        opacity: 0.1;
        transform: rotate(180deg) translateX(-50%);
    }
    100% {
        opacity: 0.25;
        transform: rotate(180deg) translateX(0%);
    }
`

const slideInBottom = keyframes`
    0% {
        opacity: 0.1;
        transform: rotate(180deg) translateY(-50%);
    }
    100% {
        opacity: 0.25;
        transform: rotate(180deg) translateX(0%);
    }
`

const Container = styled.main`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    height: 100vh;
    padding: 32px;
    gap: 32px;
    display: flex;
    flex-direction: column;
`;

const Header = styled.nav`
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MainFrame = styled.a`
    background-color: rgb(0, 0, 50, 0.05);
    flex-grow: 1;
    position: relative;
    overflow: hidden;
    color: inherit;

    img {
        object-fit: cover;
        filter: grayscale(0.95) contrast(1.2);
        transition: filter 10s ease;

        &:hover {
            filter: grayscale(0.2) contrast(1);
        }
    }
`;

const Title = styled.div`
    position: absolute;
    color: white;
    text-shadow: 0px 36px 80px rgba(0, 0, 0, 0.1), 0px 15.0399px 33.4221px rgba(0, 0, 0, 0.0767701), 0px 8.04107px 17.869px rgba(0, 0, 0, 0.0698861), 0px 4.50776px 10.0172px rgba(0, 0, 0, 0.0646399), 0px 2.39404px 5.32008px rgba(0, 0, 0, 0.0575249), 0px 0.996212px 2.21381px rgba(0, 0, 0, 0.0440882);
    animation: ${slideInLeft} 10s cubic-bezier(0,1,0,1);
    animation-fill-mode: forwards;
    mix-blend-mode: difference;
    opacity: 0.25;

    h1 {
        font-size: 32px;
    }

    &.left {
        left: 32px;
        top: 32px;
    }

    &.top {
        right: 32px;
        top: 32px;
        writing-mode:vertical-lr;
        animation-name: ${slideInTop};
        transform-origin: 'top left';
    }

    &.right {
        right: 32px;
        bottom: 32px;
        animation-name: ${slideInRight};
    }

    &.bottom {
        left: 32px;
        bottom: 32px;
        writing-mode:vertical-lr;
        animation-name: ${slideInBottom};
        transform-origin: 'top left';
    }
`;

const SubTitle = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    /* background-color: black; */
    color: white;
    padding: 36px;
    max-width: min(25vw, 400px);
    min-width: 200px;
    backdrop-filter: grayscale(1) invert(1) brightness(0.25);
`;

const ButtonRow = styled.div`
    display: flex;
    gap: 16px;
`;

export default function Home() {
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    const title = <h1>// LEI //</h1>;

    return (
        <Container>
            <Header>
                <p>Lei &nbsp;&mdash;&nbsp; Design Technologist</p>
                <ButtonRow>
                    <Button href="https://github.com/leinelissen" target="_blank" icon={<GithubIcon />}>
                        GitHub
                    </Button>
                    <Button href="https://twitter.com/lei_nelissen" target="_blank" icon={<TwitterIcon />}>Twitter</Button>
                    <Button href="https://www.linkedin.com/me/leinelissen/" target="_blank" icon={<LinkedinIcon />}>LinkedIn</Button>
                    <Button href="mailto:lei@codified.nl" target="_blank" icon={<EnvelopeIcon />}>Email</Button>
                </ButtonRow>
            </Header>
            <MainFrame href="https://fintunes.app" target="_blank">
                <Image src="/silhouette.png" alt="Lei" fill />
                <Title className="left">{title}</Title>
                <Title className="top">{title}</Title>
                <Title className="right">{title}</Title>
                <Title className="bottom">{title}</Title>
            </MainFrame>
        </Container>
    );
}