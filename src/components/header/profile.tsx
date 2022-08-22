import {
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
  ViewStyle,
  GestureResponderEvent,
} from 'react-native';
import React, {FC} from 'react';

interface ProfileProps {
  img: ImageSourcePropType;
  imgStyle?: StyleProp<ImageStyle>;
  imgContainerStyle?: StyleProp<ViewStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const Profile: FC<ProfileProps> = ({
  img,
  imgStyle,
  imgContainerStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, imgContainerStyle]}
      onPress={onPress}>
      <Image source={img} style={imgStyle} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: 45,
    width: 45,
    borderRadius: 15,
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
});

export default Profile;
