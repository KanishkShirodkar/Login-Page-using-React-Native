import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  View,
  Image,
  Text,
  Platform,
  TextInput,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
//import {Icon} from 'react-native-elements';

//to make the passwor ****

const SignUpScreen = ({navigation}) => {
  const [data, setdata] = React.useState({
    email: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = (val) => {
    //check
    if (val.length != 0) {
      setdata({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setdata({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setdata({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = (val) => {
    setdata({
      ...data,
      confirm_password: val,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setdata({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry, //if ture then returns false and vice versa
    });
  };

  const updateSecureTextEntry = () => {
    setdata({
      ...data,
      secureTextEntry: !data.secureTextEntry, //if ture then returns false and vice versa
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#d40856"
        //backgroundColor="#009387"
        barStyle="light-content"
      />
      <View style={styles.header}>
        <Text style={styles.text_header}>
          {`Welcome!
Register Now`}
        </Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View alignItems="center" style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Email"
            Style={styles.textinput}
            style={{marginLeft: 10, width: '85%'}}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />

          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        <Text
          style={[styles.text_footer, {marginTop: 20}]}
          //style={styles.text_footer} marginTop="35"
        >
          Password
        </Text>
        <View alignItems="center" style={styles.action}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            Style={styles.textinput}
            autoCapitalize="none"
            style={{marginLeft: 10, width: '85%'}}
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {/* confirmpass */}
        <Text
          style={[styles.text_footer, {marginTop: 20}]}
          //style={styles.text_footer} marginTop="35"
        >
          Confirm Password
        </Text>
        <View alignItems="center" style={styles.action}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry={data.confirm_secureTextEntry ? true : false}
            Style={styles.textinput}
            autoCapitalize="none"
            style={{marginLeft: 10, width: '85%'}}
            onChangeText={(val) => handleConfirmPasswordChange(val)}
          />
          <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {/* confirm pass end */}
        <View style={{marginTop: 30}}>
          <View style={styles.or}>
            <Text>Or Register</Text>
          </View>
          <View>
            {/* facebook google sign up */}
            <View style={styles.MainContainer}>
              <TouchableOpacity
                style={styles.FacebookStyle}
                activeOpacity={0.5}>
                <Image
                  source={require('../Images/Facebook_Login_Button.png')}
                  style={styles.ImageIconStyle}
                />

                <View style={styles.SeparatorLine} />

                <Text style={styles.TextStyle}> Using Facebook </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.GooglePlusStyle}
                activeOpacity={0.5}>
                <Image
                  source={require('../Images/Google_Plus.png')}
                  style={styles.ImageIconStyle}
                />

                <View style={styles.SeparatorLine} />

                <Text style={styles.TextStyle}> Using Google Plus </Text>
              </TouchableOpacity>
            </View>
            {/* end of fb google */}
          </View>
          <View flexDirection="row" justifyContent="space-between">
            <View style={{marginTop: 30, width: '40%'}}>
              <TouchableOpacity>
                <LinearGradient
                  colors={['#d40856', '#ab015c']}
                  //colors={['#08d4c4', '#01ab9d']}
                  style={styles.signin}>
                  <Text style={[styles.textSign, {color: '#fff'}]}>
                    Sign Up
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 30, width: '40%'}}>
              <View
                style={{
                  borderColor: '#d40856',
                  //borderColor: '#08d4c4',
                  borderWidth: 2,
                  borderRadius: 10,
                }}>
                <TouchableOpacity
                  style={styles.signin}
                  onPress={() => navigation.navigate('Signinscreen')}>
                  {/* onPress={() => navigator.goback()}> */}
                  {/* <LinearGradient
                  colors={['#08d4c4', '#01ab9d']}
                  style={styles.signin}> */}
                  <Text
                    style={[styles.textSign, {color: '#d40856'}]}
                    // {color: '#fff'}]}
                  >
                    Sign In
                  </Text>
                  {/* </LinearGradient> */}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#009387',
    backgroundColor: '#d40856',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    // elevation: 30,
    // shadowColor: 'black',
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 40,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#A9A9A9', //'#f2f2f2',
    paddingBottom: 5,
  },
  textinput: {
    flex: 1,
    marginTop: Platform.OS == 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signin: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  or: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#A9A9A9',
  },
  //for facebook and google buttons
  MainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  GooglePlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dc4e41',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 30,
    width: 190,
    borderRadius: 5,
    margin: 5,
  },

  FacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 30,
    width: 190,
    borderRadius: 5,
    margin: 5,
  },

  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },

  TextStyle: {
    color: '#fff',
    //marginBottom: 4,
    alignItems: 'center',
    marginRight: 20,
    marginLeft: 5,
  },

  SeparatorLine: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
});

//export default SignInScreen;

export default SignUpScreen;
