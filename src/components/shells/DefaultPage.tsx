import React from 'react';
import {View, StyleSheet} from 'react-native';

import {colors} from '../../global/colors';

export type DefaultPageProps = {
  children: React.ReactNode;
};

const DefaultPage = ({children}: DefaultPageProps): React.ReactElement => (
  <View style={styles.estilo1}>{children}</View>
);

const styles = StyleSheet.create({
  estilo1: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DefaultPage;
