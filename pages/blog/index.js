import chrome from "chrome-cookies-secure";

export default function Page({ data }) {
  return (
    <>
      <div>{data}</div>
    </>
  );
}

// This gets called on every request
export const getStaticProps = async () => {
  // Fetch data from external API
  let cookies = "aaa";
  cookies = await new Promise((resolve, reject) => {
    chrome.getCookies("https://www.facebook.com/", function (err, cookies) {
      if (err) {
        reject(JSON.stringify(err));
      } else {
        resolve(JSON.stringify(cookies));
      }
    });
  });
  // Pass data to the page via props
  return { props: { data: cookies || "xxx" } };
};
