import React from 'react'
import {ScrollView, View, ImageBackground, Text, StyleSheet, Button, Image} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import styled from 'styled-components';
import { IMAGE } from '../components/Image';

export function PlantLibraryScreen() {
    return (
      <ScrollView>
        <TopView>
          <IconBlock>
            <Image source={IMAGE.ICON_PL} style={{width: 28, height: 28, tintColor: '#79AA8D'}}  />
            <Text style={{fontSize: 30, fontWeight: '600', marginLeft: 16}}>Plant Library</Text>
          </IconBlock>
          <SerchBlock>
            <Image source={IMAGE.S_ICON} style={{width: 20, height: 20, marginLeft: 15, marginRight: 10}}/>
            <TextInput placeholder='Name, difficulty, room, etc...' />
          </SerchBlock>

          <TopFilterCard>
            <CardShape>
              <CardText>Easy indoor plants</CardText>
            </CardShape>
            <CardShape>
              <CardText>Animal friendly </CardText>
            </CardShape>
          </TopFilterCard>

          <BottomFilterCard>
            <CardShape>
              <CardText>Popular plants</CardText>
            </CardShape>
            <CardShape>
              <CardText>Low light plants</CardText>
            </CardShape>
          </BottomFilterCard>

        </TopView>
        <LibView>

        </LibView>
      </ScrollView>
    );
  }
  const CardText = styled(Text)`
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  `
  const CardShape = styled(View)`
  width: 169px;
  height: 48px;
  background-color: #ECECEC;
  border-radius: 10px;
  justify-content: center;
  `
  const TopView = styled(View)`
  height: 292px;
  margin-top: 50px;
  margin-left: 30px;
  margin-right: 30px;
  `
  const LibView = styled(View)`

  `
  const IconBlock = styled(View)`
  flex-direction: row;
  align-items: center
  `
  const SerchBlock = styled(View)`
  flex-direction: row;
  align-items: center;
  border: 1px;
  border-color: #B9B9B9;
  border-radius: 54px;
  margin-top: 17px;
  width: 354px;
  height: 45px;
  `
  const TopFilterCard = styled(View)`
  flex-direction: row;
  margin-top: 14px;
  justify-content: space-between;
  `
  const BottomFilterCard = styled(View)`
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-between;
  `