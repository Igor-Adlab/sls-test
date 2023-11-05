import { middyfy } from '@libs/lambda';
import { formatJSONResponse } from '@libs/api-gateway';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';

import schema from './schema';

import { data } from './data';
import { logger } from './logger';
import { countWords, prepareVocabulary } from './utils';

const counter: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const profiler = logger.startTimer();
  const vocabulary = prepareVocabulary(data);

  const input = event.body?.text;
  if (!input) {
    return formatJSONResponse({ ok: false, error: `Bad Request` }, 400);
  }

  const result = countWords(input, vocabulary, event.body?.countUnknown || false);

  profiler.done({ message: `Input text: ${input.length} cacharacters` });

  return formatJSONResponse({ ok: true, data: result });
};

export const main = middyfy(counter);
