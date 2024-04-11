import Image from "next/image";
import styles from "./page.module.css";
// import chrome from "chrome-cookies-secure";

export default function Home({ cookies, sss }) {
  return (
    <main className={styles.main}>
      <div>{cookies}</div>
      <div>{sss}</div>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}

// export const getServerSideProps = async () => {
//   // Fetch data from external API
//   chrome.getCookies("https://www.facebook.com/", function (err, cookies) {
//     return {
//       props: {
//         cookies,
//       },
//     };
//   });
//   // Pass data to the page via props
//   return { props: { sss: "xxx" } };
// };
