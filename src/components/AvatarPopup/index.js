import React from 'react';

function AvatarPopup() {
    return (
        <div className="popup popup_type_avatar">
            <div className="popup__container">
                <form action="#" noValidate name="avatar-form" className="popup__form popup__form_type_avatar">
                    <button type="button" aria-label="закрыть форму редактирования аватара" className="popup__close-icon popup__close-icon_type_avatar" ></button>
                    <h2 className="popup__title">Обновить аватар</h2>
                        <div className="popup__inputs">
    {/* <!-- инпут ссылки на фото аватара --> */}
                            <input type="url"           

                            required            
                                           
                            placeholder="Ссылка на аватар" name="avatar"

                            id="input-avatar"

                            className="popup__input popup__input_type_avatar" />

                            {/* <!-- спан с ошибкой в инпуте аватара--> */}
                            <span className="popup__error input-avatar-error"></span>

                        </div>
                    <button type="submit" className="popup__submit-button popup__submit-button_type_avatar">Сохранить</button>
                </form>
            </div>
        </div>
    );
  }
  
  export default AvatarPopup;