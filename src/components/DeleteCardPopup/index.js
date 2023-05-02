import React from 'react';

function DeleteCardPopup() {
    return (
        <div className="popup popup_type_delete-card">
            <div className="popup__container popup__container_type_delete-card">
                <form action="" className="popup__form popup__form_type_delete-card">
                    <button type="button" aria-label="закрыть попап удаления карточки" className="popup__close-icon popup__close-icon_type_avatar" ></button>
                    <h2 className="popup__title">Вы уверены?</h2>   
                    <button type="submit" className="popup__submit-button popup__submit-button_type_delete-card">Да</button>  
                </form>            
            </div>
        </div>
    );
  }
  
  export default DeleteCardPopup;