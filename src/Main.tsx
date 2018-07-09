import { Body, Button, Container, Content, Header, Icon, Left, Right } from 'native-base';
import * as React from 'react';
import { Text } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

export interface Props {
    navigation: NavigationScreenProp<{}>;
}

export const Main: React.SFC<Props> = ({ navigation }) => (
    <Container>
        <Header>
            <Left>
                <Button
                    transparent
                    onPress={() => navigation.navigate('Settings')}
                >
                    <Icon name="arrow-down" />
                </Button>
            </Left>
            <Body>
                <Text>Main</Text>
            </Body>
            <Right />
        </Header>
        <Content>
            <Text>It's your birthday</Text>
        </Content>
    </Container>
);
