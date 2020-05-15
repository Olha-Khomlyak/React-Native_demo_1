import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../screens/Home';
import PlantDatails from '../screens/PlantDetails';
import ProductOverview from '../screens/ProductOverview';

const screens = {
    Home : {
        screen : Home
    },
    PlantDatails :{
        screen : PlantDatails
    },
    ProductOverview : {
        screen : ProductOverview
    }
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);