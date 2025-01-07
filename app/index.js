import { View, Text, TouchableOpacity, themeStylesheet, Image, ScrollView } from 'react-native';
import { characters } from '../data/characters'; // Ensure you're importing the default export
import { Link } from 'expo-router';
import { themeStyles } from '../styles/styles';


// Helper function to create a slug from a name
const slugify = (name) => {
  return name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
};

export default function Page() {
  return (
    <View style={themeStyles.screen}>
      <Text style={themeStyles.userStatus}>
        Choose A Fighter
      </Text>
      <ScrollView contentContainerStyle={themeStyles.gridContainer}>
        {/* Convert characters object to an array and map over it */}
        <View style={themeStyles.container}>
          <View style={themeStyles.gridContainer}>
            {Object.values(characters).map((character) => {
              const slug = slugify(character.name); // Create slug for the character
              return (
                <Link key={character.id} href={`/cardlist/${slug}`} style={themeStyles.box}>

                  <View style={themeStyles.boxContent}>
                    <Image source={character.image} style={{ width: 72, height: 72, borderRadius: 8 }} />
                    <Text
                      style={{
                        marginTop: 8,
                        fontSize: 14,
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        color: '#222',
                      }}
                    >
                      {character.name.replace(/_/g, ' ')}
                    </Text>
                  </View>
                </Link>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

