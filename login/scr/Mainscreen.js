// import React from 'react';
// import {createStackNavigator} from 'react-navigation-stack';
import Timescreen from './Timescreen';
import Signupscreen from './Signupscreen';
import Signinscreen from './Signinscreen';

// const Mainstack = createStackNavigator();

// const MainStackScreen = ({navigation}) => {
//   <Mainstack.Navigation headerMode="none">
//     <Mainstack.Screen name="Timescreen" component={Timescreen} />
//     <Mainstack.Screen name="Signupcreen" component={Signupscreen} />
//     <Mainstack.Screen name="Signinscreen" component={Signinscreen} />
//   </Mainstack.Navigation>;
// };
// export default MainStackScreen;

//import {createStackNavigator} from '@react-navigation/stack';
//import {createStackNavigator} from 'react-navigation-stack';

// from google ///////////////////////////////////////////////////////////////////////////////
// import {createStackNavigator} from '@react-navigation/stack';

// const Stack = createStackNavigator();

// function MyStack(navigation) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Timescreen" component={Timescreen} />
//       <Stack.Screen name="Signupcreen" component={Signupscreen} />
//       <Stack.Screen name="Signinscreen" component={Signinscreen} />
//     </Stack.Navigator>
//   );
// }
// export default MyStack;
///////////////////////////////////////////////////////////////////////////////////////////
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
const Stack = createStackNavigator();
export const MyStack = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="Timescreen" component={Timescreen} /> */}

      <Stack.Screen name="Signinscreen" component={Signinscreen} />
      <Stack.Screen name="Signupcreen" component={Signupscreen} />
    </Stack.Navigator>
  );
};
export default MyStack;
