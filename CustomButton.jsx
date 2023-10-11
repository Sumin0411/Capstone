import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native'


const ButtonContainer = styled.TouchableOpacity.attrs(props => ({
  background: props.background,
  border: props.border,
  fontColor : props.fontColor
}))`
    background-color: ${props => props.background};
    border-radius: 5px;
    padding: 15px;
    margin: 10px 0px;
    justify-content: center;
    border : ${props => props.border} 1px solid;
`;

const Title = styled.Text.attrs(props => ({
  fontColor : props.fontColor
}))`
    font-weight: 500;
    color: ${props => props.fontColor};
    text-align : center;
`;


export default class CustomButton extends Component{
  static defaultProps = {
    title: '',
    background : '#2196F3',
    border : '#2196F3',
    fontColor : '#FFFFFF',
    onPress: () => null,
  }

  constructor(props){
    super(props);
  }

  render(){
    return (
      <ButtonContainer 
        background={this.props.background}
        border={this.props.border}
       
        onPress={this.props.onPress}>
          
        <Title  fontColor= {this.props.fontColor}>{this.props.title}</Title>
      </ButtonContainer>
    )
  }
}

