import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill  } from 'react-icons/bs';
import './ReviewForm.css';

interface ReviewFormProps {
    data: {
        name: string,
        email: string,
        phone: string,
        review: string,
        comment: string,
    };
    updateFieldHandler: Function;
}

const ReviewForm = ({ data, updateFieldHandler }: ReviewFormProps) => {
    return (
        <div className="review-form">
            <div className="form-control score-container">
                <label htmlFor="review" className="radio-container">
                    <input
                        type="radio"
                        value="unsatisfied"
                        name="review"
                        required
                        checked={data.review === "unsatisfied"}
                        onChange={(event) => updateFieldHandler("review", event.target.value)}
                    />
                    <BsFillEmojiFrownFill />
                    <p>Insatisfeito</p>
                </label>
                <label htmlFor="neutral" className="radio-container">
                    <input
                        type="radio"
                        value="neutral"
                        name="review"
                        required
                        checked={data.review === "neutral"}
                        onChange={(event) => updateFieldHandler("review", event.target.value)}
                    />
                    <BsFillEmojiNeutralFill />
                    <p>Poderia ser melhor</p>
                </label>
                <label htmlFor="satisfied" className="radio-container">
                    <input
                        type="radio"
                        value="satisfied"
                        name="review"
                        required
                        checked={data.review === "satisfied"}
                        onChange={(event) => updateFieldHandler("review", event.target.value)}
                    />
                    <BsFillEmojiSmileFill />
                    <p>Satisfeito</p>
                </label>
                <label htmlFor="very_satisfied" className="radio-container">
                    <input
                        type="radio"
                        value="very_satisfied"
                        name="review"
                        required
                        checked={data.review === "very_satisfied"}
                        onChange={(event) => updateFieldHandler("review", event.target.value)}
                    />
                    <BsFillEmojiHeartEyesFill />
                    <p>Muito Satisfeito</p>
                </label>
            </div>
            <div className="form-control">
                <label htmlFor="comment">Comentario: </label>
                <textarea
                    name="comment"
                    id="comment"
                    placeholder="Conte como foi a sua experiencia com o produto..."
                    required
                    value={data.comment || ""}
                    onChange={(event) => updateFieldHandler("comment", event.target.value)}
                >
                </textarea>
            </div>
        </div>
    );
};

export { ReviewForm };