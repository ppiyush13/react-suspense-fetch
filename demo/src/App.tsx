import { ChangeEvent, Suspense, useState, useTransition } from 'react';
import { Result } from './components/Result';
import { Search } from './components/Search';

export const App = function App() {
  const [query, setQuery] = useState('');
  const [deferredQuery, setDeferredQuery] = useState(query);
  const [isPending, startTransition] = useTransition();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    startTransition(() => setDeferredQuery(e.target.value));
  };

  return (
    <main>
      <Search onChange={handleSearchChange} query={query} />
      <Suspense fallback={'Loading...'}>
        <Result query={deferredQuery} />
      </Suspense>
    </main>
  );
};
