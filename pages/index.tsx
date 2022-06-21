import { useState } from "react"
import type { NextPage } from 'next'
import Link from "next/link"
import Header1 from '../components/header1'

const Home: NextPage = () => {
  const [tabIdx, setTabIdx] = useState<number>(1);

  const tabClick = (idx: number) => {
    setTabIdx(idx);
  };

  return (
    <>
      <Header1 idx={1} />
      <main>
        <div className="container">
          <div className="flex-between pc">
            <p className="font1">2022년도 01월 신청</p>
            <div className="flex-row">
              <img src="/images/img5.png" width={18} height={18} className="mr7" />
              <p className="font2">성동초등학교</p>
            </div>
          </div>
          <div className="tab mt20">
            <Link href="/">
              {tabIdx === 1 ? (
                <a className="active">학생정보</a>
              ) : (
                <a onClick={() => tabClick(1)}>학생정보</a>
              )}
            </Link>
            <Link href="/">
              {tabIdx === 2 ? (
                <a className="active">안내문</a>
              ) : (
                <a onClick={() => tabClick(2)}>안내문</a>
              )}              
            </Link>
          </div>
          {tabIdx === 1 ? (
            <div>
              <div className="stu-info">
                <div className="flex-row">
                  <img src="/images/img1.png" width={27} height={27} className="mr15" />
                  <div>
                    <p className="font3">학생명</p>
                    <p className="font4">김철수</p>
                  </div>
                </div>
                <div className="flex-row mt20">
                  <img src="/images/img2.png" width={21} height={27} className="mr21" />
                  <div>
                    <p className="font3">학년/반/번호</p>
                    <p className="font4">1학년 1반 3번</p>
                  </div>
                </div>
                <div className="flex-row mt20">
                  <img src="/images/img3.png" width={27} height={27} className="mr15" />
                  <div>
                    <p className="font3">신청기간</p>
                    <p className="font4">2022.01.01 09:00 ~ 2022.02.01 18:00</p>
                  </div>
                </div>              
              </div>
              <button onClick={() => {}} className="primary mt20">
                <img src="/images/img4.png" width={14} height={10} className="mr15" />수강신청 확인
              </button>
            </div>
          ) : (
            <div className="guide">              
              <img src="/images/temp1.png" className="guide-img" />
              <a href="/images/temp1.png" target="_blank" className="primary-small mt10">              
                <img src="/images/img14.png" width={14} height={14} className="mr7" />크게 보기              
              </a>
            </div>
          )}
        </div>
      </main>
    </>
  )
}

export default Home
