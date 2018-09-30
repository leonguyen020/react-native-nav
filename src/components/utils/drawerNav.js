import { 
    DrawerNavigator,
    DrawerItems
} from 'react-navigation';

// Component
import Home from '../home';
import Calendars from '../calendars/calendars';


export const DrawerNav = DrawerNavigator({
    Home:{
        screen: Home
    },
    Calendars:{
        screen: Calendars
    }
},{
    initialRouteName: Home
})