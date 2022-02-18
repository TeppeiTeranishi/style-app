import styled from "styled-components";
import Car from "../../public/car.svg";
import Bike from "../../public/bike.svg";
import Bus from "../../public/bus.svg";
import Walking from "../../public/walk-directions.svg";


const DecisionBoard = () => {
    return (
        <DecisionWrap>
            <TravelTxt>Travel Mode</TravelTxt>
            <ChoiceWrap>
                <PickTravel>
                    <IconImg src={Car.src} alt="car" />
                    <TravelTitle>Car</TravelTitle>
                </PickTravel>
                <PickTravel>
                    <IconImg src={Bike.src} alt="car" />
                    <TravelTitle>Bicycle</TravelTitle>
                </PickTravel>
                <PickTravel>
                    <IconImg src={Bus.src} alt="car" />
                    <TravelTitle>Bus</TravelTitle>
                </PickTravel>
                <PickTravel>
                    <IconImg src={Walking.src} alt="car" />
                    <TravelTitle>Walking</TravelTitle>
                </PickTravel>
            </ChoiceWrap>
            <ReportsTxt>Reports</ReportsTxt>
            <ReportList>
                <ReportItem>
                    <RTime>
                        <Time>255</Time>
                        <Rformat>Min</Rformat>
                    </RTime>
                    <RBox>
                        <RTpara>This route takes the longest path</RTpara>
                        <RIcon src={Car.src} alt="icon" />
                    </RBox>
                </ReportItem>
            </ReportList>
        </DecisionWrap>
    )
}

export default DecisionBoard;

const DecisionWrap = styled.div`
    flex: 1;
    padding-bottom: 20px;
`;

const TravelTxt = styled.h2`
    position: relative;
    font-size: 28px;
    font-weight: 500;
    line-height: 42px;
    color: #fff;
    padding: 15px 25px;
    
    &:after{
        content: url(compass.svg);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        width: 42px;
        height: 42px;
        margin-left: 20px;
    }
`;

const ChoiceWrap = styled.div`
    display: flex;
    padding: 12px 25px 25px;
    overflow-y: scroll;

    &::-webkit-scrollbar{
        width: 0;
        background: transparent;
    }
`;

const PickTravel = styled.div`
    width: 100%;
    background-color: #fff;
    padding: 10px 12px;
    margin: 0 6px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s all;

    &:hover{
        /*box-shadow: 0px 16px 20px rgba(0.0.0.3);*/
        /*box-shadow: rgba(0, 0, 0, 0.15) 0px 7px 29px 0px;*/
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
        transform: translateY(-10px);
    }
`;

const IconImg = styled.img`
    width: 50px;
`;

const TravelTitle = styled.h4`
    font-size: 18px;
    font-weight: normal;
    color: #000;
`;

const ReportsTxt = styled.h6`
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    color: rgba(255, 255, 255, 0.65);
    padding: 0 25px;
`;

const ReportList = styled.div`
    padding: 0 25px;
`;

const ReportItem = styled.div`
    max-width: 80%;
    margin-inline: auto;
    background: #fff;
    border-radius: 15px;
    margin-top: 15px;
    display: flex;
    cursor: pointer;
    transition: 0.3s all;

    &:hover{
        transform: scale(0.97);
    }

`;
const RTime = styled.div`
    background: #f1c495;
    padding: 12px;
    width: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
`;

const Time = styled.h6`
    color: #0e2a47;
    font-size: 24px;
    line-height: 18px;
    text-align: center;
    font-weight: 500;
    margin-bottom: 4px;
`;

const Rformat = styled.span`
    color: #0e2a47;
    font-weight: 400;
`;

const RTpara = styled.p`
    color: #0e2a47;
`;

const RIcon = styled.img`
    width: 50px;
`;

const RBox = styled.div`
    flex: 1;
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`