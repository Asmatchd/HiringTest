/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StatusBar,
    SafeAreaView
} from 'react-native';

import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCart from 'react-native-vector-icons/Octicons';

import { CartHeader } from '../../components';
import { pink, silver, white } from '../../Dimens';

export class Cart extends Component {
    state = {
        cart:[
            {
                name:'Chicken Shawarrma',
                price:'160.00',
                quantity:'1'
            },
            {
                name:'Bief Kabab',
                price:'160.00',
                quantity:'1'
            },
            {
                name:'Chicken tikka piece',
                price:'160.00',
                quantity:'1'
            },
            {
                name:'Chicken piece',
                price:'160.00',
                quantity:'1'
            },
            {
                name:'Chicken Burger',
                price:'160.00',
                quantity:'1'
            },
        ],
    }
    renderItemDesign = (item,index) => (
        <View
        style={{
            height:h('6%'),
            width:'100%',
            // backgroundColor:'#ada',
            flexDirection:'row',
            borderColor:silver
        }}
        >
            <TouchableOpacity
            onPress={()=>{
                this.removeByIndex(item);
            }}
            delayPressIn={0}
            style={{
                height:h('6%'),
                width:'10%',
                // backgroundColor:'#ada',
                alignItems:'center',
                justifyContent:'center'
            }}
            >
                <IconCart name={'diff-removed'} size={17} color={pink}/>
            </TouchableOpacity>
            <View
            style={{
                height:h('6%'),
                width:'5%',
                // backgroundColor:'#ada',
                justifyContent:'center',
            }}
            >
                                <Text>{item.quantity}</Text>
            </View>
            <TouchableOpacity
            onPress={()=> {
                this.add(item);
            }}
            delayPressIn={0}
            style={{
                height:h('6%'),
                width:'10%',
                // backgroundColor:'#ada',
                justifyContent:'center'
            }}
            >
                <IconCart name={'diff-added'} size={17} color={pink}/>
            </TouchableOpacity>
            <View
            style={{
                height:h('6%'),
                width:'55%',
                // backgroundColor:'#fda',
                justifyContent:'center',
            }}
            >
                <Text>{item.name}</Text>
            </View>
            <View
            style={{
                height:h('6%'),
                width:'25%',
                // backgroundColor:'#ada',
                justifyContent:'center',
            }}
            >
                <Text style={{color:silver}}>Rs: {item.price}</Text>
            </View>
        </View>
    );

    // Increment
  add = (item) => {
    const data = {
      name: item.name,
      price: item.price,
      quantity:item.quantity
    };
    this.setState((prevState) => ({
      cart: [...prevState.cart, data],
    }));
  };

  // Decrement 
  removeByIndex = (item) => {
    const arr = this.state.cart;

    const index = arr.indexOf(item);

    if (index > -1) {
      arr.splice(index, 1);
    }

    this.setState({cart: arr});
  };


