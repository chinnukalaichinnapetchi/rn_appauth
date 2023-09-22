/**
w strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Alert

} from 'react-native';

// import { authorize, prefetchConfiguration, refresh, revoke, register } from 'react-native-app-auth';
import { SocialIcon } from 'react-native-elements';
import * as AppAuth from 'react-native-app-auth';



const githubconfig = {
  clientId: '71144cc07141ad7062df',
  clientSecret: '3f4c995e4c0b163d8f6b4339335ff3fc4bc88b5d',
  redirectUrl: 'github://oauth',
  issuer: 'https://github.com',
  scopes: ['identity', 'user', 'repo', 'offline_access'],

  additionalParameters: {
    access_type: 'offline',
  },
  additionalHeaders: { 'Accept': 'application/json' },
  serviceConfiguration: {
    authorizationEndpoint: 'https://github.com/login/oauth/authorize',
    tokenEndpoint: 'https://github.com/login/oauth/access_token',
    revocationEndpoint: 'https://github.com/settings/connections/applications/xxx',
  },

}
var clientId = '867772612480-i383iqu6168kcvd7gevvd7c72s7incf3.apps.googleusercontent.com';
const googleconfig = {
  issuer: 'https://accounts.google.com',
  skipTokenExchange: "true",
  clientId: '867772612480-i383iqu6168kcvd7gevvd7c72s7incf3.apps.googleusercontent.com',
  redirectUrl: 'com.googleusercontent.apps.867772612480-i383iqu6168kcvd7gevvd7c72s7incf3:/oauth/google/',
  scopes: ['openid', 'https://www.googleapis.com/auth/userinfo.profile', "https://www.googleapis.com/auth/userinfo.email",], // Include scopes for user data you want to access
  serviceConfiguration: {
    authorizationEndpoint: `https://accounts.google.com/o/oauth2/auth?clientId=${clientId}`,
    tokenEndpoint: 'https://www.googleapis.com/oauth2/v4/token',
  },
  additionalParameters: { prompt: 'login' }
  // scopes: ['https://mail.google.com/', "profile", "email"]
}

const facebookconfig = {
  issuer: 'https://facebook.com',
  clientId: '273802908833779',
  redirectUrl: 'https://picsum.photos/',
  scopes: ['public_profile'],
  serviceConfiguration: {
    authorizationEndpoint: 'https://www.facebook.com/v12.0/dialog/oauth',
    tokenEndpoint: 'https://graph.facebook.com/v12.0/oauth/access_token',
  },

}
const twitterconfig = {
  issuer: "https://twitter.com",
  clientId: 'fA3PEXHKBnqtjQoMQ8Ibwy5gY',
  clientSecret: 'fP4wvzreIMQDila7CVU5cPXkxXTmJcT0MqJoCQI9nWNHtReUvw',
  redirectUrl: 'https://picsum.photos/', // Should match the callback URL in your Twitter app settings
  serviceConfiguration: {
    authorizationEndpoint: 'https://api.twitter.com/oauth/authenticate',
    tokenEndpoint: 'https://api.twitter.com/oauth/access_token',
  },
  authorizationURL: "https://twitter.com/i/oauth2/authorize?code_challenge=challenge&code_challenge_method=plain",
  scope: ['offline.access'],
  state: "state",
  code_challenge: "challenge",
  code_challenge_method: "plain"
}


const App = () => {

  // React.useEffect(() => {
  //   AppAuth.prefetchConfiguration({
  //     warmAndPrefetchChrome: true,
  //     connectionTimeoutSeconds: 5,
  //     ...googleconfig
  //   });
  // }, []);

  const googleSignIn = async () => {

    // AppAuth.authorize(googleconfig).then((res) => {
    //   console.log(res, "resssss")
    // }).catch((error) => {
    //   throw new Error(error);
    // })
    try {
      console.log("lklklklk");
      const result = await AppAuth.authorize(googleconfig);

      console.log("mmmmmmmmmmm");

      // Refresh token
      // const refreshedState = await refresh(config, {
      //   refreshToken: result.refreshToken
      // });

      // // Revoke token
      // await revoke(config, {
      //   tokenToRevoke: refreshedState.refreshToken
      // });

      console.log('Access Token:', result);

      //Use the access token to fetch user details from Google APIs
      const userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: {
          Authorization: `Bearer ${result.accessToken}`,
        },
      });

      const userInfo = await userInfoResponse.json();
      console.log('User Info:', userInfo);
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };



  const githublogin = async () => {

    AppAuth.authorize(githubconfig).then((res) => {
      console.log(res, "resssss")
    })

  };
  const facebooklogin = async () => {

    
    AppAuth.authorize(facebookconfig).then((res) => {
      console.log(res, "resssss")
    })

  };
  const twitterlogin = async () => {

   
    AppAuth.authorize(twitterconfig).then((res) => {
      console.log(res, "resssss")
    })

  };










  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <ScrollView  style={{backgroundColor:'red'}}>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: '50%' }}>
          <SocialIcon
            type='google'
            onPress={() => googleSignIn()}
          />
          <SocialIcon

            onPress={() => { facebooklogin() }}
            type='facebook'
          />
          <SocialIcon
            // raised={false}
            onPress={() => githublogin()}
            type='github'
          />

          <SocialIcon
            type='twitter'
            onPress={() => twitterlogin()}
          />


          {/* <SocialIcon


                        type='apple'
                    /> */}

        </View> 

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
