import {SafeAreaView, Text} from 'react-native';
import {Link} from "expo-router";

// Match with /recipes route

export default function RecipesList() {
    return (
        <SafeAreaView>
            <Text>All recipes categories links</Text>

            {/*Slugs /recipe/SLUG */}
            <Link href={"/recipes/breakfast"}>Breakfast</Link>
            <Link href={"/recipes/lunch"}>Lunch</Link>
            <Link href={"/recipes/dinner"}>Dinner</Link>
            <Link href={"/recipes/dessert"}>Dessert</Link>
        </SafeAreaView>
    );
}
