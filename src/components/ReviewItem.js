import { Link } from 'react-router-dom';

export default function ReviewItem({ review }) {
  return (
    <div key={review.id} className="review-card">
      <div className="rating">{review.ratings}</div>
      <h2>{review.title}</h2>

      {review.categories.map((c) => (
        <small key={c.id}>{c.name}</small>
      ))}

      <p>{review.body.substring(0, 200)} ...</p>
      <Link to={`/details/${review.id}`}>Read More</Link>
    </div>
  );
}