    render () {
        return (
            <View
            style={{
                flex:1,
                backgroundColor:white
            }}
            >
                <StatusBar backgroundColor={pink}/>
                <SafeAreaView/>
                 <CartHeader
                header={'Your Cart'}
                leftIc={'arrow-back'}
                leftPress={()=> {this.props.navigation.goBack();}}/>

         <View
         style={{
             height:h('30%'),
             backgroundColor:white,
             borderWidth:h('.1%')
         }}
         >
                   <FlatList
                    data={this.state.cart}
                    renderItem={({item,index}) => this.renderItemDesign(item,index)}
                    keyExtractor={(item) => item.name}
                    showsVerticalScrollIndicator={false}
                    />
         </View>
         {/* Delivery Charges */}
         <View
         style={{
             height:h('6%'),
             width:'100%',
            //  backgroundColor:'#ada',
             flexDirection:'row',
             alignItems:'center',
             marginLeft:h('3%'),
         }}
         >
             <View
             style={{
                 height:h('6%'),
                 width:'75%',
                 justifyContent:'center'
             }}
             >
             <Text>Delivery Charges</Text>
             </View>
             <View
             style={{
                 height:h('6%'),
                 width:'50%',
                 justifyContent:'center'
             }}
             >
             <Text style={{color:silver}}>RS:  160.00</Text>
             </View>
         </View>
         {/* Total */}
         <View
         style={{
             height:h('6%'),
             width:'100%',
            //  backgroundColor:'#ada',
             flexDirection:'row',
             justifyContent:'space-between',
             borderWidth:h('.1%'),
             marginBottom:h('1%')

         }}
         >
             <View
             style={{
                 height:h('6%'),
                 alignItems:'center',
                 marginLeft:h('3%'),
                 flexDirection:'row'
             }}
             >
                 <Text>Total </Text>
                 <Text style={{color:silver}}> (Inc. GST)</Text>
             </View>
             <View
             style={{
                 height:h('6%'),
                 justifyContent:'center',
                 marginRight:h('1%')
             }}
             >
                 <Text>Rs: 1600.00</Text>
             </View>
         </View>
         <View
         style={{
             height:h('4%'),
             width:'100%',
            //  backgroundColor:'#ada',
         }}
         ></View>
            {/* Contact Delivery */}
         <View
         style={{
             height:h('8%'),
             width:'100%',
            //  backgroundColor:'#aaa',
             flexDirection:'row' ,
             borderWidth:h('.1%')  
            }}
         >
             <View
             style={{
                 height:h('8%'),
                 width:'35%',
                //  backgroundColor:'#fff',
                 alignItems:'center',
                 justifyContent:'center'
             }}
             >
                 <Text style={{fontSize:16}}>Contact Delivery</Text>
             </View>
             <View
             style={{
                 height:h('8%'),
                 width:'50%',
                //  backgroundColor:'#faa',
                 justifyContent:'center',
             }}
             >
                 <Text style={{color:silver,fontSize:16}}>Shiekhasad@gmail.com</Text>
             </View>
             <View
             style={{
                 height:h('8%'),
                 width:'10%',
                //  backgroundColor:'#aaa',
                 alignItems:'center',
                 justifyContent:'center',
             }}
             >
                <Icon name={"keyboard-arrow-right"} size={40} color={pink} />
             </View>
         </View>
         {/* Delivery Details */}
         <View
         style={{
             height:h('6%'),
             width:'100%',
            //  backgroundColor:'#ada' ,
             flexDirection:'row' 
            }}
         >
             <View
             style={{
                 height:h('6%'),
                 width:'34%',
                 backgroundColor:white,
                 alignItems:'center',
                 justifyContent:'center',
             }}
             >
                 <Text style={{fontSize:16}}>Delivery Details</Text>
             </View>
             <View
             style={{
                 height:h('6%'),
                 width:'50%',
                justifyContent:'center'
             }}
             >
                 <Text style={{color:silver,fontSize:16}}>Home </Text>
             </View>
             <View
             style={{
                 height:h('6%'),
                 width:'11%',
                 justifyContent:'center'
             }}
             >
                <Icon name={"keyboard-arrow-right"} size={40} color={pink} />
             </View>
         </View>
         <View
         style={{
             height:h('6%'),
             width:'63%',
            //  backgroundColor:'#fda',    
            justifyContent:'center',
            alignItems:'center',
            marginBottom:h('2%')
            }}
         >
             <Text style={{color:silver,fontSize:16}}>Street address, house #, colony</Text>
         </View>
         {/* Delivery Time */}
         <View
         style={{
             height:h('8%'),
             width:'100%',
            //  backgroundColor:'#aaa',
             flexDirection:'row' ,
             borderWidth:h('.1%'),
             marginBottom:h('1%')
            }}
         >
             <View
             style={{
                 height:h('8%'),
                 width:'33%',
                //  backgroundColor:'#fff',
                 alignItems:'center',
                 justifyContent:'center',
             }}
             >
                 <Text style={{fontSize:16}}>Delivery time</Text>
             </View>
             <View
             style={{
                 height:h('8%'),
                 width:'30%',
                //  backgroundColor:'#faa',
                 justifyContent:'center',
                 alignItems:'center'
             }}
             >
                 <Text style={{color:silver,fontSize:16}}>20 MIN</Text>
             </View>
         </View>
         {/* Order Now */}
         <TouchableOpacity
         style={{
             height:h('6%'),
             width:'92%',
             backgroundColor:pink,
             alignItems:'center',
             justifyContent:'center',
             marginLeft:h('2%'),
             marginTop:h('2%')
         }}
         >
             <Text style={{color:white,fontSize:18}}>Order Now</Text>
         </TouchableOpacity>
            </View>
        );
    }
};