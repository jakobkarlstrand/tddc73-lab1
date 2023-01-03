import axios from 'axios';
import {StatusBar} from 'expo-status-bar';

import {useEffect, useState} from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';

import ButtonGroup from './components/ButtonGroup';
import InputField from './components/InputField';
import Repo from './components/Repo';
import {COLORS} from './components/styles';
import Wrapper from './components/Wrapper';

export const getTrending = () => {
  return axios.get('https://api.github.com/search/repositories', {
    params: {
      sort: 'stars',
      order: 'desc',
      q: 'any',
      per_page: 20,
    },
  });
};

const initialState = {
  repos: [],
  loading: true,
  error: false,
};

export default function App() {
  const [apiData, setAPIData] = useState(initialState);

  useEffect(() => {
    getTrending()
      .then(res => {
        setAPIData(prev => {
          return {...prev, repos: res.data.items, loading: false};
        });
      })
      .catch(er => {
        setAPIData(prev => {
          return {...prev, error: true, loading: false};
        });
      });
  }, []);

  return (
    <Wrapper>
      <View>
        {apiData.loading && (
          <View
            style={{
              justifyContent: 'center',
              height: '100%',
              alignItems: 'center',
            }}>
            <Text style={{color: COLORS.WHITE}}>Loading...</Text>
          </View>
        )}
        {apiData.repos.map(repo => {
          return <Repo key={repo.id} repo={repo} />;
        })}
      </View>
    </Wrapper>
  );
}
