import styled from "styled-components";
import Icon from "../../public/assets/img/gps-location.svg";
import Link from 'next/link';

const MapForm = () => {
    return (
        <MapFormWrap>
            <Text>Choose your Destination</Text>
            <Form>
                <InputBox>
                    <Label>Start</Label>
                    <Input placeholder="Current Location" />
                    <GPSIcon src={Icon.src} alt="Icon" />
                </InputBox>
                <InputBox>
                    <Label>End</Label>
                    <Input placeholder="Destination" />
                </InputBox>
                <Link href="/routespage">
                    <FormBtn>Get Direction</FormBtn>
                </Link>
            </Form>
        </MapFormWrap>
    );
}

export default MapForm;


const MapFormWrap = styled.div``;

const Text = styled.div`
    font-size: 16px;
    line-height: 27px;
    color: #fff;
    font-weight: nornal;
`;

const Form = styled.form`
    position: relative;
    margin-top: 20px;

    &::before{
        content: '';
        position: absolute;
        background: #fff;
        height: 60px;
        width: 2px;
        left: 0px;
        top: 15px;
    }
`;

const InputBox = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    margin-bottom: 15px;
    max-width: 95%;
    margin-left: auto;

    &::before{
        content: '';
        position: absolute;
        width: 12px;
        height: 12px;
        left: -5px;
        border-radius: 50px;
        background: #fff;
    }
`;

const Label = styled.label`
    color: #000;
    font-size: 18px;
    line-height: 27px;
    font-weight: normal;
    padding: 6px;
`;

const Input = styled.input`
    flex: 1;
    height: 100%;
    outline: none;
    border: none;
    padding: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

`;

const GPSIcon = styled.img`
    transition: 0.3s all;
    cursor: pointer;
    &:hover{
        opacity: 0.7;

    }
`;

const FormBtn = styled.button`
    background: linear-gradient(0deg, #438ef0, #438ef0),
        linear-gradient(0deg, #279cf1, #279cf1),
        linear-gradient(0deg, #1aaBef, #1aaBef),
        linear-gradient(0deg, #2cd3eb, #2cd3eb), #48bde5;

    border-radius: 5px;
    padding: 10px 35px;
    margin-top: 15px;
    font-size: 24px;
    line-height: 36px;
    color: #fff;
    border: none;
    width: 100%;
    transition: 0.3s all;
    cursor: pointer;

    &:hover{
        transform: scale(0.9);
    }
`;