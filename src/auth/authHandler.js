// import {authorize, refresh} from 'react-native-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  auth as SpotifyAuth,
  remote as SpotifyRemote,
  ApiScope,
  ApiConfig,
} from 'react-native-spotify-remote';
class AuthenticationHandler {
  constructor() {
    this.spotifyAuthConfig = {
      clientID: '788ef6d14a9f42ee8ddaf0bef8026569',
      //   clientSecret: '2019bc722a574b7b8b1c2174a940e031',
      redirectURL: 'com.spotify://oauthredirect',
      scopes: [
        'user-read-email',
        'playlist-modify-public',
        'user-read-private',
      ], // the scopes you need to access
      //   serviceConfiguration: {
      //     authorizationEndpoint: 'https://accounts.spotify.com/authorize',
      //     tokenEndpoint: 'https://accounts.spotify.com/api/token',
      //   },
    };
  }

  async onLogin() {
    try {
      console.log('inside login from auth ****** ');
      const result = await SpotifyAuth.authorize(this.spotifyAuthConfig);
      await AsyncStorage.setItem('authData', result.accessToken);
      //   await AsyncStorage.multiset([JSON.stringify(result)])
      console.log('result ****** ', result);
      //   return result;
    } catch (error) {
      console.log('error from auth ******', JSON.stringify(error));
    }
  }

  //   async refreshLogin(refreshToken) {
  //     const result = await refresh(this.spotifyAuthConfig, {
  //       refreshToken: refreshToken,
  //     });
  //     return result;
  //   }
}

const authHandler = new AuthenticationHandler();

export default authHandler;
