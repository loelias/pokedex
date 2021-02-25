import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  selectDetailsData,
  selectIsHoveringImage,
} from "../../redux/openedpokedex/openedpokedex.selectors";

import { setOnMouseOverImage } from "../../redux/openedpokedex/openedpokedex.actions";

import {
  setSearchField,
  setPageNumbers,
} from "../../redux/closedpokedex/closedpokedex.actions";

import pokedexLogo from "../../assets/retropokedex.png";

import {
  LeftDetailsContentContainer,
  BackgroundImage,
  NameNumberContainer,
  TypesContainer,
  TypeContent,
  PhysicalContainer,
  PhysicalContent,
  PokemonContent,
  PokedexTopHeaderContainer,
  PokedexBigCircleElement,
  PokedexInnerCircleElement,
  PokedexImageHeader,
} from "./leftside-content.styles";

export default function LeftSideContent() {
  const isHoveringImage = useSelector(selectIsHoveringImage);
  const {
    id,
    height,
    name,
    sprites,
    types,
    weight,
  } = useSelector(selectDetailsData, [isHoveringImage]);
  const history = useHistory();

  const dispatch = useDispatch();

  const handleMouseEnter = (event) => {
    event.target.classList.add("hover");
    imageOnHover(true);
  };

  const handleMouseLeave = (event) => {
    event.target.classList.remove("hover");
    imageOnHover(false);
  };

  const imageOnHover = (value) => {
    dispatch(setOnMouseOverImage(value));
  };

  function handleClick() {
    history.push("/");
    dispatch(setSearchField(""));
    dispatch(setPageNumbers([]));
  }

  return (
    <LeftDetailsContentContainer>
      <PokedexTopHeaderContainer>
        <PokedexBigCircleElement>
          <PokedexInnerCircleElement onClick={handleClick}>
            &lArr;
          </PokedexInnerCircleElement>
        </PokedexBigCircleElement>
        <PokedexImageHeader className="image" imageUrl={pokedexLogo} />
      </PokedexTopHeaderContainer>
      <NameNumberContainer>
        <BackgroundImage
          className="image"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          imageUrl={
            !sprites
              ? ""
              : isHoveringImage
              ? sprites.back_default
              : sprites.front_default
          }
        />

        <PokemonContent>{name ? name.toUpperCase() : ""}</PokemonContent>
        <PokemonContent>POKEDEX #{id}</PokemonContent>
      </NameNumberContainer>

      <TypesContainer>
        <TypeContent>TYPES</TypeContent>
        {types &&
          types.map((typeObject) => (
            <TypeContent key={typeObject.slot} {...typeObject}>
              {typeObject.type.name.toUpperCase()}
            </TypeContent>
          ))}
      </TypesContainer>

      <PhysicalContainer>
        <PhysicalContent>Height: {height * 10} cm</PhysicalContent>
        <PhysicalContent>Weight: {weight / 10} kg</PhysicalContent>
      </PhysicalContainer>
    </LeftDetailsContentContainer>
  );
}
