import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '@src/constants/navigation';
import Dashboard from '@src/screens/dashboard';
import MovieDetails from '@src/screens/movieDetails';
import ViewAll from '@src/screens/viewAll';

const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName={SCREENS.DASHBOARD}>
      <Stack.Screen
        name={SCREENS.DASHBOARD}
        options={{headerShown: false}}
        component={Dashboard}
      />
      <Stack.Screen
        name={SCREENS.VIEW_ALL}
        options={{headerShown: false}}
        component={ViewAll}
      />
      <Stack.Screen
        name={SCREENS.MOVIE_DETAILS}
        options={{headerShown: false}}
        component={MovieDetails}
      />
    </Stack.Navigator>
  );
};

export default Routes;
