import Link from 'next/link';
import styles from './NavBar.module.css';

/**
 * Defines a type for a dictionary of URLs.
 */
type Urls = {
  [key: string]: string;
}

/**
 * Renders a navigation bar with links to the provided URLs.
 * @param urls - A dictionary of URLs where the key is the link text and the value is the URL.
 * @returns A list of links wrapped in a Next.js Link component.
 */
export default function NavBar({urls, prefix}: {urls: Urls, prefix?: string}) {
  if(prefix) {
    urls = Object.fromEntries(
      Object.entries(urls).map(([label, value]) => [label, `${prefix}/${value}`])
    );
  }
  return (
    <div className={styles.navbar}>
      {Object.entries(urls).map(url => {
        return <Link href={url[1]} key={url[1]} className={styles.navItem}>{url[0]}</Link>;
      })}
    </div>
  );
}
