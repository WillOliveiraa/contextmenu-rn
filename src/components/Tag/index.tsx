import { Text } from "react-native";

import { HoldItem } from "react-native-hold-menu";
import Animated, { FadeIn, FadeOut, Layout } from "react-native-reanimated";
import { styles } from "./styles";

type Props = {
  title: string;
  onRemove: () => void;
};

export function Tag({ title, onRemove }: Props) {
  return (
    <Animated.View
      layout={Layout}
      entering={FadeIn}
      exiting={FadeOut}
      style={styles.container}
    >
      <HoldItem
        items={[
          { text: title, isTitle: true },
          {
            text: "Apagar",
            isDestructive: true,
            icon: "trash",
            onPress: () => onRemove(),
          },
        ]}
      >
        <Text style={styles.title}>#{title}</Text>
      </HoldItem>
    </Animated.View>
  );
}
