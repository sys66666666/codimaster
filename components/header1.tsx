import Link from "next/link";

interface Header1Props {
  idx: number;  
}

export default function Header1({idx}: Header1Props) {
  const showNavBar = () => {
    var overlay: any = document.getElementById("overlay");
    overlay.classList.remove('none');
    overlay.classList.add('block');

    var mobile_menu: any = document.getElementById("mobile-menu");
    mobile_menu.classList.remove('none');
    mobile_menu.classList.add('block');
  };

  const hideNavBar = () => {
    var overlay: any = document.getElementById("overlay");
    overlay.classList.remove('block');
    overlay.classList.add('none');

    var mobile_menu: any = document.getElementById("mobile-menu");
    mobile_menu.classList.remove('block');
    mobile_menu.classList.add('none');
  };

  return (
    <>
      <header>
        <Link href="/">
          <a>
            <img src="/images/logo.png" width={107} height={48} />
          </a>
        </Link>
        <nav className="gnb_pc">
          <div className={"menu" + (idx === 1 ? ' active' : '')}>
            <Link href="/">
              <a>홈</a>
            </Link>
            <div className="line"></div>
          </div>
          <div className={"menu" + (idx === 2 ? ' active' : '')}>
            <Link href="/application">
              <a>수강신청</a>
            </Link>
            <div className="line"></div>
          </div>
          <div className={"menu" + (idx === 3 ? ' active' : '')}>
            <Link href="/confirm">
              <a>신청확인</a>
            </Link>
            <div className="line"></div>
          </div>
        </nav>
        <nav className="gnb_m">
          <button className="menu_button" onClick={() => showNavBar()}>
              <i></i>
              <i></i>
              <i></i>
          </button>
        </nav>
      </header>
      <div id="overlay" className="overlay none"></div>
      <div id="mobile-menu" className="mobile-menu none">
        <button className="close" onClick={() => hideNavBar()}>
            <i></i>
            <i></i>
        </button>
        <div className="menu-list mt20">
          <div className="flex-end">
            <Link href="/">
              <a className="font10">홈</a>
            </Link>
          </div>
          <div className="flex-end mt20">
            <Link href="/application">
              <a className="font10">수강신청</a>
            </Link>
          </div>
          <div className="flex-end mt20">
            <Link href="/confirm">
              <a className="font10">신청확인</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}