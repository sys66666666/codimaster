import { useState } from "react"
import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import Link from "next/link"
import Header1 from '../components/header1'

const ApplicationDetail: NextPage = () => {
  const router = useRouter();
  const [selIdx, setSelIdx] = useState<number>(-1);
  const [popup1, setPopup1] = useState<boolean>(false);
  const [popup2, setPopup2] = useState<boolean>(false);
  const list = [{title: "과학실험-A", sub: "전학년"}, {title: "과학실험-B", sub: "전학년"}];

  const itemClick = (idx: number) => {
    if (selIdx === idx)
      setSelIdx(-1);
    else
      setSelIdx(idx);
  };

  const lectureDetail = (obj: any) => {    
    router.push({ pathname: '/lecture', query: {title: obj.title },});
  };

  const apply = () => {    
    setPopup1(true);
  };
  
  return (
    <>
      <Header1 idx={2} />
      <main>
        <div className="container1">
          <div className="flex-row">
            <Link href="/">
              <a onClick={() => history.go(-1)} className="flex-center">
                <img src="/images/img6.png" width={10} className="ml7 mr15" />
              </a>
            </Link>
            <p className="font2">교과영역 수강신청</p>            
          </div>
          <div className="item-list2 mt20">
            {list.map((item, index) => (              
              <div key={index} className={"item1" + (index === 0 ? '' : ' mt10') + (selIdx === index ? ' border-active' : '')}>
                <div className="flex-between">
                  <a className="flex1 cp" onClick={() => itemClick(index)}>
                    <div className="flex-row">
                      {selIdx === index ? (
                        <img src="/images/img9.png" width={16} className="mr15" />
                      ) : (
                        <img src="/images/img10.png" width={16} className="mr15" />
                      )}
                      <div>
                        <p className="font6">{item.title}</p>
                        <p>{item.sub}</p>
                      </div>
                    </div>
                  </a>
                  {index === 0 && (
                    <button className="primary1" onClick={() => apply()}>
                      <span className="font7">1/25명</span>
                      <span className="mt3">신청하기</span>
                    </button>
                  )}
                  {index === 1 && (
                    <div className="secondary1 ml20">
                      <span className="font7">1/25명</span>
                      <span className="mt3">신청완료</span>
                    </div>
                  )}                  
                </div>
                {selIdx === index && (
                  <>
                    <div className="item-detail mt10">
                      <div className="flex-row">
                        <label>개강일자</label>
                        <p>2022.01.02</p>
                      </div>
                      <div className="flex-row mt3">
                        <label>수업일시</label>
                        <p>목요일 (15:40 ~ 17:00)</p>
                      </div>
                      <div className="flex-row mt3">
                        <label>대상학년</label>
                        <p>전학년</p>
                      </div>
                      <div className="flex-row mt3">
                        <label>월수강료</label>
                        <p>26,000원(기수수강료 78,000원)</p>
                      </div>
                      <div className="flex-row mt3">
                        <label>교재(재료)비</label>
                        <p>39,000원</p>
                      </div>
                      <div className="flex-row mt3">
                        <label>수강교실</label>
                        <p>과학실</p>
                      </div>
                      <div className="flex-row mt3">
                        <label>강사명</label>
                        <p>코디마스트</p>
                      </div>
                      <div className="flex-row mt3">
                        <label>비고</label>
                        <p>조기에 마감될 수 있습니다.</p>
                      </div>
                    </div>
                    <button onClick={() => lectureDetail(item)} className="secondary mt20">
                      <img src="/images/img11.png" width={24} className="mr15" />강의 자료
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>          
        </div>
        {popup1 && (
          <div className="modal">
            <div className="modal-body">
              <button onClick={() => setPopup1(false)} className="modal-close">
                <img src="/images/img15.png" width={18} />
              </button>
              <div className="text-center">
                <p className="font4">알림</p>
                <p className="mt20 font3">수강신청이 완료되었습니다.</p>
              </div>
              <div className="flex-between">
                <button className="secondary2" onClick={() => setPopup1(false)}>취소</button>
                <button className="primary2 ml20" onClick={() => setPopup1(false)}>확인</button>
              </div>
            </div>
          </div>
        )}
        {popup2 && (
          <div className="modal">
            <div className="modal-body">
              <button onClick={() => setPopup2(false)} className="modal-close">
                <img src="/images/img15.png" width={18} />
              </button>
              <div className="text-center">
                <p className="font4">알림</p>
                <p className="mt20 font3">수강 시간이 중복됩니다.</p>
                <p className="mt5 font3">확인 후 신청해 주세요.</p>
              </div>
              <button className="primary2" onClick={() => setPopup2(false)}>확인</button>
            </div>
          </div>
        )}
      </main>
    </>
  )
}

export default ApplicationDetail
