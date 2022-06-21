import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Header2 from '../components/header2'

const Lecture: NextPage = () => {
  const router = useRouter();
  const title: string = router.query.title+'';

  return (
    <>
      <Header2 title={title} />
      <main>
        <div className="container1">
          <img src="/images/img12.png" className="w100" />
        </div>
      </main>
    </>
  )
}

export default Lecture
