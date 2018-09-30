import { 
    StackNavigator,
    DrawerNavigator
} from 'react-navigation';

// Stack Nav Component
import LoginPage from '../login/login';

// Drawer Component
import Home from '../home';
import Calendars from '../calendars/calendars';

export const StackNav = StackNavigator({
    LoginPage:{
        screen: LoginPage
    }
},{
    headerMode: 'none'
});

export const DrawerNav = DrawerNavigator({
    Home:{
        screen: Home
    },
    Calendars:{
        screen: Calendars
    }
},{
    // initialRouteName: Home
})