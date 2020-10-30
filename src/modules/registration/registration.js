import {Alert, Button, View} from "react-native";
import React, {useState} from "react";
import {Input} from "react-native-elements";

export const Registration = ({navigation}) => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [userName,setUserName] = useState('');

    const registration = () => {
       console.log([...email,...password,...confirmPassword,...userName])
        navigation.navigate('Page')
    }

    return(
        <View>
            <Input
                placeholder="Username"
                leftIcon={{ type: 'font-awesome', name: 'user' }}
                onChangeText={setUserName}
            />
            <Input
                placeholder="Password"
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                secureTextEntry={true}
                onChangeText={setPassword}
            />
            <Input
                placeholder="Confirm Password"
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                secureTextEntry={true}
                onChangeText={setConfirmPassword}
            />
            <Input
                placeholder="Email"
                leftIcon={{ type: 'font-awesome', name: 'user' }}
                onChangeText={setEmail}
            />
            <Button onPress={registration} title="Зарегестрироваться">SignIn</Button>
            <Button onPress={()=> navigation.navigate('SignIn')} title="Войти">SignIn</Button>
        </View>
    )
}
