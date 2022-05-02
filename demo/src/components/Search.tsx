import { ChangeEventHandler } from 'react';
import styled from 'styled-components';

interface SearchProps {
  onChange: ChangeEventHandler;
  query: string;
}

export const Search = ({ onChange, query }: SearchProps) => {
  return (
    <StickyContainer>
      <TextBox type={'text'} onChange={onChange} value={query} />
    </StickyContainer>
  );
};

const StickyContainer = styled.div`
  position: sticky;
  width: 100%;
  top: 0;
  padding: 1rem 0;
  background-color: white;
`;

const TextBox = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
`;
