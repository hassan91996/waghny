import { Container, Accordion, Col } from "react-bootstrap";


const Help = () => {
    return (<>
        <div className="help py-5">
            <Container className="text-center">
                <h2 className="my-4">
                    الأسئلة الشائعة والتعليمات
                </h2>
                <Col className="col-12 col-lg-8 mx-auto">
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>ماهو موقع واجهني ؟</Accordion.Header>
                            <Accordion.Body>
                                بخطوة واحدة، أنت على موعد مع الحقيقة أحصل على رسائل سرية من زملائك بصراحة إعرف مزاياك و عيوبك، وما يعتقده الناس عنك عزز شخصيتك بمعرفة الواقع بعيدا عن النفاق ادخل في حوارات مباشرة مع أصدقاءك بسرية واجه الصراحة التي أخفتها عنك المجاملات
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>كيف انشئ حساب ؟</Accordion.Header>
                            <Accordion.Body>
                                يمكنك تسجيل حساب عبر بريدك الإلكتروني او الحسابات الإجتماعية بسهولة
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>كيف احصل على مصارحات ؟</Accordion.Header>
                            <Accordion.Body>
                                بعد انشاء الحساب ستحصل على الرابط الخاص بك عند حصولك على الرابط الخاص بك يمكنك نشره عبر مواقع التواصل الإجتماعي لتحصل على ملاحظات دون ان تعرف المصدر
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>ارغب بالأتصال بأدارة واجهني؟</Accordion.Header>
                            <Accordion.Body>
                                يمكنك التواصل معنا بشكل مباشر من خلال ازرار شبكات التواصل الموجودة اسفل كل صفحة
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>وصلتني مصارحة مزعجة
                            </Accordion.Header>
                            <Accordion.Body>
                                المعذرة لن نكون قادرين على معرفة من المرسل لان نظام عمل الموقع الحصول على مصاراحات مجهولة تستطيع من الأعدادت الحساب تفعيل ميزة فلترة المصاراحات التي تحتوى على كلام سيء ولن نكون قادرين على فلترة جميع الكلمات
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>الأبلاغ عن مستخدم ؟</Accordion.Header>
                            <Accordion.Body>
                                في حال وجدت مستخدم ينتهك معاير وشروط موقع واجهني من فضلك ارسل لنا بلاغ عن هذا المستخدم من خلال صفحته الشخصية ستجد زر ابلاغ عن اساءة والفريق المختص سيراجع الابلاغ ويتخذ الأجراء المطلوب
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>

            </Container>

        </div>
    </>);
}

export default Help;