import type { NextPage } from 'next'
import Header2 from '../components/header2'

const Person: NextPage = () => {
  return (
    <>
      <Header2 title={"개인정보처리의 위탁 알림"} />
      <main>
        <div className="container">
          <p>코디마스터 시스템을 제공하는 로데브(주)는 방과후학교  관리 지원을 위한 본인 확인 및 원활한 업무(수강신청, 가정통신문, 설문조사, 출석관리 등) 처리를 위해 다음의 정보를 학교로부터 위탁 받아 처리하고 있으며 관계 법령에 따라 고지해 드립니다.</p>
          <div className="bg-f1 mt20">
            <p>수탁 기관: 로데브(주) TEL 070-7733-7160</p>
            <p>경기도 안양시 동안구 벌말로 66, b-F908(하이필드지식산업센터)</p>
          </div>
          <ul className="mt20">
            <li>위탁 업무의 내용: 방과후학교 관리시스템 ‘코디마스터’의 서비스 제공</li>
            <li>위탁 개인정보: 학년, 반, 번호, 이름, 보호자 연락처, 자유수강 지원 여부<br/>보안망 내에서 개인정보는 암호화되어 저장됨</li>
            <li>위탁 기간: 금년 2월 ~ 내년 2월</li>
            <li>근무 시간: 9시 ~ 18시(공휴일, 주말 제외)</li>
          </ul>
        </div>
      </main>
    </>
  )
}

export default Person
