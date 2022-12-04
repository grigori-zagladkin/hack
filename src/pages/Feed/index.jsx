import { Fragment } from "react";
import styles from "./Feed.module.scss";
import avatar from "./../../imgs/avatar.svg";
import addition from "./../../imgs/main icons/addition.svg";
import mainSvg from "./../../imgs/main.svg";
import like from "./../../imgs/main icons/like.svg";
import comment from "./../../imgs/main icons/comment.svg";
import share from "./../../imgs/main icons/share.svg";
import eye from "./../../imgs/main icons/eye.svg";
import makePost from "./../../imgs/main icons/make-post.svg";

const Feed = () => {
    const posts = ["Лёха", "Артём", "Ваня", "Вася", "Дима"].map((item, index) => {
        return (
            <Fragment>
                <section className={styles.post}>
                    <div className={styles.post__header}>
                        <div className={styles.post__header_profile}>
                            <a href="#">
                                <div className={styles.post__header_profile_avatar}>
                                    <img src={avatar} alt="" />
                                </div>
                            </a>
                            <div className={styles.post__header_profile_text}>
                                Пользователь <span>{item}</span>
                            </div>
                        </div>
                        <div className={styles.post__header_addition}>
                            <a href="#">
                                <img src={addition} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className={styles.post__body}>
                        <img src={mainSvg} alt="" />
                    </div>
                    <div className={styles.post__footer}>
                        <div className={styles.post__footer_icons}>
                            <img src={like} alt="" /> <span>38</span>
                            <img src={comment} alt="" /> <span>10</span>
                            <img src={share} alt="" /> <span>3</span>
                        </div>
                        <div className={styles.post__footer_eye}>
                            <img src={eye} alt="" /> <span>1,3K</span>
                        </div>
                    </div>
                </section>
                <div className={styles.pad}></div>
            </Fragment>
        );
    });
    return (
        <Fragment>
            <header>
                <h1 className={styles.greetings}>Добрый день, Hoper</h1>
                <img src={avatar} alt="avatar" className={styles.profile__img} />
            </header>
            <section className={styles.makePost}>
                <button className={styles.makePost__btn}>
                    <img className={styles.makePost__img} src={makePost} alt="" />
                    <span>Создать запись</span>
                </button>
            </section>
            {posts}
        </Fragment>
    );
};

export default Feed;
