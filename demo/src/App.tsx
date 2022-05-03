import { ChangeEvent, Suspense, useState, useTransition } from 'react';
import { FlexBox } from 'react-styled-flex';
import styled from 'styled-components';
import { Result } from './components/Result';
import { Search } from './components/Search';

export const App = function App() {
  const [query, setQuery] = useState('game');
  const [deferredQuery, setDeferredQuery] = useState(query);
  const [, startTransition] = useTransition();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    startTransition(() => setDeferredQuery(e.target.value));
  };

  return (
    <Main column gap={'1rem'}>
      <Search onChange={handleSearchChange} query={query} />
      <Suspense fallback={'Loading...'}>
        <Result query={deferredQuery} />
      </Suspense>
    </Main>
  );
};

const Main = styled(FlexBox).attrs({ as: 'main' })`
  max-width: 1024px;
  margin: auto;
  padding: 0 2rem 2rem 2rem;
`;
