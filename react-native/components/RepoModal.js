import {
  AntDesign,
  Octicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import React from 'react';
import {Button, Modal, Text, View} from 'react-native';
import {COLORS, STYLES} from './styles';

function RepoModal({repo, close, open}) {
  const {
    name,
    description,
    forks_count,
    stargazers_count,
    owner,
    languages,
    updatedAt,
    license,
    size,
  } = repo;
  const desc = description ? String(description) : 'No description available.';

  return (
    <Modal
      animationType="slide"
      visible={open}
      transparent={true}
      onRequestClose={() => {
        close();
      }}>
      <View
        style={{
          backgroundColor: COLORS.MAIN + '88',
          height: '100%',

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: COLORS.MAIN,
            height: '80%',
            width: '90%',

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={STYLES.iconCount}>
            <Octicons name="repo" size={24} color={COLORS.WHITE} />
            <View style={{marginLeft: 5, marginBottom: 10}}>
              <Text style={{...STYLES.text, fontSize: 24}}>
                {owner.login}/{name}
              </Text>
            </View>
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={STYLES.text}>{desc}</Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <View style={STYLES.iconCount}>
              <Octicons name="repo-forked" size={16} color={COLORS.WHITE} />
              <Text
                style={{
                  fontWeight: 'bold',
                  marginLeft: 2,
                  color: COLORS.WHITE,
                }}>
                {' '}
                Forks
              </Text>
              <Text style={STYLES.text}> {forks_count}</Text>
            </View>
            <View style={STYLES.iconCount}>
              <AntDesign name="staro" size={16} color={COLORS.WHITE} />
              <Text
                style={{
                  fontWeight: 'bold',
                  marginLeft: 2,
                  color: COLORS.WHITE,
                }}>
                Stars
              </Text>
              <Text style={STYLES.text}> {stargazers_count}</Text>
            </View>
            <View style={STYLES.iconCount}>
              <MaterialIcons name="sd-storage" size={16} color={COLORS.WHITE} />
              <Text
                style={{
                  fontWeight: 'bold',
                  marginLeft: 2,
                  color: COLORS.WHITE,
                }}>
                Size
              </Text>
              <Text style={STYLES.text}>
                {' '}
                {(size * 0.000001).toFixed(2)} MB
              </Text>
            </View>
            <View style={STYLES.iconCount}>
              <MaterialCommunityIcons
                name="license"
                size={16}
                color={COLORS.WHITE}
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  marginLeft: 2,
                  color: COLORS.WHITE,
                }}>
                {license?.name || 'Other'}
              </Text>
              <Text style={STYLES.text}>{}</Text>
            </View>
          </View>
        </View>
        <Button color={'white'} title="Close" onPress={() => close()}></Button>
      </View>
    </Modal>
  );
}

export default RepoModal;
