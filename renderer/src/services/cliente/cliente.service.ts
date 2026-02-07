import { environment } from "../../environment";
import api from "../api";
import type iCreateCliente from "./interfaces/cliente.interface";

export default class ClienteService {
    _endpoint = environment.base_url + "/client";

    async create(dto: iCreateCliente) {
        return api.post(this._endpoint, dto);
    }
}