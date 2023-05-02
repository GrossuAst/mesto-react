import React from 'react';

function Main({onEditProfile, onAddPlace, onEditAvatar}) {
    

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__redact">
                    <button className="profile__avatar-overlay"
                        onClick={onEditAvatar}
                    >
                        <img src="#" alt="фото пользователя" className="profile__avatar" />
                    </button>
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <p className="profile__description">Исследователь океана</p>
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
                <template id="card-template">
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
                </template>
            </section>
        </main>
    );
  }
  
  export default Main;