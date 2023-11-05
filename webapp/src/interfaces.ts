export type TextFormValues = { text: string, countUnknown?: boolean };

export type WordsCounterResult = Record<string, number>;
export type ApiOkResponse<T> = {
    ok: boolean;
    data: T;
}; 

export interface IApiService {
    apiUrl: string;
    countWords(data: TextFormValues): Promise<WordsCounterResult>;
}
