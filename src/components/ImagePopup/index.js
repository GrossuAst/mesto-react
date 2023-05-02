import React from "react";

function ImagePopup() {
    return(
        <div className="popup popup_type_fullscreen">
            <article className="popup__fullsceen-container">
                <img src="#" alt="" className="popup__fullscreen-image" />
                <h3 className="popup__fullscreen-title"></h3>
                <button type="button" aria-label="закрыть фуллскрин фото" className="popup__close-icon popup__close-icon_type_fullscreen"></button>
            </article>
        </div>
    )
}

export default ImagePopup;