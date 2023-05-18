import * as React from 'react';
import { Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

const HomeScreen = ({navigation}) => {
    return (
      <Button
        title="View Document"
        onPress={() =>
          navigation.navigate('Viewer')
        }
      />
    );
};

// const HomeScreen = (props) => {
//   return (
//     <Button
//       title="View Document"
//       onPress={() => {
//         Navigation.push(props.componentId, {
//           component: {
//             name: 'Home',
//             options: {
//               topBar: {
//                 title: {
//                   text: 'Viewer'
//                 }
//               }
//             }
//           }
//         });
//       }}
//     />
//   );
// };

export default HomeScreen;