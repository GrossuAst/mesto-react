import React from 'react';

function PlacePopup() {
    return (
        <div className="popup popup_type_add-card">
            <div className="popup__container">
                <form action="#" noValidate name="add-card-form" className="popup__form popup__form_type_add-card">
                    <button type="button" aria-label="закрыть форму добавления карточки" className="popup__close-icon popup__close-icon_type_add-card" ></button>
                    <h2 className="popup__title">Новое место</h2>
                        <div className="popup__inputs">
{/* <!-- инпут названия места --> */}
                            <input type="text"
                            required
                            minLength="2" maxLength="30"
                            placeholder="Название" name="name"
                            id="place-name-input"
                            className="popup__input popup__input_type_card-name" />

                            {/* <!-- спан с ошибкой в названии места --> */}
                            <span className="popup__error place-name-input-error"></span>
{/* <!-- инпут ссылки на фото --> */}
                            <input type="url"
                            required
                            placeholder="Ссылка на картинку" name="link"
                            id="place-link-input"
                            className="popup__input popup__input_type_card-link" />
                            
                            {/* <!-- спан с ошибкой ссылки места --> */}
                            <span className="popup__error place-link-input-error"></span>

                        </div>
                    <button type="submit" className="popup__submit-button popup__submit-button_type_add-card">Сохранить</button>
                </form>
            </div>
        </div>
    );
  }
  
  export default PlacePopup;