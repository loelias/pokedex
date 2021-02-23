import {React } from 'react';
import { connect, useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

import { selectDetailsData } from "../../redux/openedpokedex/openedpokedex.selectors";

import {
  RightDetailsContentContainer,
  CloseContainer,
  DescriptionContainer,
  AbilitiesContainer,
  BaseStatsContainer,
  AbilitiesContent,
  DescriptionContent,
  BaseStatsContent
} from './rightside-content.styles';

export default function RightSideContent() {

	const {abilities, stats} = useSelector(selectDetailsData);

  const history = useHistory();

  function handleClick() {
    history.push('/');
  }
	
	return (
    <RightDetailsContentContainer>

      <CloseContainer onClick={handleClick}>
        &otimes;
      </CloseContainer>
      
      <AbilitiesContainer>
				<AbilitiesContent>
					ABILITIES
				</AbilitiesContent>

				{abilities && abilities.map((abilityObject) => (
          <AbilitiesContent key={abilityObject.slot}{...abilityObject}>
            {abilityObject.ability.name.toUpperCase()}
				  </AbilitiesContent>
        ))}
      </AbilitiesContainer>

      <BaseStatsContainer>
        {stats && stats.map((statObject) => (
          <BaseStatsContent key={statObject.stat.name}{...statObject}>
            {statObject.stat.name.toUpperCase()}<br/>
            {statObject.base_stat}<br/>
            Effort: {statObject.effort}<br/>
				  </BaseStatsContent>
        ))}

      </BaseStatsContainer>
    </RightDetailsContentContainer>
  );
}


// {abilities && abilities.map((abilityObject) => (
//   <AbilitiesContent key={abilityObject.slot}{...abilityObject}>
//     {abilityObject.ability.name.toUpperCase()}