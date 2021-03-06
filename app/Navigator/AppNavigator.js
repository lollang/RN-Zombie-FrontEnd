import {connect} from 'react-redux';
import {createReactNavigationReduxMiddleware, createReduxContainer} from 'react-navigation-redux-helpers';

import {
    createStackNavigator,
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';

import WelcomePage from '../Pages/WelcomePage';
import HomePagePage from '../Pages/HomePagePage';
import ChatPage from '../Pages/ChatPage';
import DescriptionPage from '../Pages/DescriptionPage';
import RecordsPage from '../Pages/RecordsPage';
import SettingsPage from '../Pages/SettingsPage';
import AuthControlPage from '../Pages/AuthControlPage';

export const rootCom = 'Init';

const InitNavigator = createStackNavigator({
    WelcomePage: {
        screen: WelcomePage,
        navigationOptions: {
            header: null
        }
    }
});

const MainNavigator = createStackNavigator({
    HomePage: {
        screen: HomePagePage,
        navigationOptions: {
            header: null
        }
    },
    ChatPage: {
        screen: ChatPage,
        navigationOptions: {
            header: null
        }
    },
    DescriptionPage: {
        screen: DescriptionPage,
        navigationOptions: {
            header: null
        }
    },
    RecordsPage: {
        screen: RecordsPage,
        navigationOptions: {
            header: null
        }
    },
    SettingsPage: {
        screen: SettingsPage,
        navigationOptions: {
            header: null
        }
    },
    LoginControlPage: {
        screen: AuthControlPage,
        navigationOptions: {
            header: null
        }
    },
})
export const RootNavigator = createAppContainer(createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator,
}, {
    navigationOptions: {
        header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    }
}));
/**
 * 1.初始化react-navigation与redux的中间件，
 * 该方法的一个很大的作用就是为createReduxContainer的key设置actionSubscribers(行为订阅者)
 * 设置订阅者@https://github.com/react-navigation/react-navigation-redux-helpers/blob/master/src/middleware.js#L29
 * 检测订阅者是否存在@https://github.com/react-navigation/react-navigation-redux-helpers/blob/master/src/middleware.js#L97
 * @type {Middleware}
 */
export const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
    'root'
);

/**
 * 2.将根导航器组件传递给 createReduxContainer 函数,
 * 并返回一个将navigation state 和 dispatch 函数作为 props的新组件；
 * 注意：要在createReactNavigationReduxMiddleware之后执行
 */
const AppWithNavigationState = createReduxContainer(RootNavigator, 'root');

/**
 * State到Props的映射关系
 * @param state
 */
const mapStateToProps = state => ({
    state: state.nav,//v2
});
/**
 * 3.连接 React 组件与 Redux store
 */
export default connect(mapStateToProps)(AppWithNavigationState);
