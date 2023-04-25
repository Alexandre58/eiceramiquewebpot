import AsideNav from "@/components/AsideNav";
import LinkRetour from "@/components/Linkretour";
import RetourneAdresse from "@/components/RetourneAdresse";
import React from "react";
import styles from "../../styles/_[user].module.scss";
//RECUP DE TOUT LES ARTICLES  POUR CREER DES PAGES POUR CHAQUE ARTICLE AVEC [ARTICLE];JS
//ne pas oublier de mettre les props dans***const Article = (props) => {...
export async function getStaticProps(context) {
  const id = context.params.userId;
  //attention backtick dans le fetch
  const data = await fetch(`http://localhost:3000/api/users/${id}`);
  const article = await data.json();
  return {
    props: {
      article,
    },
  };
}
export async function getStaticPaths() {
  const data = await fetch("http://localhost:3000/api/users");
  const articles = await data.json();

  const paths = articles.map((item) => ({
    params: {
      userId: item.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

const User = (props) => {
  console.log(props.article[0].username);

  return (
    <section className={styles.users_section_container}>
      <div className={styles.users_div_container}>
        <h1 className={styles.users_section_h1}>{props.article[0].username}</h1>
      </div>
      <article className={styles.users_section_article}>
        <h2>
          {props.article[0].name} {props.article[0].firstname}
        </h2>
        <div className={styles.users_section_article_div_adresse}>
          <p>
            <span>
              <u>Email:</u> {props.article[0].email}
            </span>
          </p>
          <p>
            <span>
              <u>Commentaire: </u>
              <br />
              {props.article[0].comment}
            </span>
          </p>
        </div>
      </article>
      <AsideNav />
      <LinkRetour retour={"Retour à l'accueil"} />
      <RetourneAdresse retour={"Retour vers les adresses"} />
    </section>
  );
};

export default User;
