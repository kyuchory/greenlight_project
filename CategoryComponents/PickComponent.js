import React, {Component} from 'react';
import { Text, View, Buttonm, Alert } from 'react-native';

class PickComponents extends Component{

    constructor(){
        super();
        this.state = {
            img: require('../icon+image/heart.png'),   
        };
    }
}

changeImage= function(){
    // bind()로 전달된 this 객체가 이 함수 안에서의 this로 연결됨
    this.setState({img: require('../icon+image/outer_like_red.png')});
}