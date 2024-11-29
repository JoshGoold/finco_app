import React from 'react'
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from '../../context/ThemeContext' 
import { useNavigation } from '@react-navigation/native'

const localImages = {
  '/vanilla_dream.jpg': require('../../../assets/vanilla_dream.jpg'),
  '/choco_o.jpeg': require('../../../assets/choco_o.jpeg'),
  '/strawberry_s.jpg': require('../../../assets/strawberry_s.jpg'),
  '/lemon_z.jpeg': require('../../../assets/lemon_z.jpeg'),
  '/carrot_w.jpeg': require('../../../assets/carrot_w.jpeg'),
  '/bliss.webp': require('../../../assets/bliss.webp'),
  '/para_cup.jpeg': require('../../../assets/para_cup.jpeg'),
  '/rasp_swirl.jpeg': require('../../../assets/rasp_swirl.jpeg'),
  '/echame.jpg': require('../../../assets/echame.jpg'), 
  '/lemon_b.jpg': require('../../../assets/lemon_b.jpg'), 
  '/spiced.jpg': require('../../../assets/spiced.jpg'), 
  '/matcha.jpg': require('../../../assets/matcha.jpg'), 
  '/peach.jpg': require('../../../assets/peach.jpg'), 
  '/z.jpg': require('../../../assets/z.jpg'),
  '/aj.jpg': require('../../../assets/aj.jpg'), 
  '/bl.jpg': require('../../../assets/bl.jpg')
}


const Head = ({recipes}) => {
  const sortedRecipes = [...recipes].sort((a, b) => b.id - a.id)
  
  const { theme } = useTheme()  
  const nav = useNavigation()

  const renderItemImage = (image) => {
    if (image.startsWith('http')) {
      return { uri: image }
    }

    // else
    if(localImages[image]){
      return localImages[image]
    }

// sample image link: https://th.bing.com/th/id/OIP.V83hIVZ6uSWacF9r_ufxhgHaE6?rs=1&pid=ImgDetMain
  }

  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={sortedRecipes}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>nav.navigate('recipe', {recipe: item})} style={{ width: Dimensions.get('screen').width * 0.80, marginRight: 15 }}>
            <Image
              source={renderItemImage(item.image)}
              style={{ width: Dimensions.get('screen').width * 0.77,height: Dimensions.get('screen').width * 0.77, borderRadius: 10, paddin: 10 }}
            />
            <Text
              style={{ color: theme.text, marginTop: 10, fontSize: 20, fontWeight: 'bold' }}
            >
              {item.name || item.title}
            </Text>
            <Text style={{ color: theme.primary, marginTop: 5, fontSize: 15 }}>
              {item.description}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Head
