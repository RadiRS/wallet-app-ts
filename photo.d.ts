// This config help ts to recognize the image file

declare module '*.png' {
  const value: any;
  export = value;
}

declare module '*.jpg' {
  const value: any;
  export = value;
}

// This config to fixed any type vector icons error
declare module 'react-native-vector-icons/Ionicons';
