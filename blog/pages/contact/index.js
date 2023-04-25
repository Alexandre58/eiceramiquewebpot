import AsideNav from "@/components/AsideNav";
import LinkRetour from "@/components/Linkretour";
import React from "react";
import styles from "../../styles/_atelier.module.scss";
import { v4 as uuidv4 } from "uuid";
import Userauth from "@/components/Userauth";
import Head from "next/head";
const Contact = ({ users }) => {
  console.log(users[0].username);
  return (
    <section className={styles.atelier_section_container}>
      <Head>
        <title>Nous contacter</title>
        <meta
          name="description"
          content="Pour toute demande, une page contact à était crée pour vous aider dans vos demarches, vos questions."
        />
      </Head>
      <div className={styles.atelier_div_container}>
        <h1 className={styles.atelier_section_h1}>CONTACT</h1>
        <LinkRetour retour="Retour" />
      </div>

      <article className={styles.atelier_section_article}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          incidunt ratione autem quaerat! Omnis at possimus accusamus ab ea
          fugiat excepturi labore! Ex minus optio non consequuntur, tenetur
          cupiditate provident! Facere nobis odit asperiores officia qui ducimus
          illum consequatur ut suscipit repudiandae? Vero beatae aut, eaque
          nobis cumque ullam optio, facere corporis natus at, repellendus quam
          repudiandae nisi labore dolor! Corporis quae non blanditiis impedit
          dolor dignissimos maiores saepe commodi nam libero ratione eos,
          aspernatur deserunt quo in
        </p>
      </article>
      <h2>Liste of users de jsonplaceHolder</h2>
      {users.map((user) => {
        return (
          <div key={uuidv4()}>
            <Userauth user={user} />
          </div>
        );
      })}
      <AsideNav />
      <LinkRetour retour="Retour" />
    </section>
  );
};

export default Contact;
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data2 = await response.json();
  console.log(data2);
  return {
    props: {
      users: data2,
    },
  };
}
