import { Spin } from 'antd';

import { WordsCounterResult } from "../interfaces";

export interface IResultProps {
  isLoading?: boolean;
  result?: WordsCounterResult;
}

export function Result({ result, isLoading = false }: IResultProps) {
  if (!result) {
    return null;
  }

  return (
    <Spin spinning={isLoading}>
      <pre className="text-xs p-2 bg-gray-100">
        {JSON.stringify(result, null, 2)}
      </pre>
    </Spin>
  );
}
