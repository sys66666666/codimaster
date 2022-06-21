import Link from "next/link";

interface Header2Props {
  title: string;  
}

export default function Header2({title}: Header2Props) {
  return (
    <header className="header2">
      <Link href="/">
        <a onClick={() => history.go(-1)}>
          <img src="/images/img6.png" width={10} />
        </a>
      </Link>
      <nav>
        <p className="font5">{title}</p>
      </nav>
    </header>
  );
}