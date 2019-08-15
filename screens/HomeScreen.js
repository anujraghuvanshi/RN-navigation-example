import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Button
} from "react-native";

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title="Go back to Home screen" onPress={() => this.props.navigation.goBack()} />
                <Button title="Go Back to Initial screen" onPress={() => this.props.navigation.popToTop()} />
            </View>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
