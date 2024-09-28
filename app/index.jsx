import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Hi Aora!</Text>
      <StatusBar style="auto" />
      <Link href="/home" style={{ color: 'blue'}}>Go to home</Link>
      <Link href="/bookmark" style={{ color: 'blue'}}>Go to bookmark</Link>
      <Link href="/create" style={{ color: 'blue'}}>Go to create</Link> 
      <Link href="/profile" style={{ color: 'blue'}}>Go to profile</Link>
    </View>
  );
}
