import { ChangeEventHandler } from 'react';

interface SearchProps {
  onChange: ChangeEventHandler;
  query: string;
}

export const Search = ({ onChange, query }: SearchProps) => {
  return (
    <div>
      <input type={'text'} onChange={onChange} value={query}></input>
    </div>
  );
};
