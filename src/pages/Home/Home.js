import PokeCard from "../../components/PokeCard";
import HomeHeader from "./HomeHeader";
import { useState, useEffect } from "react";
import axios from "axios";
import { WaveTopBottomLoading } from "react-loadingg";
import styled from "styled-components";

export const ContainerGeneral = styled.div`
  background-color: #fff;
  display: grid;
  text-align: center;
  grid-template-columns: repeat(4, 1fr);
  padding: 20px;
  gap: 20px;

  @media screen and (min-width: 577px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const Home = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getPokemons() {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
      response?.data?.results && setPokemons(response.data.results);
    }
    setLoading(false);
    getPokemons();
  }, []);

  return (
    <>
      <HomeHeader />
      <ContainerGeneral>
        {isLoading ? (
          <WaveTopBottomLoading color="#DD3A32" />
        ) : (
          pokemons?.map((pokemon) => {
            return (
              <PokeCard
                key={pokemon.name}
                addToPokedex={props.addToPokedex}
                pokeName={pokemon.name}
                pokeUrl={pokemon.url}
              />
            );
          })
        )}
      </ContainerGeneral>
    </>
  );
};
export default Home;
