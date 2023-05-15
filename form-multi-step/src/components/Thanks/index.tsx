import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill
} from 'react-icons/bs';
import './Thanks.css';

interface ThanksProps {
    data: {
        name: string,
        email: string,
        phone: string,
        review: string,
        comment: string,
    }
}

interface EmojiDataProps {
    unsatisfied: JSX.Element;
    neutral: JSX.Element;
    satisfied: JSX.Element;
    very_satisfied: JSX.Element;
}

const emojiData: EmojiDataProps = {
    unsatisfied: <BsFillEmojiFrownFill />,
    neutral: <BsFillEmojiNeutralFill />,
    satisfied: <BsFillEmojiSmileFill />,
    very_satisfied: <BsFillEmojiHeartEyesFill />,
}

const Thanks = ({ data }: ThanksProps) => {
    const option = data.review;

    return (
        <div className="thanks-container">
            <h2>Falta pouco...</h2>
            <p>A sua opiniao e muito importante, em breve voce recebera um cupom de 10% de desconto para a sua proxima compra.</p>
            <p>Para concluir sua avaliacao clique no botao de Enviar abaixo</p>
            <h3>Aqui esta o resumo da sua avaliacao: {data.name}</h3>
            <p className="review-data">
                <span>Satisfacao com o produto: </span>
                {emojiData[option as keyof EmojiDataProps]}
            </p>
            <p className="review-data">
                <span>Comentario: </span>
                {data.comment}
            </p>
        </div>
    );
};

export { Thanks };