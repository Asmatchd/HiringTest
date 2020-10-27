/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
    View,
    Text, 
    Image,
    FlatList,
    TouchableOpacity,
    StatusBar,
    SafeAreaView
} from 'react-native';

import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

import { NavHeader } from '../../components';
import { primaryColor, secondaryColor, silver, white } from '../../Dimens';

export class DoctorHistory extends Component {
    state = {
        data:[
            {
                date:'04/06/1968',
                reason:'Flu'
            },
            {
                date:'05/06/1968',
                reason:'Flu'
            },
            {
                date:'06/06/1968',
                reason:'Flu'
            },
            {
                date:'02/06/1968',
                reason:'Flu'
            },
        ]
    }

    // Doctor History
    renderItemDesign = (item,index) => (
        <View
        style={{
            height:h('6%'),
            width:'92%',
            // backgroundColor:'#ada',
            marginLeft:h('2%'),
            borderWidth:h('.1%'),
            borderRadius:h('1%'),
            borderColor:silver,
            flexDirection:'row',
            marginBottom:h('2%')
        }}
        >
            <View
            style={{
                height:h('6%'),
                width:'70%',
                justifyContent:'center',
                marginLeft:h('2%')
            }}
            >
            <Text>{item.date}</Text>
            </View>
            <View
            style={{
                height:h('6%'),
                width:'30%',
                justifyContent:'center',
                alignItems:'center'
            }}
            >
            <Text>{item.reason}</Text>
            </View>
        </View>
    );

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
                        <Text style={{fontSize:20}}>Dr. Testing Name</Text>
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
                        <Text>Location</Text>
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
                        <Text>MBBS</Text>
                    </View>
                </View>
                {/* Option */}
                <View
                style={{
                    height:h('8%'),
                    width:'100%',
                    backgroundColor:primaryColor,
                    flexDirection:'row',
                }}
                >
                    <TouchableOpacity
                    onPress={()=> {this.props.navigation.navigate('Doctor');}}
                    delayPressIn={0}
                    style={{
                        height:h('8%'),
                        width:w('50%'),
                        backgroundColor:primaryColor,
                        alignItems:'center',
                        justifyContent:'center',
                    }}
                    >
                        <Text style={{color:white,fontSize:20}}>Details</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={{
                        height:h('8%'),
                        width:w('50%'),
                        // backgroundColor:'#ada',
                        alignItems:'center',
                        justifyContent:'center',
                        borderBottomWidth:h('0.7%'),
                        borderBottomColor:secondaryColor
                    }}
                    >
                        <Text style={{color:white,fontSize:20}}>Visit History</Text>
                    </TouchableOpacity>
                </View>
                {/* examples */}
                <View
                style={{
                    height:h('3%'),
                    width:'90%',
                    // backgroundColor:'#ada',
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    margin:h('1%')
                }}
                >
                   <View
                   style={{
                       height:h('3%'),
                       width:'60%',
                    //    backgroundColor:'#ada',
                       marginLeft:h('3%')
                   }}
                   >
                   <Text>Appointment Date</Text>
                   </View>
                   <View
                   style={{
                       height:h('3%'),
                       width:'40%',
                    //    backgroundColor:'#ada',
                       alignItems:'center'
                   }}
                   >
                   <Text>Reason</Text>
                   </View>
                </View>
                <View
                style={{
                    flex:1,
                    margin:h('1%')
                }}
                >
                    <FlatList
                    data={this.state.data}
                    renderItem={({item,index}) => this.renderItemDesign(item,index)}
                    keyExtractor={(item) => item.date}
                    showsVerticalScrollIndicator={false}
                    />
                </View>
                {/* Book */}
                <TouchableOpacity
                onPress = {()=> {this.props.navigation.navigate('Appointment')}}
                delayPressIn={0}
                style={{
                    height:h('6%'),
                    width:'60%',
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