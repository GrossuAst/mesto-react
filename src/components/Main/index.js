import React from 'react';
import { api } from '../../utils/api';

function Main({onEditProfile, onAddPlace, onEditAvatar}) {
    
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCardsArray] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getInfoAboutUser(), api.getInitialCards()])
        .then(([userInfo, cards]) => {
        setUserName(userInfo.name)
        setUserDescription(userInfo.about)
        setUserAvatar(userInfo.avatar)
        setCardsArray(cards)
        // console.log(cards)
    } 
  )
  .catch((err) => {
    console.log(`ошибка ${err}`);
  })

    })
    

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__redact">
                    <button className="profile__avatar-overlay"
                        onClick={onEditAvatar}
                        style={{ backgroundImage: `url(${userAvatar})` }}
                    >
                        {/* <div src="#" alt="фото пользователя" className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }}></div> */}
                    </button>
                    <h1 className="profile__name">{userName}</h1>
                    <p className="profile__description">{userDescription}</p>
                    <button type="button" aria-label="кнопка открытия попапа редактирования профиля" 
                        className="profile__edit-button"
                        onClick={onEditProfile}
                    >
                    </button>
                </div>
                <button type="button" aria-label="кнопка открытия попапа добавления карточки" 
                    className="profile__add-button"
                    onClick={onAddPlace}
                    >
                </button>
            </section>
            <section className="elements">               
                <article className="card">
                    <button type="button" aria-label="кнопка удаления карточки" className="card__delete-button"></button>
                    <img src="#" alt="#" className="card__photo" />
                    <div className="card__description">
                        <h3 className="card__title">#</h3>
                        <div className="card__likes-section">
                            <button type="button" aria-label="кнопка переключения лайка" className="card__like"></button>
                            <span className="card__likes-counter">0</span>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
  }
  
  export default Main;