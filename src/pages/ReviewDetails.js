import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const REVIEW = gql`
  query GetReview($id: ID!) {
    review(id: $id) {
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

export default function ReviewDetails() {
  const { id } = useParams();
  const { data, error, loading } = useQuery(REVIEW, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const { ratings, title, body, categories } = data.review;

  return (
    <div className="review-card">
      <div className="rating">{ratings}</div>
      <h2>{title}</h2>

      {categories.map((c) => (
        <small key={c.id}>{c.name}</small>
      ))}

      <ReactMarkdown>{body}</ReactMarkdown>
    </div>
  );
}
