/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
    View,
    Text, 
    Image,
    StatusBar,
    SafeAreaView
} from 'react-native';

import {
    widthPercentageToDP as w,
    heightPercentageToDP as h,
  } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import IconHands from 'react-native-vector-icons/FontAwesome5';
import IconLog from 'react-native-vector-icons/SimpleLineIcons';

import { NavHeader } from '../../components/NavHeader';
import { primaryColor, white } from '../../Dimens';


export class Settings extends Component {
    render () {
        return (
            <View
            style={{
                flex:1,
                backgroundColor:white,
            }}
            >
                <StatusBar backgroundColor={primaryColor}/>
                <SafeAreaView/>
                <NavHeader
                header={'Settings'}
                />
                {/* First */}
                <View
                style={{
                    height:h('13%'),
                    width:'100%',
                    // backgroundColor:'#ada',
                    borderBottomWidth:h('.1%'),
                    flexDirection:'row',
                    margin:h('1%')
                }}
                >
                    <View
                    style={{
                        height:h('13%'),
                        width:'40%',
                        // backgroundColor:'#ada',
                        alignItems:'center',
                        justifyContent:'center',
                    }}
                    >
                        <Image
                        source={require('../../assets/3.jpg')}
                        style={{
                            height:h('10%'),
                            width:w('18%'),
                            borderRadius:h('5%')
                        }}
                        />
                    </View>
                    <View
                    style={{
                        height:h('13%'),
                        width:'60%',
                        // backgroundColor:'#aad',
                        justifyContent:'center'
                    }}
                    >
                        <Text style={{fontSize:20}}>Joan Diaz</Text>
                        <Text>Medical Specialist</Text>
                    </View>
                </View>
                {/* Second */}
                <View
                style={{
                    height:h('13%'),
                    width:'100%',
                    // backgroundColor:'#ada',
                    borderBottomWidth:h('.1%'),
                    flexDirection:'row'
                }}
                >
                    <View
                    style={{
                        height:h('13%'),
                        width:'40%',
                        // backgroundColor:'#ada',
                        alignItems:'center',
                        justifyContent:'center',
                    }}
                    >
                                     <Icon name={'person'} size={30} color={primaryColor} />   
                    </View>
                    <View
                    style={{
                        height:h('13%'),
                        width:'60%',
                        // backgroundColor:'#aad',
                        justifyContent:'center'
                    }}
                    >
                        <Text style={{fontSize:20}}>Doctors</Text>
                        <Text>Select or update your doctor</Text>
                    </View>
                </View>
                {/* Third */}
                <View
                style={{
                    height:h('13%'),
                    width:'100%',
                    // backgroundColor:'#ada',
                    borderBottomWidth:h('.1%'),
                    flexDirection:'row'
                }}
                >
                    <View
                    style={{
                        height:h('13%'),
                        width:'40%',
                        // backgroundColor:'#ada',
                        alignItems:'center',
                        justifyContent:'center',
                    }}
                    >
                       <Icon name={'lock-closed'} size={30} color={primaryColor} />
                    </View>
                    <View
                    style={{
                        height:h('13%'),
                        width:'60%',
                        // backgroundColor:'#aad',
                        justifyContent:'center'
                    }}
                    >
                        <Text style={{fontSize:20}}>Reset Password</Text>
                        <Text>Reset your password</Text>
                    </View>
                </View>
                {/* Four */}
                <View
                style={{
                    height:h('13%'),
                    width:'100%',
                    // backgroundColor:'#ada',
                    borderBottomWidth:h('.1%'),
                    flexDirection:'row'
                }}
                >
                    <View
                    style={{
                        height:h('13%'),
                        width:'40%',
                        // backgroundColor:'#ada',
                        alignItems:'center',
                        justifyContent:'center',
                    }}
                    >
                       <IconHands name={'handshake'} size={30} color={primaryColor} />
                    </View>
                    <View
                    style={{
                        height:h('13%'),
                        width:'60%',
                        // backgroundColor:'#aad',
                        justifyContent:'center'
                    }}
                    >
                        <Text style={{fontSize:20}}>Terms & Conditions</Text>
                        <Text>Upon you are agreed</Text>
                    </View>
                </View>
                
                <View
                style={{
                    height:h('13%'),
                    width:'100%',
                    // backgroundColor:'#ada',
                    borderBottomWidth:h('.1%'),
                    flexDirection:'row'
                }}
                >
                    <View
                    style={{
                        height:h('13%'),
                        width:'40%',
                        // backgroundColor:'#ada',
                        alignItems:'center',
                        justifyContent:'center',
                    }}
                    >
                        <IconLog name={'logout'} size={30} color={primaryColor} />
                    </View>
                    <View
                    style={{
                        height:h('13%'),
                        width:'60%',
                        // backgroundColor:'#aad',
                        justifyContent:'center'
                    }}
                    >
                        <Text style={{fontSize:20}}>Logout</Text>
                    </View>
                </View>
                
            </View>
        );
    }
};