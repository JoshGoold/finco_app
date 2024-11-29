import React from 'react'
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'

const RecipeList = () => {
    const recipes = useSelector((state) => state.recipes)

    return (
        <View style={{backgroundColor: "black", padding: 30}}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={recipes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={{ width: Dimensions.get('screen').width * 0.80, marginRight: 15 }}>
                        <Image
                            source={{ uri: item.image }}
                            style={{ height: Dimensions.get('screen').width * 0.77, borderRadius: 10 }}
                        />
                        <Text style={{ color: '#CB1C41', marginTop: 10, fontSize: 20, fontWeight: 'bold' }}>{item.title}</Text>
                        <Text style={{ color: "white", marginTop: 5, fontSize: 15 }}>
              {item.description}
            </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default RecipeList