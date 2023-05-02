import React from 'react';

function ProfilePopup() {
    return (
        <div className="popup popup_type_profile">
            <div className="popup__container">
                <form action="#" noValidate name="profile-form" className="popup__form popup__form_type_profile">
                    <button type="button" aria-label="закрыть форму редактирования профиля" className="popup__close-icon popup__close-icon_type_profile" ></button>
                    <h2 className="popup__title">Редактировать профиль</h2>
                        <div className="popup__inputs">
{/* <!-- инпут имени профиля --> */}
                            <input type="text"
                            required
                            minLength="2" maxLength="40"
                            placeholder="Имя" name="name"
                            id="input-name"
                            className="popup__input popup__input_type_name" />

                            {/* <!-- спан с ошибкой имени профиля--> */}
                            <span className="popup__error input-name-error"></span>
{/* <!-- инпут хобби --> */}
                            <input type="text" 
                            required
                            minLength="2" maxLength="200"
                            placeholder="О себе" name="about"
                            id="hobby-input"
                            className="popup__input popup__input_type_profession" />

                            {/* <!-- спан с ошибкой в дискрипшен--> */}
                            <span className="popup__error hobby-input-error"></span>

                        </div>
                    <button type="submit" className="popup__submit-button">Сохранить</button>
                </form>
            </div>
        </div>
    );
  }
  
  export default ProfilePopup;