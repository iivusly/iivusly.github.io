import Link from "next/link";

export default async function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>
        This is the home page to my website. It is not done yet, so stick
        around! If you're looking for some information about me, check out my
        about page <Link href="/about">here!</Link> Sorry if some of the English
        is poor, this is only the first iteration.
      </p>
    </>
  );
}
