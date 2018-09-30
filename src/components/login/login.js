import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    Text,
    Image,
    KeyboardAvoidingView,
    TouchableOpacity,
    TextInput
} from 'react-native';

export default class LoginPage extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../../assets/images/appleicon.png')} />
                    <Text style={styles.title}>
                    A better way to manage your club.
                    </Text>
                </View>
                {/* <View style={styles.formContainer}>
                    <LoginForm/>
                </View> */}

                <View style={styles.formContainer}>
                    <TextInput 
                        placeholder="Your email"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="next"
                        style={styles.input}
                        onSubmitEditing={() => this.passwordInput.focus()}
                        keyboardType='email-address'
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <TextInput
                        placeholder="Your password"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        secureTextEntry
                        returnKeyType="go"
                        style={styles.input}
                        ref={(input) => this.passwordInput = input}
                    />
                    <TouchableOpacity style={styles.buttonContainer}
                    onPress={() => this.props.navigation.navigate('HomePage')}>
                        <Text style={styles.buttonText}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* <Text> LoginPage </Text> */}
            </KeyboardAvoidingView>
        );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#3498db'
    },
    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent:'center'
    },
    logo:{
        width:100,
        height:100
    },

    title:{
      color:"#FFF",
      marginTop: 10,
      width:160,
      textAlign:'center',
      opacity:0.9
    },
    formContainer:{
        padding: 20,
    },
    input:{
        height:40,
        backgroundColor:'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color:"#FFF",
        paddingHorizontal: 10,
    },
    buttonContainer:{
        backgroundColor:"#27ae60",
        paddingVertical: 15,
    },
    buttonText:{
        textAlign:'center',
        color:'#FFF',
        fontWeight: '700',
        fontSize: 18,
    }
})
