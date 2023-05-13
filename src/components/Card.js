import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({data, onCardClick, onDeleteButtonClick}) {

    function handleClick() {
        onCardClick(data)
      }

      const currentUser = React.useContext(CurrentUserContext);
      const isOwn = data.owner._id === currentUser._id;
      const isLiked = data.likes.some(i => i._id === currentUser._id);
      const cardLikeButtonClassName = ( 
        `card__like ${isLiked && 'card__like_active'}` 
      );

    return(
        <article className="card" key={data._id}>
            {/* <button type="button" aria-label="кнопка удаления карточки" className="card__delete-button"></button> */}
            {isOwn && <button type="button" 
                aria-label="кнопка удаления карточки" 
                className="card__delete-button" 
                onClick={onDeleteButtonClick}
            />}
            <img src={data.link} alt={data.name} className="card__photo" onClick={handleClick}/>
            <div className="card__description">
                <h3 className="card__title">{data.name}</h3>
                <div className="card__likes-section">
                    <button type="button" aria-label="кнопка переключения лайка" className={cardLikeButtonClassName}></button>
                    <span className="card__likes-counter">{data.likes.length}</span>
                </div>
            </div>
        </article>
    )
}

export default Card;