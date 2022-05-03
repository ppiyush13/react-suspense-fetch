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
  padding: 1.5rem 0;
  background-color: ${(props) => props.theme.color.primary};
`;

const TextBox = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: none;
  outline: none;

  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.secondary};

  font-size: 1.5rem;
  border-bottom: 4px solid ${(props) => props.theme.color.secondary};

  ::placeholder {
    color: ${(props) => props.theme.color.secondary25};
  }
`;
