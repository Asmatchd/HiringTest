/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

import { primaryColor, white } from '../Dimens';

export class NavHeader extends Component {
    render () {
        return (
            <View
            style={{
                height:h('8%'),
                width:'100%',
                backgroundColor:primaryColor,
                flexDirection:'row'
            }}
            >
                {/* Left Icon */}
                <TouchableOpacity
                onPress={this.props.leftPress}
                delayPressIn={0}
                style={{
                         height:h('10%'),
                        width:'13%',
                        // backgroundColor:'#Ada',
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                >
                 <Icon name={this.props.leftIc} size={30} color={white} />   
                </TouchableOpacity>
                {/* Header */}
                <View
                style={{
                         height:h('10%'),
                        width:'74%',
                        // backgroundColor:'#Aaa',
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                >
                    <Text style={{color:white,fontSize:20}}>{this.props.header}</Text>
                </View>
                <View
                style={{
                         height:h('10%'),
                        width:'13%',
                        // backgroundColor:'#Ada'
                    }}
                ></View>
            </View>
        );
    }
};