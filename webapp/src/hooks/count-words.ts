import { useMutation } from 'react-query';

import { services } from '../services';
import { TextFormValues } from '../interfaces';

export function useCountWords() {
    return useMutation((values: TextFormValues) => services.api.countWords(values), {});
}