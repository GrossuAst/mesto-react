import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
// import Card from "./Card";

import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

// const css = {marginTop: '50px'}

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupVisible] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupVisible] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupVisible] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditProfileClick() {
    // document.querySelector('.popup_type_profile').classList.add('popup_opened');
    setEditProfilePopupVisible(true);
  }
  // 
  function handleAddPlaceClick() {
    // document.querySelector('.popup_type_add-card').classList.add('popup_opened');
    setAddPlacePopupVisible(true);
  }
  
  function handleEditAvatarClick() {
    // document.querySelector('.popup_type_avatar').classList.add('popup_opened');
    setAvatarPopupVisible(true);
  }

  function closeAllPopups() {
    setEditProfilePopupVisible(false);
    setAddPlacePopupVisible(false);
    setAvatarPopupVisible(false);
    setSelectedCard();
  }

  return (
    <div className='wrapper'>
      <div className="content">

        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />

        <Footer />

        {/* попап аватарки */}
        <PopupWithForm
          name='avatar' 
          isOpen={isEditAvatarPopupOpen}
          title='Обновить аватар'
          buttonText='Сохранить'
          onClose={closeAllPopups}
        > 
          <input
            className="popup__input"
            placeholder='Ссылка на аватар'
            // style={css}
          />
          <span 
            className="popup__error"
          />
        </PopupWithForm>

        {/* попап формы профиля */}
        <PopupWithForm 
          name='profile'
          isOpen={isEditProfilePopupOpen}
          title='Редактировать профиль'
          buttonText='Сохранить'
          onClose={closeAllPopups}
        > 
          <input 
            name="name"
            placeholder="имя"
            className="popup__input"
          />
          <span 
            className="popup__error"
          />
          <input 
            name="about"
            placeholder="О себе"
            className="popup__input"
          />
          <span 
            className="popup__error"
          />
        </PopupWithForm>

        {/* попап формы добавления карточки */}
        <PopupWithForm 
          name='add-card'
          isOpen={isAddPlacePopupOpen}
          title='Новое место'
          buttonText='Сохранить'
          onClose={closeAllPopups}
        >
          <input 
            name="title"
            placeholder="Название"
            className="popup__input"
          />
          <span 
            className="popup__error"
          />
          <input 
            name="link"
            placeholder="Ссылка на картинку"
            className="popup__input"
          />
          <span 
            className="popup__error"
          />
        </PopupWithForm>
        <ImagePopup 
          card={selectedCard}
          onClose={closeAllPopups}
          // isOpen={}
        />
      </div>
    </div>
  );
}

export default App;
