import {StyleSheet, ImageSourcePropType, FlatList} from 'react-native';
import React, {FC} from 'react';
import CardItem from './card-item';

export interface CardProps {
  id: number;
  accountNo: string;
  balance: number;
  alias?: string;
  logo?: ImageSourcePropType;
}

interface CardSectionProps {
  data: Array<CardProps>;
}

const CardSection: FC<CardSectionProps> = ({data}: CardSectionProps) => {
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.listContainer}
      data={data}
      contentContainerStyle={styles.contentContainer}
      keyExtractor={({id}: any) => id.toString()}
      renderItem={({item}: any) => <CardItem {...item} />}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    flex: 1,
    paddingLeft: 25,
    paddingBottom: 15,
  },
  contentContainer: {
    paddingRight: 25,
    alignItems: 'center',
  },
});

export default CardSection;
