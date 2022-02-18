import styled from 'styled-components';
import DailyQuote from '../components/DailyQuote';
import Header from '../components/Header';
import MapForm from '../components/MapForm';
import illustrator from '../../public/assets/img/Location tracking-pana.svg'

function welcomePage() {
    return (
        <WelcomeWrapper>
            <Header />
            <DailyQuote />
            <MapForm />

            <WelcomeCartoon src={illustrator.src} alt="illustration" />
        </WelcomeWrapper>
    )
}

export default welcomePage;

const WelcomeWrapper = styled.div`
    height: 100%;
    padding: 20px 25px;
`;

const WelcomeCartoon = styled.img`
    width: 324px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: -1;
`;