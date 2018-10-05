import { 
    StackNavigator,
    DrawerNavigator
} from 'react-navigation';

// Stack Nav Component
import LoginPage from '../login/login';

import AboutUs from '../pages/about';

// Drawer Component
import Home from '../home';
import Calendars from '../calendars/calendars';
// import SupportUs from '../pages/support';

export const StackNav = StackNavigator({
    LoginPage:{
        screen: LoginPage
    },
    Home:{
        screen:DrawerNav
    }
},{
    headerMode: 'none'
});

const DrawerNav = DrawerNavigator({
    Home:{
        screen: Home
    },
    Calendars:{
        screen: Calendars
    },
    // SupportUs:{
    //     screen: SupportUs
    // },
    AboutUs:{
        screen: AboutUs
    },
},{
    initialRouteName: 'Home'
})