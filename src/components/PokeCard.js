import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const Picture = styled.img`
  margin-top: 50px;
  width: 150px;
`;
export const Card = styled.div`
  background-color: #d6d6d6;
  height: 250px;
`;

export const BtnName = styled.button`
  cursor: pointer;
  border: none;
  color: white;
  background-color: red;
  max-height: 35px;
  min-height: 35px;
  margin: 0px 15px;
  border-radius: 10px;
`;

const PokeCard = (props) => {
  const history = useHistory();
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchList() {
      const response = await axios.get(props.pokeUrl);
      response?.data?.sprites?.front_default &&
        setImages(response.data.sprites.front_default);
    }
    fetchList();
  }, [props.pokeUrl]);

  return (
    <Card>
      <Picture src={images} />
      <div>
        <BtnName onClick={() => history.push(`detail/${props.pokeName}`)}>
          Ver Detalhes
        </BtnName>
        <BtnName onClick={() => props.addToPokedex(props.pokeUrl)}>
          Adicionar à Pokedex
        </BtnName>
      </div>
    </Card>
  );
};
export default PokeCard;
