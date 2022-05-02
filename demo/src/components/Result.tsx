import { FlexBox } from 'react-styled-flex';
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
    <FlexBox column gap={'1rem'}>
      {shows.map(({ show }) => {
        return (
          <div key={show.id}>
            <img src={show.image.medium} width={'100%'}></img>
          </div>
        );
      })}
    </FlexBox>
  );
};
