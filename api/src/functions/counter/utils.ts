import { logger } from "./logger";
import { Result, Vocabulary, WordType } from "./interfaces";

let vocabulary = new Map<string, WordType>();

export function prepareVocabulary(data: Partial<Record<WordType, string[]>>) {
    if (vocabulary.size) {
        logger.debug(`[Vocabulary]: Using existing instance`);
        return vocabulary;
    }

    logger.debug(`[Vocabulary]: Creating new instance`);
    for(let type in data) {
        for(let word of data[type]) {
            vocabulary.set(word, type as WordType);
        }
    }
    
    return vocabulary;
}

export function countWords(text: string, vocabulary: Vocabulary, countUnknown: boolean = false): Result {
    const result = {};
    const words = text.split(/\s/gmi);
    for(let word of words) {
        const normalizedWord = getNormalizedWord(word);
        let type = vocabulary.get(normalizedWord);
        if (type || (!type && countUnknown)) {
            type = type || WordType.Unknown;
            result[type] = (result[type] || 0) + 1;
        }

    }

    return result;
}

function getNormalizedWord(word: string) {
    return word.toLowerCase().replace(/[^a-zA-Z\s]/gmi, '');
}