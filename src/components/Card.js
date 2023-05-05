import React from "react";

function Card({data, onCardClick}) {

    function handleClick() {
        onCardClick(data)
      } 

    return(
        <article className="card" key={data._id}>
            <button type="button" aria-label="кнопка удаления карточки" className="card__delete-button"></button>
            <img src={data.link} alt={data.name} className="card__photo" onClick={handleClick}/>
            <div className="card__description">
                <h3 className="card__title">{data.name}</h3>
                <div className="card__likes-section">
                    <button type="button" aria-label="кнопка переключения лайка" className="card__like"></button>
                    <span className="card__likes-counter">{data.likes.length}</span>
                </div>
            </div>
        </article>
    )
}

export default Card;