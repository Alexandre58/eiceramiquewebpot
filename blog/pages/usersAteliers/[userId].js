import AsideNav from "@/components/AsideNav";
import LinkRetour from "@/components/Linkretour";
import RetourneAdresse from "@/components/RetourneAdresse";
import React from "react";
import styles from "../../styles/_[user].module.scss";
import { v4 as uuidv4 } from "uuid";
const User = ({ articles }) => {
  return (
    <section className={styles.users_section_container}>
      {articles.map((article) => {
        return (
          <>
            <div key={uuidv4()} className={styles.users_div_container}>
              <h1 className={styles.users_section_h1}>{article.username}</h1>
            </div>
            <article className={styles.users_section_article}>
              <h2>
                {article.name} {article.firstname}
              </h2>
              <div className={styles.users_section_article_div_adresse}>
                <p>
                  <span>
                    <u>Email: {article.email}</u>
                  </span>
                </p>
                <p>
                  <span>
                    <u>Commentaire: </u>
                    <br />
                    {article.comment}
                  </span>
                </p>
              </div>
            </article>
          </>
        );
      })}
      <AsideNav />
      <LinkRetour retour={"Retour à l'accueil"} />
      <RetourneAdresse retour={"Retour vers les adresses"} />
    </section>
  );
};

export default User;

export async function getStaticProps(context) {
  const { params } = context;
  //attention backtick dans le fetch
  const res = await fetch(`http://localhost:3000/api/users/${params.userId}`);
  const data = await res.json();
  return {
    props: {
      articles: data,
    },
    revalidate: 10,
  };
}
export async function getStaticPaths() {
  return {
    paths: [{ params: { userId: "74" } }],
    fallback: false,
  };
}
