import { useState } from "react"
import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import Header1 from '../components/header1'

const Confirm: NextPage = () => {
  const router = useRouter();
  const [selIdx, setSelIdx] = useState<number>(-1);
  const [popup1, setPopup1] = useState<boolean>(false);
  const [popup2, setPopup2] = useState<boolean>(false);
  const list = [{title: "과학실험-A", sub: "전학년"}, {title: "과학실험-B", sub: "전학년"}, {title: "과학실험-C", sub: "전학년"}];

  const itemClick = (idx: number) => {
    if (selIdx === idx)
      setSelIdx(-1);
    else
      setSelIdx(idx);
  };

  const lectureDetail = (obj: any) => {    
    router.push({ pathname: '/lecture', query: {title: obj.title },});
  };

  const cancelModal = () => {    
    setPopup1(true);
  };

  const cancel = () => {
    setPopup1(false);
    setPopup2(true);
  };
  
  return (
    <>
      <Header1 idx={3} />
      <main>
        <div className="container1">
          <div className="flex-between pc">
            <p className="font1">수강신청 확인</p>
            <div className="flex-row">
              <img src="/images/img7.png" width={14} height={18} className="mr7" />
              <p className="font4">김철수<span className="font2">(1학년1반 3번)</span></p>
            </div>
          </div>
          <div className="item-list3 mt20">
            <div className="font8 flex-center">접수 종료 후 수강 확정된 강좌는 [확정]으로 표기됩니다.</div>
            <div className="mt20">
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
                      <button className="third1 ml20" onClick={() => cancelModal()}>신청취소</button>
                    )}
                    {index === 1 && (
                      <div className="primary3 ml20">확정</div>
                    )}
                    {index === 2 && (
                      <div className="fourth3 ml20">추첨탈락</div>
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
                        <img src="/images/img11.png" width={16} className="mr15" />강의 자료
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>
            <div className="mt15 pay">
              <div className="flex-row">
                <img src="/images/img13.png" width={18} className="mr7" />
                <p className="font5">결제금액</p>
              </div>
              <div className="flex-between mt20">
                <p>과학실험-A</p>
                <p>120,000원</p>
              </div>
              <div className="flex-between mt10">
                <p>과학실험-A</p>
                <p>120,000원</p>
              </div>
              <div className="border-dashed mt15"></div>
              <div className="flex-between mt10">
                <p>(예상)신청 총액</p>
                <p className="font5">240,000원</p>
              </div>
              <p className="font9 mt5">교재/재료비에 따라 신청총액이 증감될 수 있습니다.</p>
            </div>
          </div>
        </div>
        {popup1 && (
          <div className="modal">
            <div className="modal-body">
              <div className="text-center mt10">                
                <p className="mt20 font3">수강신청을 취소하시겠습니까?</p>
              </div>
              <div className="flex-between">
                <button className="secondary2" onClick={() => setPopup1(false)}>취소</button>
                <button className="primary2 ml20" onClick={() => cancel()}>확인</button>
              </div>
            </div>
          </div>
        )}
        {popup2 && (
          <div className="modal">
            <div className="modal-body">
              <div className="text-center mt10">
                <p className="mt20 font3">수강신청이 취소되었습니다.</p>                
              </div>
              <button className="primary2" onClick={() => setPopup2(false)}>확인</button>
            </div>
          </div>
        )}
      </main>
    </>
  )
}

export default Confirm
