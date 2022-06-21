import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Link href="/person">
        <a>개인정보 위탁처리</a>
      </Link>
      <p className="mt20">Copyright  2022 LODEV All right reserved.</p>
    </footer>
  );
}