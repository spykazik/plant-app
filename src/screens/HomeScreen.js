import React from 'react'
import {ScrollView, View, ImageBackground, Text, StyleSheet, Button, Image} from 'react-native'
import {IMAGE} from '../components/Image'
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';



export function HomeScreen() {
  return (
    <ScrollView>
      <HeadView style={{flexDirection: 'row'}}>
        <HeadImageBackground source={IMAGE.FIRST_HOME_IMG}>
          <ImgText>
            Discover beautiful houseplants and learn how to care of them
          </ImgText> 
        </HeadImageBackground>
      </HeadView>

      <SecondView>
        <SmallText>
            Looking for something easy to get started? Or are you searching for that one plant that will look great in your bedroom? These quick categories will get you started quickly!
        </SmallText>
      </SecondView>

      <ThirdView>
        <HeadText>
          What plant are you looking for? 
        </HeadText>
        <ImgBlock>
          <Touch>
            <ImageSized source={IMAGE.EI_PL}/>
            <CardText>Easy indoor plants</CardText>
          </Touch>
          <Touch>
            <ImageSized source={IMAGE.AF_PL}/>
            <CardText>Animal friendly plants</CardText>
          </Touch>
        </ImgBlock>
        <ImgBlock style={{paddingTop: 15, paddingBottom: 60}}>
          <Touch>
            <ImageSized source={IMAGE.P_PL}/>
            <CardText>Popular plants</CardText>
          </Touch>
          <Touch>
            <ImageSized source={IMAGE.LL_PL}/>
            <CardText>Low light plants</CardText>
          </Touch>
        </ImgBlock >
      </ThirdView>

      <VioletaView>
          <VFText >Need some extra help? Ask Violet!</VFText>
          <Image source={IMAGE.VIOLETA} style={{marginTop: 31, width: 134, height: 134}}/>
          <VCard>
            <VSText>Hey, I'm Violet!</VSText>
            <VTText>There are so many plants to choose from it’s easy to feel lost. Let me help you pick something.</VTText>
          </VCard>
          <TouchableOpacity>
            <VButton>
              <VTText style={{fontWeight: '600'}}>Start Chat</VTText>
            </VButton>
          </TouchableOpacity>
      </VioletaView>
       
      <LastView>
        <Text style={{fontSize: 20, fontWeight: '600', paddingBottom: 25}}>
          Want to develop your green thumb? Check out these guides:
        </Text>
        <TouchableOpacity>
          <TouchingView>
            <Image source={IMAGE.WG} style={{justifyContent: 'flex-start'}}/>
            <Block>
              <BText>Watering Guide</BText>
              <SText>Quickly learn all about basic watering!</SText>
            </Block>
          </TouchingView>
        </TouchableOpacity>
        <TouchableOpacity>
          <TouchingView>
            <Image source={IMAGE.LG} style={{justifyContent: 'flex-start'}}/>
            <Block>
              <BText>Lighting Guide</BText>
              <SText>What’s the best place for your new plant?</SText>
            </Block>
          </TouchingView>
        </TouchableOpacity>
      </LastView>
      
    </ScrollView>
  );
} 
  const VCard = styled(View)`
  background-color: #769484;
  width: 294px;
  height: 114px;
  border-radius: 5px;
  margin-top: 15px;
  padding-top: 15px;
  padding-left: 25px;
  padding-right: 12px;
  `
  const VSText = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  `
  const VTText = styled(Text)`
  color: #fff;
  font-size: 16px;
  `
  const VButton = styled(View)`
  margin-top: 24px;
  background-color: #315240;
  border-radius: 36px;
  width: 138px;
  height: 48px;
  align-items: center;
  justify-content: center;
  `
  const VFText = styled(Text)`
  margin-top: 66px;
  color: #fff;
  font-size: 28px;
  font-weight: 600;
  width: 314px;
  text-align: center;
  `
  const Touch = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  
  `
  const Block = styled(View)`
  flex-direction: column;
  margin-top: 25px;
  margin-left: 25px;
  `
  const SText = styled(Text)`
  font-size: 16px;
  width: 182px;
  `
  const CardText = styled(Text)`
  position: absolute;
  font-size: 16px;
  display: flex;
  text-align: center;
  align-items: center;
  color: #fff;
  width: 118px;
  `
  const BText = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  `
  const TouchingView = styled(View)`
  width: 350px;
  height: 114px;
  background-color: #ECECEC;
  border-radius: 5px;
  margin-top: 15px;
  flex-direction: row;
  `
  const ImageSized = styled(Image)`
    width: 169px;
    height: 135px

  `
  const LastView = styled(View)`
    height: 417px;
    background-color: #fff;
    height: 417px;
    padding-top: 43px;
    padding-left: 32px;
    padding-right: 32px;
  `

  const VioletaView = styled(View)`
    height: 554px;
    background-color: #547965; 
    align-items: center;
  `

  const ImgBlock = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    padding-left: 31px;
    padding-right: 30px;
    
  `

  const HeadText = styled(Text)`
  width: 350px;
  height: 27px;
  margin-left: 32px;
  margin-top: 12px;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  margin-bottom: 24px
`
const ThirdView = styled(View)`
  background-color: #fff;
`

const SmallText = styled(Text)`
  font-size: 16px;
  line-height: 24px;
  color: black;
  margin-left: 32px;
  margin-top: 35px;
  margin-right: 32px;
  margin-bottom: 7px;
`

const SecondView = styled(View)`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;

  
`

const HeadView = styled(View)`
  flex: 1; 
  flex-direction: column; 
  background-color: #fff;
`
const HeadImageBackground = styled(ImageBackground)`
  flex: 1;
  /*resize: cover;*/ 
  justify-content: center; 
  position: relative; 
  width: 414px; 
  height: 273px;
`
const ImgText = styled(Text)`
  left: 53px;
  top: 97px;
  width: 308px; 
  height: 101px;
  position: absolute;

  color: #fff; 
  font-size: 25px; 
  line-height: 31px; 
  display: flex;
  justify-content: center;
  align-items: center;
`

