import type { NextPage } from 'next'
import Link from "next/link"
import Header1 from '../components/header1'

const Application: NextPage = () => {
  const list = [{title: "교과영역", cnt: 14}, {title: "특기적성", cnt: 14}];
  
  return (
    <>
      <Header1 idx={2} />
      <main>
        <div className="container1">
          <div className="flex-between">
            <p className="font1">강좌 선택</p>
            <div className="flex-row">
              <img src="/images/img7.png" width={14} height={18} className="mr7" />
              <p className="font4">김철수<span className="font2">(1학년1반 3번)</span></p>
            </div>
          </div>
          <div className="item-list1 mt20">
            {list.map((item, index) => (
              <Link key={index} href={"/application_detail?id=" + (index)}>
                <a className={"item1 flex-between" + (index === 0 ? '' : ' mt10')}>
                  <p className="font2 flex1">{item.title} ({item.cnt})</p>
                  <div className="img flex-center">
                    <img src="/images/img8.png" width={10} />
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default Application
