import React from 'react';
import {ScrollView, View, ImageBackground, Text, StyleSheet, Button, Image} from 'react-native';
import styled from 'styled-components';
import IMAGE from '../components/Image';

const a = () => {
  console.log('Vanya ti v poryadke')
}

export function FirstAidScreen() {
    return (
      <ScrollView>
        <TopView style={{marginHorizontal: 30}}>
          <IconBlock>
            <Image source={require('../image/icons/icon-first-aid.png')} style={{width: 28, height: 28, tintColor: '#79AA8D', marginBottom: 5}}/>
            <Text style={{fontSize: 30, fontWeight: '600', marginLeft: 17}}>First Aid</Text>
          </IconBlock>
          <Text style={{fontSize: 18, fontWeight: '400', paddingTop: 6, width: 367}}>
            Plant care isn’t always the easiest when you’re unsure of where to start. Once you learn plant care basics and find a routine, you’ll notice all the wonderful benefits of being a plant parent. 
          </Text>
        </TopView>
        <ImageView>
          <ImageCard>
            <Image source={require('../image/fa-img/WGuide.png')} />
            <BigText>Watering Guide</BigText>
            <SmallText>Basic watering 101</SmallText> 
          </ImageCard>
          <ImageCard>
            <Image source={require('../image/fa-img/LGuide.png')} />
            <BigText>Lighting Guide</BigText>
            <SmallText>Find your plants favorite spot</SmallText> 
          </ImageCard>
          <ImageCard>
            <Image source={require('../image/fa-img/NGuide.png')} />
            <BigText>Repotting Guide</BigText>
            <SmallText>Growing things need room</SmallText> 
          </ImageCard>
          <ImageCard>
            <Image source={require('../image/fa-img/RGuide.png')} />
            <BigText>Nutrient Guide</BigText>
            <SmallText>We all need to eat sometimes</SmallText> 
          </ImageCard>
          <ImageCard>
            <Image source={require('../image/fa-img/SGuide.png')} />
            <BigText>Shedding Guide</BigText>
            <SmallText>You can save your plant</SmallText> 
          </ImageCard>
          <ImageCard>
            <Image source={require('../image/fa-img/DGuide.png')} />
            <BigText>Diseases Guide</BigText>
            <SmallText>Is there a doctor here?</SmallText> 
          </ImageCard>
          
        </ImageView>
        
      </ScrollView>
      
    );
  }
  
  const IconBlock = styled(View)`
  align-items: flex-end;
  height: 101px;
  padding-bottom: 11px;
  flex-direction: row;
  `
  const TopView = styled(View)`
  height: 236px
  `
  const ImageView = styled(View)`
  height: 1535px;
  padding-left: 30px;
  padding-top: 29px;
  padding-bottom: 29px;
  justify-content: space-between
  `
  const ImageCard = styled(View)`
  
  `
  const BigText = styled(Text)`
  position: absolute;
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  margin-left: 30px;
  margin-top: 112px
  `
  const SmallText = styled(Text)`
  position: absolute;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  margin-left: 30px;
  margin-top: 151px
  `
  