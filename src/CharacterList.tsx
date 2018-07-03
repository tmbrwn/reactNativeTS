import * as React from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';
import { Icon } from 'native-base';

export interface Character {
  name: string;
  levels: Level[]
}

export interface Level {
  class: string;
  level: number;
}

export interface ListViewProps {
  characters: Character[];
}

const attachKeys = (list: Character[]) => list.map(x => ({ key: x.name, ...x }));

const formatLevels = (levels: Level[]) => levels.map(l => `Level ${l.level} ${l.class}`).join(', ');

export const CharacterList: React.SFC<ListViewProps> = ({
  characters,
}) => (
  <FlatList
    data={attachKeys(characters)}
    renderItem={({item}) => <CharacterListItem {...item}/>}
    ItemSeparatorComponent={CharacterListSeparator}
  />
);

type ListItemProps = Character;

const CharacterListItem: React.SFC<ListItemProps> = ({
  name,
  levels,
}) => (
  <View style={listItemStyles.cell}>
    <View style={listItemStyles.summary}>
      <Text style={listItemStyles.name}>{name}</Text>
      <Text style={listItemStyles.level}>{formatLevels(levels)}</Text>
    </View>
    <View style={{ flex: -1 }} /*because the icon's container expands too much*/>
      <Icon name='arrow-forward' type='Ionicons' style={{ color: '#5292f9' }} />
    </View>
  </View>
);

const listItemStyles = StyleSheet.create({
  cell: {
    height: 100,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summary: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
  },
  level: {
    fontStyle: 'italic',
  },
});

const CharacterListSeparator: React.SFC = () => (
  <View
    style={{
      height: 1,
      backgroundColor: 'darkgrey',
    }}
  />
)