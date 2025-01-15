import { StyleSheet, View, Text, Button } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import DropdownComponent from '@/components/formElements/Dropdown';
import TextInput from '@/components/formElements/TextInput';
import { useStore } from '@/stores/global'
export default function CompList() {

  const { counter, increaseCount, decreaseCount, reset } = useStore()

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">List of Components</ThemedText>
      </ThemedView>

      <ThemedText>List of common components to use</ThemedText>

      <View className='bg-gray-50 px-3 py-4 rounded-lg' style={styles.shadow}>
        <ThemedText>dropdown Select:</ThemedText>
        <DropdownComponent />
      </View>

      <View className='bg-gray-50 px-3 py-4 rounded-lg' style={styles.shadow}>
        <ThemedText className='mb-2'>Text Input:</ThemedText>
        <TextInput className='bg-white border border-gray-300 rounded-lg pl-3' />
      </View>

      <View className="bg-gray-50 px-3 py-4 rounded-lg shadow">
        <ThemedText className="mb-2">Buttons (zustand) :</ThemedText>
        <View className="">
          <Button onPress={increaseCount} title="+" />
          <Button onPress={decreaseCount} title="-" />
          <Button onPress={reset} title="Reset" />
        </View>
        <ThemedText className="mt-2">counter: {counter}</ThemedText>
      </View>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  }
});


