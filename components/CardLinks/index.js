import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from '../CardComponent/styles'; // Adjust the path based on your project structure

const CardLinks = ({ card, handleMoveSetLinkPress, openLink }) => {
  return (
    <>
      {card?.punisherData.length > 0 && (
        <TouchableOpacity
          style={styles.link}
          onPress={() => handleMoveSetLinkPress('Punishers', card?.punisherData || [])}
        >
          <FontAwesome name="external-link" size={16} color="white" />
          <Text style={styles.linkText}>Punishers</Text>
          <Text style={styles.counter}>{card?.punisherData.length}</Text>
        </TouchableOpacity>
      )}
      {card?.moveData.length > 0 && (
        <TouchableOpacity
          style={styles.link}
          onPress={() => handleMoveSetLinkPress('Important Moves', card?.moveData || [])}
        >
          <FontAwesome name="external-link" size={16} color="white" />
          <Text style={styles.linkText}>Important Moves</Text>
          <Text style={styles.counter}>{card?.moveData.length}</Text>
        </TouchableOpacity>
      )}
      {card?.moveFlowChartData.length > 0 && (
        <TouchableOpacity
          style={styles.link}
          onPress={() => handleMoveSetLinkPress('Move Flow Chart', card?.moveFlowChartData || [])}
        >
          <FontAwesome name="external-link" size={16} color="white" />
          <Text style={styles.linkText}>Move Flow Chart</Text>
          <Text style={styles.counter}>{card?.moveFlowChartData.length}</Text>
        </TouchableOpacity>
      )}
      {card?.followUpData.length > 0 && (
        <TouchableOpacity
          style={styles.link}
          onPress={() => handleMoveSetLinkPress('Follow Ups', card?.followUpData || [])}
        >
          <FontAwesome name="external-link" size={16} color="white" />
          <Text style={styles.linkText}>Guaranteed Follow Ups</Text>
          <Text style={styles.counter}>{card?.followUpData.length}</Text>
        </TouchableOpacity>
      )}
      {card?.comboData.length > 0 && (
        <TouchableOpacity
          style={styles.link}
          onPress={() => handleMoveSetLinkPress('Combos', card?.comboData || [])}
        >
          <FontAwesome name="external-link" size={16} color="white" />
          <Text style={styles.linkText}>Combos</Text>
          <Text style={styles.counter}>{card?.comboData.length}</Text>
        </TouchableOpacity>
      )}
      {(card?.youtubeLink || card?.twitchLink) && (
        <Text style={{ ...styles.heroName, marginBottom: 8 }}>Guide and Stream Links</Text>
      )}
      <View style={{ marginTop: 0 }}>
        {card?.youtubeLink && (
          <TouchableOpacity
            onPress={() => openLink(card.youtubeLink)}
            style={styles.link}
          >
            <FontAwesome name="youtube" size={24} color="white" />
            <Text style={styles.linkText}>{card?.youtubeLink}</Text>
            <FontAwesome name="external-link" size={20} color="white" style={styles.counter} />
          </TouchableOpacity>
        )}
        {card?.twitchLink && (
          <TouchableOpacity
            onPress={() => openLink(card.twitchLink)}
            style={styles.link}
          >
            <FontAwesome name="twitch" size={24} color="white" />
            <Text style={styles.linkText}>{card?.twitchLink}</Text>
            <FontAwesome name="external-link" size={20} color="white" style={styles.counter} />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default CardLinks;
