import { ChangeEventHandler } from 'react';
import styled from 'styled-components';

interface SearchProps {
  onChange: ChangeEventHandler;
  query: string;
}

export const Search = ({ onChange, query }: SearchProps) => {
  return (
    <StickyContainer>
      <TextBox
        placeholder='Search shows'
        type={'text'}
        onChange={onChange}
        value={query}
      />
    </StickyContainer>
  );
};

const StickyContainer = styled.div`
  position: sticky;
  width: 100%;
  top: 0;
  padding: 2rem 0;
  background-color: ${(props) => props.theme.background};
`;

const TextBox = styled.input`
  width: 100%;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.background};
  border: none;
  outline: none;
  color: ${(props) => props.theme.text};
  font-size: 1.5rem;
  border-bottom: 4px solid ${(props) => props.theme.text};
`;
