import {Button, View} from "react-native";
import React, {useState} from "react";
import {Input} from "react-native-elements";

export const SignIn = ({navigation}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = () => {
        console.log([...email,...password])
        navigation.navigate('Page')
    }

    return(
            <View style={{alignItems:'center'}}>
                <Input
                    placeholder="E-mail"
                    leftIcon={{ type: 'font-awesome', name: 'user' }}
                    onChangeText={setEmail}
                />
                <Input
                    placeholder="Password"
                    leftIcon={{ type: 'font-awesome', name: 'lock' }}
                    secureTextEntry={true}
                    onChangeText={setPassword}
                />
                <Button onPress={ signIn } title="Войти">SignIn</Button>
                <Button onPress={()=> navigation.navigate('Registration')} title="Зарегестрироваться">SignIn</Button>
            </View>
    )
}
