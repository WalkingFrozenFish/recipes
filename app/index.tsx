import {SafeAreaView, StyleSheet, Text} from "react-native";
import {Link} from "expo-router";

export default function Index() {


    return (
        <SafeAreaView>
            <Text>Main start up page</Text>

            <Link href={"/recipes"}>Recipes categories</Link>

            {/*<Link href={"/recipe/breakfast"}>Breakfast</Link>*/}
            {/*<Link href={"/recipe/lunch"}>Lunch</Link>*/}
            {/*<Link href={"/recipe/dinner"}>Dinner</Link>*/}
            {/*<Link href={"/recipe/dessert"}>Dessert</Link>*/}

            {/*<Link style={styles.link} href={"/home"}>Home page component in root folder - /home</Link>*/}

            {/*<Link style={styles.link} href={"/somePageWithSlug"}>Some component 1 in root folder with slug - /somePageWithSlug</Link>*/}

            {/*<Link style={styles.link} href={"/sluuuuuug"}>Some component 2 in root folder with slug - /sluuuuuug</Link>*/}

            {/*<Link style={styles.link} href={"/settings"}>Settings folder and index.tsx component - /settings</Link>*/}

            {/*<Link style={styles.link} href={"/blog"}>Blog folder and component with slug namme - /blog</Link>*/}

            {/*<Link style={styles.link} href={"/blog/someSlug"}>Blog folder and component with slug and custom route - /blog/someSlug</Link>*/}

            {/*<Link style={styles.link} href={"/blog/otherSlug"}>Blog folder and component with slug and custom route - /blog/lololololo</Link>*/}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    link: {
        marginBottom: 20,
        fontSize: 30
    }
})
