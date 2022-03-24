import { Component } from "react";
import { render } from "react-dom";
import { View, Text, TouchableNativeFeedback, Image } from "react-native";
import { RNDocScanner } from "rn-scanner-android";

export default class Android extends Component() {
  constructor(props) {
    super(props);
    this.state = {
      photo: null,
    };
  }
  onPressScan = async () => {
    try {
      const image = await RNDocScanner.getDocumentCrop(true);
      this.setState({ photo: image });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ marginBottom: 20 }}>React Scanner</Text>
        <TouchableNativeFeedback
          onPress={this.onPressScan}
          background={TouchableNativeFeedback.SelectableBackground()}
        >
          <View
            style={{
              width: 250,
              backgroundColor: "#61dafb",
              flexDirection: "row",
              justifyContent: "center",
              elevation: 3,
            }}
          >
            <Text style={{ margin: 10, color: "white", fontSize: 16 }}>
              Scan
            </Text>
          </View>
        </TouchableNativeFeedback>
        <View style={{ height: 250, marginTop: 50 }}>
          {this.state.photo != null && (
            <Image
              source={{ uri: this.state.photo }}
              style={{ width: 250, height: 250 }}
            />
          )}
        </View>
      </View>
    );
  }
}
