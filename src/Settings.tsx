import {
    Body,
    Button,
    Container,
    Content,
    Header,
    Icon,
    Left,
    Right,
    Title,
} from 'native-base';
import * as React from 'react';
import {
    Text,
} from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

export interface Props {
    navigation: NavigationScreenProp<{}>;
}

export const Settings: React.SFC<Props> = ({ navigation }) => (
    <Container>
        <Header>
            <Left>
                <Button
                    transparent
                    onPress={() => navigation.goBack()}
                >
                    <Icon name="arrow-up" />
                </Button>
            </Left>
            <Body>
                <Title>Settings</Title>
            </Body>
            <Right />
        </Header>
        <Content>
            <Text>Here are some settings</Text>
        </Content>
    </Container>
);
