import { useState } from 'react';
import Rating from '../rating/rating';

function ReviewForm(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: '',
    review: '',
  });

  type FormFields = {
    name: string;
    value: string;
  };

  type FormChangeEvent = React.ChangeEvent<HTMLFormElement & FormFields>;

  const fieldChangeHandle = (evt: FormChangeEvent) => {
    if (evt.target.tagName === 'INPUT' || evt.target.tagName === 'TEXTAREA') {
      const { name, value } = evt.target;
      setFormData({ ...formData, [name]: value });

      // eslint-disable-next-line no-console
      console.log(formData);
    }
  };

  return (
    <form onChange={fieldChangeHandle} className="reviews__form form" action="/" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <Rating></Rating>
      <textarea
        value={formData.review}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
