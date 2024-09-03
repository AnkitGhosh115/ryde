import {
  Image,
  StyleSheet,
  Text,
  Platform,
  View,
  StatusBar,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text>Goober</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
