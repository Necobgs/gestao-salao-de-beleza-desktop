import { environment } from "../../environment";
import api from "../api";
import type iLoginPayload from "./interfaces/login-payload.interface";


export default class AuthService {
  _endpoint = environment.base_url + "/auth";

  async login(dto: iLoginPayload) {
    return await api.post(`${this._endpoint}/login`, dto);
  }
}
