import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderDiv = styled.header`
  background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;
const Title = styled.h1`
  color: white;
  font-size: 1.5em;
  padding: 10px;
`;
const Button = styled.button`
  font-size: 1rem;
  width: 10vw;
  height: 6vh;
  border-radius: 30px;
  border: none;
  outline: 0;
  cursor: pointer;
  margin-right: 10px;
`;

const HomeHeader = () => {
  const homePage = window.location.pathname.includes("pokedex");

  return (
    <HeaderDiv>
      <Title>Pokemon Lista</Title>
      {homePage ? (
        <Link to="/">
          <Button>Voltar</Button>
        </Link>
      ) : (
        <Link to="/pokedex">
          <Button>Ir para pokedex</Button>
        </Link>
      )}
    </HeaderDiv>
  );
};
export default HomeHeader;
