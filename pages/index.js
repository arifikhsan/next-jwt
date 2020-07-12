import WelcomeScreen from "../features/welcome/ui/screen/welcome-screen";
import React from "react";
// const fetcher = (url) => axios.get(url).then((res) => res.data);

// export async function getServerSideProps(context) {
//   const res = await fetch("https://next-blog-chi-nine.vercel.app/api/hello");
//   const text = await res.json();

//   return {
//     props: {
//       text,
//     }, // will be passed to the page component as props
//   };
// }

export default function Home() {
  return (
    <div>
      <WelcomeScreen />
    </div>
  );
}
