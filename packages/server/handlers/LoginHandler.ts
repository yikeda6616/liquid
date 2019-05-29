import { Post } from '.';
import { LoginService } from '../services/LoginService';

interface LoginRequest {
  code: string;
}

class LoginHandler {
  @Post('/login')
  static async login({ code }: LoginRequest) {
    await LoginService.login(code);
  }
}
