import {Image, SafeAreaView, StyleSheet, Text} from "react-native";
import {useLocalSearchParams} from "expo-router";
import {useEffect, useState} from "react";
import axios from "axios";

export default function RecipePage() {
    const {category, recipeId} = useLocalSearchParams()
    const [recipe, setRecipe] = useState(null)

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`https://recipe-7f83c-default-rtdb.firebaseio.com/${category}/${recipeId}.json`)
                setRecipe(response.data)
            } catch (e) {
                console.log(e)
            }
        }

        getData()
    }, [recipeId]);

    return (
        <>
            {recipe !== null ?
        <SafeAreaView>
            <Text>Recipe page - id {recipeId}</Text>
            <Text>Title {recipe.title}</Text>
            <Text>Description {recipe.description}</Text>
            <Image style={styles.image} source={{
                uri: recipe.imageUrl
            }} />

            <Text>Ingredients</Text>
            {
                recipe.ingredients.length > 0 ? recipe.ingredients.map((item, index) => {
                    return <Text>{index}. {item}</Text>
                }) : <Text>Not found ingredients</Text>
            }

            <Text>Process</Text>
            {
                recipe.process.length > 0 ? recipe.process.map((item, index) => {
                    return <Text>{index}. {item}</Text>
                }) : <Text>Not found process</Text>
            }

        </SafeAreaView>
        : <Text>Loading</Text>}
        </>

    );
}

const styles = StyleSheet.create({
    image: {
        height: 250
    }
})