import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar
 } from 'react-native';

import Icon from 'react-native-ionicons'

class Explore extends Component {

    componentWillMount() {
        this.startHeaderHeight = 20
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 40 + StatusBar.currentHeight
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex:1 }}>
                <View style={{ flex:1 }}>
                    <View style={{ height: this.startHeaderHeight, backgroundColor:'white', borderBottomWidth:1, borderBottomColor:'#dddddd' }}>
                        <View style={{ 
                            flexDirection: 'row',
                            padding: 10,
                            backgroundColor: 'white',
                            marginHorizontal: 20,
                            shadowOffset:{ width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                            alignItems: 'center',
                            marginTop: Platform.OS == 'android' ? 8 : null
                        }}>
                            <Icon name="search" size={25} />
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Try Lhokseumawe"
                                placeholderTextColor="grey"
                                style={{ 
                                    flex: 1, 
                                    fontWeight: '500', 
                                    backgroundColor: 'white' }}
                            />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default Explore;
