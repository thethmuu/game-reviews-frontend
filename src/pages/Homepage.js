import ReviewItem from '../components/ReviewItem';
import { useQuery, gql } from '@apollo/client';

const REVIEWS = gql`
  query GetReviews {
    reviews {
      title
      body
      ratings
      id
      categories {
        name
        id
      }
    }
  }
`;

export default function Homepage() {
  const { loading, data, error } = useQuery(REVIEWS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.reviews.map((review) => (
        <ReviewItem review={review} key={review.id} />
      ))}
    </div>
  );
}
