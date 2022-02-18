import styled from "styled-components";
import DecisionBoard from "../components/DecisionBoard";
import mapboxgl from "mapbox-gl";
import { useEffect } from "react";
import BackArrow from "../../public/back-arrow.svg";
import Link from "next/link";

mapboxgl.accessToken = 'pk.eyJ1IjoiYWRlbWlyY3IwNyIsImEiOiJja3pyNWo4NjAwYjl0MndwNHgyemtxcnh5In0.S2mjp9Li1Kd-08BLqkEGUw';


function routespage() {
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/ademircr07/ckzr8ksfb002414leiei8djeo',
      center: [-84.1074227, 9.9366709],
      zoom: 15.5,

    });
  })

  return (
    <RouteWrap>
        <Link href={"/welcomepage"}>
          <BackBtn>
            <BackIcon src={BackArrow.src} atl="icon" />
          </BackBtn>
        </Link>
        <Map id="map"></Map>
        <DecisionBoard />
    </RouteWrap>
  );
}

export default routespage;

const RouteWrap = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Map = styled.div`
    flex: 1;
`;

const BackBtn = styled.button`
  background: #0e2a47;
  position: absolute;
  height: 45px;
  width: 45px;
  top: 20px;
  left: 25px;
  border-radius: 50px;
  z-index: 2;
  cursor: pointer;
  border: 1px solid #fff;
  display: grid;
  place-items: center;

  &hover{
    transform: scale(0.95);
  }
`;

const BackIcon = styled.img`

`

