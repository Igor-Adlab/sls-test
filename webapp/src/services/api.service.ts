import axios, { Axios, AxiosResponse } from 'axios';

import { IApiService, WordsCounterResult, TextFormValues, ApiOkResponse } from '../interfaces';

export class ApiService implements IApiService {
    axios: Axios;
    constructor(readonly apiUrl: string) {
        this.axios = axios.create({
            baseURL: apiUrl,
        });
    }

    async countWords(data: TextFormValues): Promise<WordsCounterResult> {
        return this.axios.post<ApiOkResponse<WordsCounterResult>>('/counter', data)
            .then(this.transform);
    }

    private transform<T>(response: AxiosResponse<ApiOkResponse<T>>): T {
        return response.data?.data;
    }
}
