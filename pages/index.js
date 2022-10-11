import { useRef, useEffect } from 'react'
import { init } from 'ityped'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import { FiSend } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import { HiOutlineChevronDoubleDown } from 'react-icons/hi'


const Home = () => {
  const text = useRef()
  useEffect(() => {
    init(text.current, {
      strings: ['سجل في واجهني واجعل أصدقاءك والآخرين يواجهونك بالحقيقة',
        'يمكنك الرد على الرسائل دون معرفة المرسل',
        'الرسائل التي تتلقاها خاصة بك ويمكنك أنت فقط مشاهدتها'],
      showCursor: false
    })
  }, [])

  const Scroll = () => {
    window.scroll({
      top: window.innerHeight - 70,
    });
  }

  return (<>
    <div className='hero_sec'>
    </div>
    <div className='hero_content'>
      <Container>
        <h1>
          واجهني
        </h1>
        <h5 className='text-white-50'>هل أنت مستعد لمعرفة ملاحظات الناس عنك بدون أن تعرفهم ؟</h5>
        <span className='textspan' ref={text}></span>
        <Row className='justify-content-center links'>
          <Link href='/login'><a><FiSend /> تسجيل دخول</a></Link>
          <Link href='/sinup'><a><AiOutlinePlus /> إنشاء حساب</a></Link>
        </Row>
        <div className='herobottom'>
          <p onClick={Scroll}>
            <HiOutlineChevronDoubleDown />
          </p>
        </div>
      </Container>
    </div >
    <div className='description text-center py-4'>
      <Container>
        <h2 className='my-4'>كيفية عمل واجهني</h2>
        <Row className='steps'>
          <Col className='col-12 col-lg-4 step p-3'>
            {/* "Icon made by Freepik from www.flaticon.com" */}
            <img src="/images/setup.png" className='img-fluid mb-4' />
            <h5 className='my-3'>انشاء حساب واجهني</h5>
            <p className='text-black-50'>
              يمكنك تسجيل حساب عبر بريدك الإلكتروني او الحسابات الإجتماعية بسهولة
            </p>
          </Col>
          <Col className='col-12 col-lg-4 step p-3'>
            {/* Icon made by Stickers from www.flaticon.com" */}
            <img src="/images/share.png" className='img-fluid mb-4' />
            <h5 className='my-3'>مشاركة رابط واجهني</h5>
            <p className='text-black-50'>
              عند حصولك على الرابط الخاص بك يمكنك نشره عبر مواقع التواصل الإجتماعي لتحصل على ملاحظات دون ان تعرف المصدر
            </p>
          </Col>
          <Col className='col-12 col-lg-4 step p-3'>
            {/* Icon made by Stickers from www.flaticon.com" */}
            <img src="/images/read.png" className='img-fluid mb-4' />
            <h5 className='my-3'>صارحني رسائلي إقرأ ما كتبه الناس عنك</h5>
            <p className='text-black-50'>
              عند دخولك لحسابك ستجد كل الملاحظات التي قام بكتابها أصدقائك عنك ، أنت وحدك من يمكنه قرائتها
            </p>
          </Col>
        </Row>
      </Container>
    </div>
    <div className='usedes py-5 mt-5 '>
      <Container className='text-center'>
        <Col className='col-12 col-lg-6 mx-auto '>
          <h2 className='my-4'>كيفية استخدام موقع واجهني</h2>
          <img src='/images/confused.png' />
          <p className='text-black-50 lh-base'>
            يمكن اعتبار واجهني بسيطًا للغاية،
            فبمجرد التسجيل باستخدام اسم مستخدم وكلمة مرور ستتمكن
            من مشاركة رابط ملف التعريف الخاص بك على أي من مواقع التواصل الاجتماعي
            والطلب من الناس استخدام الرابط لتقديم تعليقاتهم لك. يمكن للأشخاص كتابة
            أي شيءٍ بشكلٍ مجهولٍ وسيتم تسليمه لك من خلال التطبيق أو الموقع
          </p>
        </Col>
      </Container>

    </div>

  </>);
}

export default Home;