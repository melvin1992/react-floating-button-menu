/* eslint-disable */
import React, { Component } from 'react';
import styled from 'styled-components';
import MdAdd from 'react-icons/lib/md/add';
import MdClose from 'react-icons/lib/md/close';
import { FloatingMenu, MainButton, ChildButton } from 'react-floating-button-menu';

const StyledFloatingMenu = styled(FloatingMenu)`
  margin-right: 80px;
  margin-bottom: 30px;
`;

const Contanier = styled.div`
  display: flex;
`;

const SampleBox = styled.div`
  display: flex;
  background: #fafafa;
  box-shadow: 0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.28);
  width: 500px;
  height: 300px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

class App extends Component {
  state = {
    isClicked: false,
  };

  render() {
    return (
      <Contanier>
        <SampleBox>
          <h2></h2>
          <StyledFloatingMenu slideSpeed={500} direction="right">
            <MainButton
              iconResting={MdAdd}
              iconActive={MdClose}
              iconColor="white"
              backgroundColor="black"
              buttonSize="56"
            />
            <ChildButton
              iconButton={MdAdd}
              iconColor="black"
              order={1}
              backgroundColor="white"
              buttonSize="40"
              offset={8}
            />
            <ChildButton
              iconButton={MdAdd}
              iconColor="black"
              order={2}
              backgroundColor="white"
              buttonSize="40"
              offset={8}
            />
          </StyledFloatingMenu>
        </SampleBox>
      </Contanier>
    );
  }
}

export default App;