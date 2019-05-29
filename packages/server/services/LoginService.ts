import { google } from 'googleapis';
import { config } from '../config';
import { LoginTicket } from 'google-auth-library/build/src/auth/loginticket';

const clientId = config.google.clientId;
const clientSecret = config.google.clientSecret;
const redirectUri = 'http://localhost:3030';

export class LoginService {
  static async login(code: string) {
    const oauth2 = new google.auth.OAuth2({
      clientId,
      clientSecret,
      redirectUri,
    });
    let loginTicket: LoginTicket = null;
    try {
      const { tokens } = await oauth2.getToken(code);
      loginTicket = await oauth2.verifyIdToken({
        idToken: tokens.id_token,
        audience: clientId,
      });
      const payload = loginTicket.getPayload();
      console.log(payload);
    } catch (error) {
      console.log(error);
    }
  }
}
