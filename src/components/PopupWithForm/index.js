import React from "react";

function PopupWithForm(props) {
    return(
        <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : "" }` }>
            <div className="popup__container">
                <form action="" className="popup__form" name={props.name}>
                    <button type="button" aria-label="#" className="popup__close-icon" ></button>
                    <h2 className="popup__title">{props.title}</h2>
                    <button type="submit" className="popup__submit-button">{props.buttonText}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;