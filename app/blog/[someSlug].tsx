import {SafeAreaView, Text} from "react-native";
import {useLocalSearchParams} from "expo-router";

export default function Page() {
    const {someSlug} = useLocalSearchParams()

    return (
        <SafeAreaView>
            <Text>Some slug - {someSlug}</Text>
        </SafeAreaView>
    );
}
