import styled from "styled-components";
import Icon from '../../public/assets/img/pointer.svg';

function DailyQuote() {
  return (
    <QuoteWrap>
        <Quote>It feels good to be lost in the right direction.</Quote>
        <QuoteSignIcon src={Icon.src} alt="icon" />
    </QuoteWrap>
  )
}

export default DailyQuote;

const QuoteWrap = styled.div`
    max-width: 330px;
    margin: 30px auto 20px;
    padding: 18px 16px;
    background: linear-gradient(0deg, rgba(31, 128, 255,0.67),
    rgba(31,128,255,0.67)),
    linear-gradient(0deg, #0056c6, #0056c6), rgba(101, 207, 253, 0.3);
    border-radius: 20px;
    display: flex;
`;

const Quote = styled.p`
    font-size: 14px;
    font-weight: 500;
    line-height: 27px;
    color: #fff;
`;

const QuoteSignIcon = styled.img`
    width: 50px;
    height: 50px;
`;