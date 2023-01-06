import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Octicons, AntDesign} from '@expo/vector-icons';
import {COLORS, STYLES} from './styles';
import RepoModal from './RepoModal';
function Repo({repo}) {
  const {name, description, forks_count, stargazers_count} = repo;
  const [openModal, setOpenModal] = useState(false);
  const desc = description ? String(description) : 'No description available.';

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'column',
        backgroundColor: COLORS.LIGHT,
        marginHorizontal: 10,
        marginBottom: 10,
        padding: 10,
        borderColor: COLORS.WHITE,
        borderWidth: 1,
        borderRadius: 8,
      }}
      onPress={() => setOpenModal(true)}>
      <RepoModal
        open={openModal}
        repo={repo}
        close={() => setOpenModal(false)}
      />

      <View style={STYLES.iconCount}>
        <Octicons name="repo" size={20} color={COLORS.WHITE} />
        <View style={{marginLeft: 5}}>
          <Text style={STYLES.text}> {name}</Text>
        </View>
      </View>

      <View style={STYLES.iconCount}>
        <Text style={STYLES.text}>
          {desc.length > 125 ? desc.substring(0, 125) + '..' : desc}
        </Text>
      </View>

      <View stlye={{flexDirection: 'row'}}>
        <View style={STYLES.iconCount}>
          <Octicons name="repo-forked" size={16} color={COLORS.WHITE} />

          <Text style={STYLES.text}> {forks_count}</Text>
        </View>
        <View style={STYLES.iconCount}>
          <AntDesign name="staro" size={16} color={COLORS.WHITE} />
          <Text style={STYLES.text}> {stargazers_count}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Repo;
