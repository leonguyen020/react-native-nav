import { 
    StackNavigator,
} from 'react-navigation';

// Stack Nav Component
import LoginPage from '../login/login';


export const StackNav = StackNavigator({
    LoginPage:{
        screen: LoginPage
    }
},{
    headerMode: 'none'
})