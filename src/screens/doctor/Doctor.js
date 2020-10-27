/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
    View,
    Text, 
    Image,
    TouchableOpacity,
    StatusBar,
    SafeAreaView
} from 'react-native';

import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

import { NavHeader } from '../../components';
import { primaryColor, secondaryColor, silver, white } from '../../Dimens';

export class Doctor extends Component {
    render () {
        return (
            <View
            style={{
                flex:1,
                backgroundColor:white,
                alignItems:'center'
            }}
            >
            <StatusBar backgroundColor={primaryColor}/>
              <SafeAreaView/>
                <NavHeader
                header={'Doctor'}
                leftIc={'arrow-back'}
                leftPress={()=> {this.props.navigation.goBack();}}
                />
                {/* Profile */}
                <View
                style={{
                    height:h('35%'),
                    width:'100%',
                    // backgroundColor:'#ada',
                    alignItems:'center',
                    justifyContent:'center'
                }}
                >
                    <View
                    style={{
                        height:h('20%'),
                        width:'40%',
                        // backgroundColor:'#aad',
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                    >
                        <Image
                        source={require('../../assets/sir.jpg')}
                        style={{
                            height:h('18%'),
                            width:w('30%'),
                            borderRadius:h('15%')
                        }}
                        />
                    </View>
                    <View
                    style={{
                        height:h('4%'),
                        width:'50%',
                        // backgroundColor:'#ada',
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                    >
                        <Text style={{color:silver,fontSize:20}}>Dr. Testing Name</Text>
                    </View>
                    <View
                    style={{
                        height:h('3%'),
                        width:'50%',
                        // backgroundColor:'#ada',
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                    >
                        <Text style={{color:silver}}>Location</Text>
                    </View>
                    <View
                    style={{
                        height:h('3%'),
                        width:'50%',
                        // backgroundColor:'#ada',
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                    >
                        <Text style={{color:silver}}>MBBS</Text>
                    </View>
                </View>
                {/* Options */}
                <View
                style={{
                    height:h('8%'),
                    width:'100%',
                    backgroundColor:primaryColor,
                    flexDirection:'row',
                }}
                >
                    <TouchableOpacity
                    delayPressIn={0}
                    style={{
                        height:h('8%'),
                        width:w('50%'),
                        backgroundColor:primaryColor,
                        alignItems:'center',
                        justifyContent:'center',
                        borderBottomWidth:h('0.7%'),
                        borderBottomColor:secondaryColor
                    }}
                    >
                        <Text style={{color:white,fontSize:20}}>Details</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=> {this.props.navigation.navigate('DoctorHistory')}}
                    delayPressIn={0}
                    style={{
                        height:h('8%'),
                        width:w('50%'),
                        // backgroundColor:'#ada',
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                    >
                        <Text style={{color:white,fontSize:20}}>Visit History</Text>
                    </TouchableOpacity>
                </View>
                {/* Details */}
                <View
                style={{
                    height:h('35%'),
                    width:'93%',
                    // backgroundColor:'#dad',
                    alignItems:'center',
                    justifyContent:'center',
                    marginLeft:h('2%')
                }}
                >
                    <Text style={{color:silver}}>
                    Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl, consectetur et luctus et, porta ut dolor. Curabitur ultricies ultrices nulla. Morbi blandit nec est vitae dictum. Etiam vel consectetur diam. Maecenas vitae egestas dolor. Fusce tempor magna at tortor aliquet finibus. Sed eu nunc sit amet elit euismod faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis gravida eget neque vel vulputate.
                    </Text>
                </View>
                {/* Book */}
                <TouchableOpacity
                onPress={()=> {this.props.navigation.navigate('Appointment')}}
                delayPressIn={0}
                style={{
                    height:h('6%'),
                    width:w('60%'),
                    backgroundColor:secondaryColor,
                    alignItems:'center',
                    justifyContent:'center',
                    marginBottom:h('2%'),
                    borderWidth:h('.1%'),
                    borderRadius:h('1%'),
                    borderColor:secondaryColor
                }}
                >
                    <Text style={{color:white,fontSize:19}}>Book Now</Text>
                </TouchableOpacity>
            </View>
        );
    }
};