import React, {FC, useRef} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import {colors} from '../../themes/colors';
import AppText from '../text';
import SendMoneyItem from './send-money-item';

import {SendMoneySectionProps} from './types';

const SendMoneySection: FC<SendMoneySectionProps> = ({data}) => {
  const sheetRef = useRef<BottomSheet>(null);

  const onPressAdd = () => {};

  const renderContent = () => (
    <View style={styles.sendMoneySectionBackground}>
      <View style={[styles.sendMoneyRow, styles.mb]}>
        <AppText color={colors.secondary}>Send money to</AppText>
        <TouchableOpacity
          style={styles.textButton}
          onPress={onPressAdd}
          activeOpacity={0.8}>
          <AppText size="sm" color={colors.tertiary}>
            +Add
          </AppText>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        style={styles.sendMoneyList}
        contentContainerStyle={styles.sendMoneyListContainer}
        numColumns={3}
        keyExtractor={({id}: any) => id.toString()}
        renderItem={({item}: any) => <SendMoneyItem {...item} />}
      />
    </View>
  );

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={[240, 85]}
      borderRadius={25}
      initialSnap={1}
      enabledContentTapInteraction={false}
      renderContent={renderContent}
    />
  );
};

const styles = StyleSheet.create({
  sendMoneySectionBackground: {
    width: '100%',
    paddingTop: 15,
    backgroundColor: colors.white,
  },
  sendMoneyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 25,
  },
  sendMoneyList: {
    width: '100%',
    minHeight: '80%',
    paddingHorizontal: 25,
  },
  sendMoneyListContainer: {
    alignItems: 'center',
  },
  textButton: {},
  mb: {
    marginBottom: 25,
  },
});

export default SendMoneySection;
