import axios from 'axios';
import {StatusBar} from 'expo-status-bar';

import {useEffect, useState} from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import ButtonGroup from './components/ButtonGroup';
import InputField from './components/InputField';
import Repo from './components/Repo';
import {COLORS} from './components/styles';
import Wrapper from './components/Wrapper';

const getTrending = query => {
  console.log(query);
  return axios.get('https://api.github.com/search/repositories', {
    params: {
      sort: 'stars',
      order: 'desc',
      q: query,
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

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Any', value: null},
    {label: 'C++', value: 'c++'},
    {label: 'Python', value: 'python'},
    {label: 'C#', value: 'c#'},
    {label: 'Javascript', value: 'javascript'},
  ]);

  useEffect(() => {
    setAPIData(prev => {
      return {...prev, loading: true};
    });
    const query = value ? `language:${value}` : 'any';

    getTrending(query)
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
  }, [value]);

  return (
    <Wrapper>
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

      <View style={{paddingHorizontal: 8, marginVertical: 40, zIndex: 999}}>
        <Text
          style={{
            color: COLORS.WHITE,
            fontSize: 24,
            fontWeight: '600',
            marginBottom: 10,
          }}>
          Trending repositories
        </Text>
        <DropDownPicker
          placeholder="Select language"
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>

      <ScrollView>
        {apiData.repos.map(repo => {
          return <Repo key={repo.id} repo={repo} />;
        })}
      </ScrollView>
    </Wrapper>
  );
}
