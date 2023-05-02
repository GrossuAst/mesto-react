import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupVisible] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupVisible] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupVisible] = React.useState(false);

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

  return (
    <div className='wrapper'>
      <div className="content">

        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />

        <Footer />

        <PopupWithForm
          name='avatar' 
          isOpen={isEditAvatarPopupOpen}
          title='Обновить аватар'
          buttonText='Сохранить'
          placeholder='Ссылка на аватар'
        />

        <PopupWithForm 
          name='profile'
          isOpen={isEditProfilePopupOpen}
          title='Редактировать профиль'
          buttonText='Сохранить'
        />

        <PopupWithForm 
          name='add-card'
          isOpen={isAddPlacePopupOpen}
          title='Новое место'
          buttonText='Сохранить'
        />
      </div>
    </div>
  );
}

export default App;
