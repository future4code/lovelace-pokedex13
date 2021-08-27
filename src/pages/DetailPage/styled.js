import styled from "styled-components";
// import PokeBall from "../../img/pokeBall.png";

export const Container = styled.div`
  display: flex;

  h3 {
    text-align: "center";
    font-size: "1.5rem";
    margin-top: "1vh";
  }
`;
export const Figure = styled.img`
  width: 20vw;
`;
export const Power = styled.div`
  background-color: lightgray;
  margin: 20px;
  width: 23vw;
  padding: 20px;
`;
export const Text = styled.div`
  line-height: 7vh;
  padding: 10px;
`;
export const Types = styled.div`
  background-color: lightgray;
  margin: 20px;
  width: 23vw;
  height: 15vh;
  padding: 5px;
`;
export const Moves = styled.div`
  background-color: lightgray;
  margin: 20px;
  width: 23vw;
  height: 55vh;
  padding: 5px;
`;
export const MovesAndTypes = styled.div`
  /*este styled apesar de conter
	nenhuma iformação foi necessário
	para manter as duas ultimas divs
	em posições de coluna*/
`;
