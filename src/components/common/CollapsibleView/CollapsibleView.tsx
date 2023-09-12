import React, {useRef, useEffect, PropsWithChildren} from 'react';
import {View, Text, Animated, StyleSheet} from 'react-native';

interface CollapsibleViewProps extends PropsWithChildren {
  expanded: boolean;
  size: number;
}

const CollapsibleView: React.FC<CollapsibleViewProps> = ({
  expanded,
  size,
  children,
}) => {
  const dropDownAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(dropDownAnimation, {
      toValue: expanded ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [expanded]);

  const height = dropDownAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, size], // Replace 100 with the height of the content you want to show
  });

  return (
    <View>
      <Animated.View style={{overflow: 'hidden', height}}>
        <View style={styles.content}>{children}</View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingVertical: 24,
  },
});

export default CollapsibleView;
