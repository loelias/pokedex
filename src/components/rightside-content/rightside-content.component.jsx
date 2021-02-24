import {React } from 'react';
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import { selectDetailsData } from "../../redux/openedpokedex/openedpokedex.selectors";

import {
  RightDetailsContentContainer,
  CloseContainer,
  AbilitiesContainer,
  BaseStatsContainer,
  AbilitiesContent,
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
        <BaseStatsContent>
          BASE STATS
        </BaseStatsContent>

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