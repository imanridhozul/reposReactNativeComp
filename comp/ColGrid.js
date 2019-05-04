
import React, { Component } from 'react';
import { Image, StatusBar, ToastAndroid, Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Hed from './Hed';


const Toast = (props) => {
    if (props.visible) {
        ToastAndroid.showWithGravityAndOffset(
            props.message,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
        );
        return null;
    }
    return null;
};
export default class Grid extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            murid: [
                {
                    nama: "iman",
                    alamat: 'swadaya'
                },
                {
                    nama: "faris",
                    alamat: 'swasembada'
                }
            ],
            staff: [],
            sh: false
        }
    }
    handleButtonPress = () => {
        this.setState(
            {
                visible: true,
            },
            () => {
                this.hideToast();
            },
        );
    };

    hideToast = () => {
        this.setState({
            visible: false,
        });
    };


    render() {
        return (
            <ScrollView>
                <Hed navigation = {this.props.navigation}/>
                <View style={styles.container}>
                    <Button
                        title="pindah"
                    />
                    <View style={styles.grid}>
                        <View style={styles.col}><Text>adsdsaaaaadsda</Text></View>
                        <View style={styles.col}><Text>adsddda</Text></View>
                        <View style={styles.col}><Text>adsda</Text></View>
                        <View style={styles.col}><Text>adsda</Text></View>
                    </View>
                    <View style={styles.grid}>
                        <View style={styles.col}></View>
                        <View style={styles.col}><Text>adsda</Text></View>
                        <View style={styles.col}><Text>adsda</Text></View>
                        <View style={styles.col}><Text>adsda</Text></View>
                    </View>
                    {/* image */}
                    <View style={{ alignSelf: 'center' }}>
                        {
                            this.state.sh ?
                                <Image
                                    style={{ width: 50, height: 50, alignContent: 'flex-end' }}
                                    resizeMode="contain"
                                    source={{ uri: 'https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/react-native/react-native.png' }}
                                />
                                :
                                false
                        }
                        <Button
                            title="show"
                            onPress={() => this.setState({ sh: !this.state.sh })}
                        />
                    </View>


                    <Text style={styles.welcome}>halo ini aplikasi pertamaku semoga berhasil!!!</Text>
                    <Text style={styles.instructions}>To get rstarted, edit App.js</Text>                   
                    <View style={styles.gret}>
                        <Button
                            title="click"
                            style={{ justifyContent: 'space-between', color: 'red' }}
                        />
                        <Toast visible={this.state.visible} message="Example" />
                        <Text onLongPress={() => alert('teken aja trus')} style={{ fontSize: 100 }}>Scroll me plz</Text>
                    </View>

                    <Button
                        onPress={this.handleButtonPress.bind(this)}
                        title="click Toast"
                        style={{ justifyContent: 'space-between', color: 'red' }}
                    />                   
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    grid: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingTop: 4,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    col: {
        flexBasis: 110,
        borderWidth: 1,
        alignItems: 'center',
        borderColor: 'black',
        height: 40,
        margin: 3,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',

    },
    gret: {
        flex: 1,
        flexDirection: 'column',
        marginRight: 10,
    },
    welcome: {
        fontSize: 10,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
