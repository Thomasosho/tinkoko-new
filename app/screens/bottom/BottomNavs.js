import React, {useState} from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation();
const HomeRoute = () => navigation.navigate('Home');

const ProductsRoute = () => <Text>Albums</Text>;

const AccountRoute = () => <Text>Recents</Text>;

const NewsRoute = () => <Text>Notifications</Text>;

const BottomNavs = () => {
    const [index, setIndex] = useState({ key: 'home', title: 'Home', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'});
    const [routes] = useState([
    { key: 'home', title: 'Home', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'products', title: 'Products', focusedIcon: 'album' },
    { key: 'account', title: 'Account', focusedIcon: 'history' },
    { key: 'news', title: 'News', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    products: ProductsRoute,
    account: AccountRoute,
    news: NewsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNavs;