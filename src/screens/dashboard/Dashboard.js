/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar
} from 'react-native';

import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

import {NavHeader} from '../../components'
import { primaryColor, white } from '../../Dimens';

export class Dashboard extends Component {
    render () {
        return (
            <View
            style={{
                flex: 1,
                backgroundColor: white,
              }}
            >
              <StatusBar backgroundColor={primaryColor}/>
              <SafeAreaView/>
                <NavHeader 
                header={'Dashboard'}
                />
               <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          {/* Doctor Appointment */}
          <TouchableOpacity
          onPress={()=> {this.props.navigation.navigate('Doctor');}}
          delayPressIn={0}
            style={{
              height: h('17%'),
              width: '80%',
              backgroundColor:white,
              borderColor: primaryColor,
              borderWidth: h('0.1%'),
              borderRadius: h('1%'),
              marginTop: h('3%'),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../assets/first.png')}
              style={{
                height: h('6%'),
                width: h('6%'),
                marginBottom: h('2%'),
              }}
            />

            <Text>Get Doctor Appointment</Text>
          </TouchableOpacity>

          {/* Cart */}
          <TouchableOpacity
          onPress={()=> {this.props.navigation.navigate('Cart');}}
          delayPressIn={0}
            style={{
              height: h('17%'),
              width: '80%',
              backgroundColor: white,
              borderColor: primaryColor,
              borderWidth: h('0.1%'),
              borderRadius: h('1%'),
              marginTop: h('3%'),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../assets/second.png')}
              style={{
                height: h('6%'),
                width: h('6%'),
                marginBottom: h('2%'),
              }}
            />

            <Text>Go to Cart</Text>
          </TouchableOpacity>

          {/* Waiting Room */}
          <TouchableOpacity
            style={{
              height: h('17%'),
              width: '80%',
              backgroundColor: white,
              borderColor: primaryColor,
              borderWidth: h('0.1%'),
              borderRadius: h('1%'),
              marginTop: h('3%'),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../assets/third.png')}
              style={{
                height: h('6%'),
                width: h('6%'),
                marginBottom: h('2%'),
              }}
            />

            <Text>Waiting Room</Text>
          </TouchableOpacity>
        </View>
            </View>
        );
    }
};