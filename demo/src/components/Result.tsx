import styled from 'styled-components';
import { useFetch } from '../../../useFetch';

interface ResultProps {
  query: string;
}

interface Show {
  show: {
    id: number;
    name: string;
    image: {
      medium: string;
      original: string;
    };
  };
}

export const Result = ({ query }: ResultProps) => {
  const data: Show[] = useFetch(
    'https://api.tvmaze.com/search/shows?q=' + query,
  );
  const shows = data.filter((show) => show.show.image);

  return (
    <ShowsGrid>
      {shows.map(({ show }) => (
        <img
          key={show.id}
          src={show.image.original}
          loading={'lazy'}
          alt={'show poster'}
          width={'100%'}
          height={'100%'}
        />
      ))}
    </ShowsGrid>
  );
};

const ShowsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
