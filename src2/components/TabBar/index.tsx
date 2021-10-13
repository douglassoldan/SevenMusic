import React from 'react';
import {Container, SubContainer, GroupAction, ActionName} from './styles';

const TabBar = () => {
  return (
    <Container>
      <SubContainer>
        <GroupAction>
          <ActionName> Home </ActionName>
        </GroupAction>
        <GroupAction>
          <ActionName> Search </ActionName>
        </GroupAction>
      </SubContainer>
    </Container>
  );
};

export default TabBar;
