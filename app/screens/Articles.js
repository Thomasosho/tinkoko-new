import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
//galio
import { Block, Text, theme } from 'galio-framework';

import { articles, nowTheme } from '../constants/';
import { Card } from '../components/';

class Articles extends React.Component {
  renderCards = () => {
    return (
      <Block style={styles.container}>
        <Text size={16} style={styles.title}>
          Popular Products
        </Text> 
        {/* <Card item={articles[0]} horizontal /> */}
        <Block flex row>
          <Card item={articles[3]} style={{ marginRight: theme.SIZES.BASE }} />
          <Card item={articles[4]} />
        </Block>
        <Block flex row>
          <Card item={articles[5]} style={{ marginRight: theme.SIZES.BASE }} />
          <Card item={articles[6]} />
        </Block>
        <Block flex row>
          <Card item={articles[2]} style={{ marginRight: theme.SIZES.BASE }} />
          <Card item={articles[2]} />
        </Block>
        <Block flex row>
          <Card item={articles[4]} style={{ marginRight: theme.SIZES.BASE }} />
          <Card item={articles[2]} />
        </Block>
        {/* <Card item={articles[3]} horizontal />
        <Card item={articles[4]} full /> */}
      </Block>
    );
  };

  render() {
    return (
      <Block flex>
        <ScrollView showsVerticalScrollIndicator={false}>{this.renderCards()}</ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.SIZES.BASE
  },
  title: {
    fontFamily: 'montserrat-bold',
    paddingBottom: theme.SIZES.BASE,
    marginTop: 0,
    color: nowTheme.COLORS.HEADER
  }
});

export default Articles;
