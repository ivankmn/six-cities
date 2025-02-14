type StarProps = {
  title: string;
  index: number;
  length: number;
};

function Star({ title, index, length }: StarProps): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={length - index}
        id={`${length - index}-stars`}
        type="radio"
      />
      <label htmlFor={`${length - index}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default Star;
