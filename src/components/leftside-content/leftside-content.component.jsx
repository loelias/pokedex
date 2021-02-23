import {React } from 'react';
import { connect, useSelector, useDispatch } from "react-redux";


// import { createStructuredSelector } from "reselect";
// import { withRouter } from 'react-router-dom';

import { selectDetailsData ,selectIsHoveringImage } from "../../redux/openedpokedex/openedpokedex.selectors";
import { setOnMouseOverImage } from "../../redux/openedpokedex/openedpokedex.actions";

import {
	LeftDetailsContentContainer,
  BackgroundImage,
  NameNumberContainer,
  TypesContainer,
  TypeContent,
  PhysicalContainer,
  PhysicalContent,
  PokemonContent,
} from './leftside-content.styles';

export default function LeftSideContent() {

	const isHoveringImage = useSelector(selectIsHoveringImage);
	const {id, abilities, height, name, sprites, types, stats, weight} = useSelector(selectDetailsData, [isHoveringImage]);
	
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


	return (
    <LeftDetailsContentContainer>
      <NameNumberContainer>
        <BackgroundImage
          className="image"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					imageUrl={ 
							!sprites ? 
								"" : 
								isHoveringImage ? sprites.back_default :
									sprites.front_default } 
        />

        <PokemonContent>
					{name ? name.toUpperCase() : ""}
				</PokemonContent>
				<PokemonContent>
					POKEDEX #{id}
				</PokemonContent>
      </NameNumberContainer>

      <TypesContainer>
				<TypeContent>
					TYPES
				</TypeContent>
				{abilities && abilities.map((abilityObject) => (
					<TypeContent key={abilityObject.slot}{...abilityObject}>
						{abilityObject.ability.name.toUpperCase()}
					</TypeContent>
				))}
      </TypesContainer>

      <PhysicalContainer>
        <PhysicalContent>Height: { height * 10 } cm</PhysicalContent>
        <PhysicalContent>Weight: { weight / 10 } kg</PhysicalContent>
      </PhysicalContainer>
    </LeftDetailsContentContainer>
  );
}

// onMouseEnter={() => setOnMouseOverImage()}
// onMouseLeave={() => setOnMouseOutImage()}
// imageUrl={ 
// 	!sprites ? 
// 		"" : 
// 		isHoveringImage ? sprites.back_default : sprites.front_default} 

// const LeftSideContent = ({ isHoveringImage, sprites, abilities, dispatch, history }) => (
// 	<LeftDetailsContentContainer>
// 		<NameNumberContainer>
//   		<BackgroundImage 
// 				className='image'
// 				imageUrl={ 
// 					!sprites ? "" : sprites.front_default} 
// 			/>

// 			{abilities && abilities.map((abilityObject) => (
// 				<PokemonContent key={abilityObject.slot}{...abilityObject}>
// 					{abilityObject.ability.name}
// 				</PokemonContent>
// 			))}

// 			<PokemonContent>
// 			</PokemonContent>
//   	</NameNumberContainer>

// 		<TypesContainer>
// 			<TypeContent>
// 				World
// 			</TypeContent>
// 		</TypesContainer>

// 		<PhysicalContainer>
// 			<PhysicalContent>
// 				!!!!
// 			</PhysicalContent>
// 		</PhysicalContainer>		
// 	</LeftDetailsContentContainer> 
// );

// // const mapStateToProps = createStructuredSelector({
// // 	isHoveringImage: selectIsHoveringImage,
// // })

// // const mapDispatchToProps = dispatch => ({
// //   setOnMouseOverImage: () => dispatch(setOnMouseOverImage()),
// //   setOnMouseOutImage: () => dispatch(setOnMouseOutImage()),
// // });

// // export default withRouter(
// // 	connect(
// // 		mapStateToProps,
// // 		mapDispatchToProps)(LeftSideContent));

// // export default connect(mapStateToProps, mapDispatchToProps)(LeftSideContent)

// export default LeftSideContent;