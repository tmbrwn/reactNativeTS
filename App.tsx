import {
  Body,
  Button,
  Container,
  Content,
  Footer,
  Header,
  Icon,
} from 'native-base';
import { createStackNavigator, NavigationSceneRendererProps } from 'react-navigation';
import { Main } from './src/Main';
import { Settings } from './src/Settings';

interface Interpolation {
  transform: {
    0: {
      translateX: number;
    },
    1: {
      translateY: number;
    },
  };
}

const topToBottomInterpolator = (props: NavigationSceneRendererProps) => {
  const {
    layout,
    scene,
    position,
  } = props;

  const translateX = 0;
  const translateY = position.interpolate({
    inputRange: [scene.index - 1, scene.index],
    outputRange: [-layout.initHeight, 0],
  });

  return {
    opacity: 1,
    transform: [{ translateX }, { translateY }],
  };
};

export default createStackNavigator(
  {
    Settings,
    Main,
  },
  {
    initialRouteName: 'Main',
    navigationOptions: {
      header: null,
    },
    transitionConfig: () => ({
      screenInterpolator: topToBottomInterpolator,
    }),
  },
);
