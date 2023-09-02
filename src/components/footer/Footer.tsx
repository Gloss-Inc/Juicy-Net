import './Footer.scss'
import liveinternethq from '../../assets/liveinternethq.png'

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="copyright">
                Copyright © {currentYear} Gloss-Inc. All Rights Reserved.
            </div>
            <div>
                <img alt="liveinternetCounter" className="liveImg" src={liveinternethq}/>
            </div>
        </footer>
    );
}