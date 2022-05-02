import { ChangeEvent, Suspense, useState, useTransition } from 'react';
import { FlexBox } from 'react-styled-flex';
import styled from 'styled-components';
import { Result } from './components/Result';
import { Search } from './components/Search';

export const App = function App() {
  const [query, setQuery] = useState('game');
  const [deferredQuery, setDeferredQuery] = useState(query);
  const [isPending, startTransition] = useTransition();

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
  max-width: 768px;
  margin: auto;
  padding: 1rem;
`;
