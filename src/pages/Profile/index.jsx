
const Profile = () => {
    return (
       <>
         <section class="profile__header">
            <div class="profile__header-username">Hoper</div>
            <div class="profile__header-addition">
                <img src="imgs/profile header icons/qr.svg" alt=""><img src="imgs/profile header icons/addition.svg" alt="">
            </div>
        </section>
        <hr>
    <section class="profile__body">
        <div iv class="profile__body-changeProfile">
            <div class="profile__body-changeProfile-wrap">
                <a href="#">
                    <div class="profile__body-changeProfile"><img src="imgs/avatar.svg" alt=""></div>
                </a>
                <div class="profile__body-changeProfile-text">Алексий Стулов <span>Установить статус</span></div>
            </div>
            <button class="profile__body-changeProfile-btn">Редактировать</button>
        </div>
    </section>
    <hr>
    <section class="profile__body-information">
        <ul class="profile__body-information-list">
            <li class="profile__body-information-item"> <img src="imgs/profile icons/home.svg" alt="" class="profile__body-icons"> <span>Город: Ярославль</span> </li>
            <li class="profile__body-information-item"><img src="imgs/profile icons/subscribers.svg" alt="" class="profile__body-icons"> <span>69 подписчиков</span></li>
            <li class="profile__body-information-item"><img src="imgs/profile icons/information.svg" alt="" class="profile__body-icons"> <span>Подробная информация</span</li>
        </ul>
    </section>
    <hr>
    <section class="profile__body-works">
        <span>Ваши работы 12</span>
        <div class="profile__body-works-imgs">
            <img src="imgs/profile works/img1.svg" alt="" class="profile__body-works-img">
            <img src="imgs/profile works/img2.svg" alt="" class="profile__body-works-img">
            <img src="imgs/profile works/img3.svg" alt="" class="profile__body-works-img">
            <img src="imgs/profile works/img4.svg" alt="" class="profile__body-works-img">
        </div>
    </section>
    <hr>
    <section class="profile__post">
        <div class="profile__post-profile">
            <a href="#">
                <div class="profile__post-avatar"><img src="imgs/avatar.svg" alt=""></div>
            </a>
            <div class="profile__post-text">Алексий Стулов <span>Добавил фотографию 
            5 июля 2007 в 19:37</span></div>
        </div>
        <div class="profile__post-img">
            <img src="imgs/main2.svg" alt="">
        </div>
    </section>
       </>
    );
};

export default Profile;