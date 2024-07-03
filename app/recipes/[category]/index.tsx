import {Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Link, useLocalSearchParams} from "expo-router";
import {useEffect, useState} from "react";
import axios from "axios";

// Match with /recipes/SLUG_CATEGORY route

export default function RecipesCategory() {
    const {category} = useLocalSearchParams()
    const [recipes, setRecipes] = useState<any[]>([])

    useEffect(() => {
        const getData = async () => {
            try {

                const response = await axios.get(`https://recipe-7f83c-default-rtdb.firebaseio.com/${category}.json`)

                const newData = []

                for (const key in response.data) {
                    newData.push({
                        ...response.data[key],
                        recipePage: key
                    })
                }

                setRecipes(newData)
            } catch (e) {
                console.log(e)
            }
        }

        getData()
    }, []);

    return (
        <SafeAreaView>
            <Text>All recipes from {category} category</Text>

            {
                recipes.length > 0 ?

            <ScrollView>
                {
                    recipes.map(item => {
                        return (
                            <View style={styles.wrapper} key={item.id}>
                                <Link href={`/recipes/${category}/${item.recipePage}`}>{item.recipePage}</Link>
                                <Text style={styles.title}>{item.title} {item.imageUrl}</Text>
                                <Image source={{ uri: item.imageUrl }} style={styles.image} />
                            </View>
                        )
                    })
                }
            </ScrollView>
            : <Text>Loading</Text>
            }

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {

    },
    title: {

    },
    image: {
        height: 100
    }
})
