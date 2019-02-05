import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idToken: '',
    };
  }

  render() {
    return (
      <View style={styles.prographyMainContainer}>
        <View style={styles.prographyNavbar}>
          <Image
            style={styles.prographyLogo}
            resizeMode={'contain'}
            source={require('./assets/logo.png')}
          />
        </View>
        <View style={styles.prographyApplyRegion}>
          <Text style={styles.prographyApplyLabel}>
            등록하기
          </Text>
          <TextInput
            style={styles.prographyApplyInput}
            placeholder="전달받은 코드를 입력하세요!"
            placeholderTextColor="#808080"
            onChangeText={(text) => this.setState({idToken: text})}
          />

          <View style={styles.prographyApplyDataRegion}>
            <Text style={styles.prographyApplyLabel}>
              정보 확인하기
            </Text>
            <Text style={styles.prographyApplyVerifyText}>
              이름: 신성환
            </Text>
            <Text style={styles.prographyApplyVerifyText}>
              분야: 웹 프론트엔드
            </Text>
          </View>
        </View>
        <View style={styles.prographyApplyButtonSet}>
          <TouchableOpacity
            style={styles.prographyApplyButton}>
            <Text style={styles.prographyApplyButtonText}>등록하기</Text>
          </TouchableOpacity>
        </View>

        {/*<View style={styles.prographyApplyRegion}>*/}
        {/*<TouchableOpacity*/}
        {/*style={styles.prographyAttendanceButton}>*/}
        {/*<Text style={styles.prographyAttendanceButtonLabel}>3/2 세션 출석하기</Text>*/}
        {/*<Text style={styles.prographyAttendanceButtonText}>오리엔테이션, 팀빌딩</Text>*/}
        {/*</TouchableOpacity>*/}
        {/*<Text>Open up App.js to start working on your app!</Text>*/}
        {/*</View>*/}


      </View>
    );
  }
}

const styles = StyleSheet.create({
  prographyMainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  prographyNavbar: {
    height: 80,
    width: '100%',
    backgroundColor: '#D9375A',

    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  prographyLogo: {
    height: 25,
    marginBottom: 15
  },


  prographyApplyRegion: {
    padding: 20,
    width: '100%',
    flex: 1,
  },
  prographyApplyLabel: {
    textAlign: 'left',
    width: '100%',
    fontSize: 21,
    color: '#D9375A',
    marginVertical: 10
  },

  prographyApplyInput: {
    marginTop: 10,
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9e9',
    textAlign: 'right',
    fontWeight: '300',
    color: '#4d4d4d',
    width: '100%'
  },
  prographyApplyDataRegion: {
    width: '100%',
    marginTop: 30
  },
  prographyApplyDataText: {
    textAlign: 'left',
    width: '100%',
    fontSize: 21,
    color: '#D9375A'
  },
  prographyApplyVerifyText: {
    color: '#4d4d4d'
  },


  prographyApplyButtonSet:{
    padding: 10,
    width: '100%'
  },
  prographyApplyButton: {
    width: '100%',
    backgroundColor: '#D9375A',
    borderRadius: 10,
    padding: 15
  },
  prographyApplyButtonText:{
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    width: '100%',
    textAlign: 'center'
  },



    // 출석체크 버튼 만들던거
  prographyAttendanceButtonRegion: {
    width: '100%',
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  prographyAttendanceButton: {
    borderWidth: 1,
    width: '80%',
    borderColor: '#D9375A',
    backgroundColor: 'transparent',
    borderRadius: 10,
    padding: 15
  },
  prographyAttendanceButtonText: {
    fontWeight: '300'
  },
  prographyAttendanceButtonLabel: {
    fontSize: 16,
    fontWeight: '600'
  },

});
