import React from "react";

// компоненты
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PupupWithForm";
import ImagePopup from "./ImagePopup";

// апи
import { api } from "../utils/api";

// импорт контекста
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupVisible] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupVisible] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupVisible] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();

  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getInfoAboutUser()
    .then((res) => {
      setCurrentUser(res);
      // console.log(res);
      // console.log(currentUser);
    })
  }, [])

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditProfileClick() {
    setEditProfilePopupVisible(true);
  }
  // 
  function handleAddPlaceClick() {
    setAddPlacePopupVisible(true);
  }
  
  function handleEditAvatarClick() {
    setAvatarPopupVisible(true);
  }

  function closeAllPopups() {
    setEditProfilePopupVisible(false);
    setAddPlacePopupVisible(false);
    setAvatarPopupVisible(false);
    setSelectedCard();
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
              placeholder="Имя"
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
          />

        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
