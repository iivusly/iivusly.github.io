import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <h1>About Me</h1>
      <p>
        Hi, I am Niko (known as iivusly, lem0n, or n1kital online). I am a
        language enthusiast (natural and formal). I speak English formally, but
        also know French and Spanish (via proxy). My goal is to learn at least
        one language from each of the families to fluency! I have a half baked
        understanding of gramatial structure and basic grammar of German,
        Russian, Japanese, and Chinese. I love to code, listen to music, and
        play video games in my free time. I have been an avid programmer since
        2017 and since then havent gotten bored.
      </p>
      <h2>Contact Me</h2>
      <p>No seriously, please do I am always looking for more friends!</p>
      <ul>
        <li>
          <Link href="https://discord.com/users/1041597787407663134">
            Discord
          </Link>
        </li>
        <li>
          <Link href="https://t.me/lemonyseal">Telegram</Link>
        </li>
        <li>
          <Link href="https://matrix.to/#/@ponzu_sause:matrix.org">Matrix</Link>
        </li>
      </ul>
    </>
  );
}
