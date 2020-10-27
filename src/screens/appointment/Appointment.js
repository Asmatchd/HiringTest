/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
    View,
    Text,
    FlatList,
    StatusBar,
    SafeAreaView
} from 'react-native';

import {
    widthPercentageToDP as w,
    heightPercentageToDP as h,
  } from 'react-native-responsive-screen';
import IconArrow from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';


import { NavHeader } from '../../components';
import { primaryColor, silver, white } from '../../Dimens';

export class Appointment extends Component {
    state = {
        data : [
            {
                time:'8:00 AM - 10:00 AM',
                clr:'#5C47C4',
                ptn:'1'
            },
            {
                time:'8:00 AM - 9:00 AM',
                clr:'#5C47C4',
                ptn:'1'
            },
            {
                time:'8:00 AM - 11:00 AM',
                clr:'#5C47C4',
                ptn:'1'
            },
            {
                time:'8:00 AM - 2:00 PM',
                clr:'#FBB03B',
                ptn:'1'
            },
            {
                time:'8:00 AM - 1:00 PM',
                clr:'#FBB03B',
                ptn:'1'
            },
            {
                time:'8:00 AM - 4:00 PM',
                clr:'#FBB03B',
                ptn:'1'
            },
        ]
    }

    renderDesign = (item, index) => (
        <View
        style={{
            height:h('10%'),
            width:'93%',
            // backgroundColor:'#aad',
            marginLeft:h('2%'),
            borderWidth:h('.1%'),
            flexDirection:'row',
            marginBottom:h('1%'),
            borderColor:silver
        }}
        >
            <View
            style={{
                height:h('10%'),
                width:'2%',
                backgroundColor:item.clr
            }}
           />
           <View
           style={{
               height:h('10%'),
               width:'15%',
            //    backgroundColor:'#ada',
               alignItems:'center',
               justifyContent:'center'
           }}
           >
                <Icon name={'person-outline'} size={30} color={primaryColor} />  
                <Text style={{fontSize:10}}>{item.ptn}</Text>
           </View>
           <View
           style={{
               height:h('10%'),
               width:'60%',
            //    backgroundColor:'#ada',
               alignItems:'center',
               justifyContent:'center'
           }}
           >
               <Text style={{fontSize:18}}>{item.time}</Text>
           </View>
           <View
           style={{
               height:h('10%'),
               width:'23%',
            //    backgroundColor:'#aad',
               alignItems:'center',
               justifyContent:'center'
           }}
           >
                <IconArrow name={'keyboard-arrow-right'} size={30} color={primaryColor} /> 
           </View>
        </View>
    );

    render () {
        return (
            <View
            style={{
                flex:1,
                backgroundColor:white
            }}
            >
            <StatusBar backgroundColor={primaryColor}/>
              <SafeAreaView/>
                <NavHeader
                header={'Book Appointment'}
                leftIc={'arrow-back'}
                leftPress={()=> {this.props.navigation.goBack();}}
                />
                <View
                style={{
                    height:h('6%'),
                    width:'100%',
                    // backgroundColor:'#ada',
                    alignItems:'center',
                    justifyContent:'center'
                }}
                >
                    <Text style={{color:silver, fontSize:18}}>Select time from available Slots</Text>
                </View>
                <View
                style={{
                    height:h('5%'),
                    width:'100%',
                    // backgroundColor:'#aad',
                    justifyContent:'center',
                    marginLeft:h('2%'),
                    marginBottom:h('1%')
                }}
                >
                    <Text style={{color:silver, fontSize:20}}>FEB 25</Text>
                </View>
                <View
                    style={{
                        flex:1,
                        // backgroundColor:'#ada'
                    }}
                    >
                <FlatList
                    data={this.state.data}
                    renderItem={({item,index}) => this.renderDesign(item,index)}
                    keyExtractor={item => item.time}
                />
                    </View>
            </View>
        );
    }
};