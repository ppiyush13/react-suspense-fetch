import { ChangeEventHandler } from 'react';
import styled from 'styled-components';

interface SearchProps {
  onChange: ChangeEventHandler;
  query: string;
}

export const Search = ({ onChange, query }: SearchProps) => {
  return <TextBox type={'text'} onChange={onChange} value={query}></TextBox>;
};

const TextBox = styled.input`
  flex: 1;
  padding: 0.5rem 1rem;
`;
