import React from "react";

import {style} from "./styles";
import {MaterialIcons} from '@expo/vector-icons';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Logo from '../../assets/logo.png';
import { theme } from "../../global/themes";

export default function Login() {
  return(
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image 
          source={Logo}
          style={style.logo}
          resizeMode="contain"
        />
        <Text style={style.title}>Welcome back!</Text>
      </View>

      <View style={style.boxMid}>
        <Text style={style.lable}>E-MAIL ADDRESS</Text>
        <View style={style.text_area}>
          <TextInput style={style.input}/>
          <MaterialIcons name="email" size={20} color={theme.colors.gray} style={style.icon}/>
        </View>
        <Text style={style.lable}>PASSWORD</Text>
        <View style={style.text_area}>
          <TextInput style={style.input}/>
          <MaterialIcons name="visibility" size={20} color={theme.colors.gray} style={style.icon}/>
        </View>
      </View>

      <View style={style.boxBotton}>
        <TouchableOpacity style={style.button}>
          <Text style={style.bt_text}>Enter</Text>
        </TouchableOpacity>
      </View>
      <Text style={style.text_end}>Don't have an account? <Text style={style.txt_create}>Create now!</Text></Text>
    </View>
  )
}