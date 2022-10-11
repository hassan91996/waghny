import Link from "next/link";
import Container from "react-bootstrap/Container";
import { BsFacebook, BsWhatsapp, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
    return <footer className="footer">
        <Container className="text-center">
            <img src="/images/logo.png" />
            <ul className="footernav flex-column  flex-lg-row my-3">
                <li><Link href="/"><a>الرئيسية</a></Link></li>
                <li> <Link href=""><a>المساعدة</a></Link></li>
                <li><Link href=""><a>اشتراك</a></Link></li>
                <li><Link href=""><a>اتصل بنا</a></Link></li>
            </ul>
            <ul className="social py-3">
                <li><a href="/" target='_blank'><BsFacebook /></a></li>
                <li><a href="/" target='_blank'><BsTwitter /></a></li>
                <li><a href="/" target='_blank'><BsWhatsapp /></a></li>
                <li><a href="/" target='_blank'><BsInstagram /></a></li>
            </ul>
        </Container>
    </footer>;
}

export default Footer;