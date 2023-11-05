import { Result } from "../components/Result";
import { TextForm } from "../components/TextForm";

import { useCountWords } from '../hooks';
import { TextFormValues } from '../interfaces';

export function WordCounter() {
    const count$ = useCountWords();
    const onFormSubmit = (values: TextFormValues) => count$.mutateAsync(values);

    return (
        <>
            <TextForm isLoading={count$.isLoading} onSubmit={onFormSubmit} size="large" className="mb-5" />
            <Result isLoading={count$.isLoading} result={count$.data} />
        </>
    );
}
