import React from 'react';
import { api } from '../utils/api';
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
    
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
        console.log(userInfo)
        console.log(cards)
    },
  )
  .catch((err) => {
    console.log(`ошибка ${err}`);
  })
    }, [])
    

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__redact">
                    <button className="profile__avatar-overlay"
                        onClick={onEditAvatar}
                        style={{ 
                            backgroundImage: `url(${userAvatar})`,
                            backgroundSize: 'cover'
                     }}
                    >
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
                {cards.map((card, i) => (
                    <Card data={card} key={card._id} onCardClick={onCardClick}/>
                ))}
            </section>
        </main>
    );
  }
  
  export default Main;