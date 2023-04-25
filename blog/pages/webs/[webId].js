import Link from "next/link";
import styles from "../../styles/_atelier.module.scss";

function Web({ web }) {
  return (
    <div className={styles.div_web}>
      <h2>SITE {web.id}</h2>
      <h3>TITRE DU SITE{web.title}</h3>
      <p>BODY du site{web.body}</p>
      <Link href={"/webs"}>Retour vers choix site</Link>
    </div>
  );
}
export default Web;
//pour ouvrir les pages spécifiques à chaque id params retourne un objet dans un tableau
// export async function getStaticPaths() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   const paths = data.map((web) => {
//     return {
//       params: {
//         webId: `${web.id}`,
//       },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// }
export async function getStaticPaths() {
  return {
    paths: [{ params: { webId: "1" } }],
    fallback: true,
  };
}
//import de tout les elemeents avec un id params
export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.webId}`
  );
  const data = await res.json();
  return {
    props: {
      web: data,
    },
    revalidate: 10,
  };
}
