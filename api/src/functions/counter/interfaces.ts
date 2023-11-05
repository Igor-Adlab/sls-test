export enum WordType {
    Noun = 'noun',
    Verb = 'verb',
    Adverb = 'adverb',
    Unknown = 'unknown',
    Numeral = 'numeral',
    Pronoun = 'pronoun',
    Adjective = 'adjective',
    Determiner = 'determiner',
    Preposition = 'preposition',
    Conjunction = 'conjunction',
    Interjection = 'interjection',
}

export type Vocabulary = Map<string, WordType>;
export type Result = Partial<Record<WordType, number>>;