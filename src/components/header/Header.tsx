import './Header.scss'
import {Link, NavLink} from "react-router-dom";
import silly from '../../assets/silly1.png'
export default function Header() {


    return (
            <header>
                <h1 className="title">Juicy-Net</h1>
                <nav>
                    <div>
                        <NavLink to={'/'}
                                 className={({isActive}) =>
                                     isActive ? "activeLink" : ""}
                        >
                            Main Page
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to={'rules'} className={({isActive}) =>
                            isActive ? "activeLink" : ""}
                        >
                            Rules Page
                        </NavLink>
                    </div>
                    <NavLink to={'heroes'} className={({isActive}) =>
                        isActive ? "activeLink" : ""}
                    >
                        Heroes Page
                    </NavLink>
                    <div>

                    </div>
                    <div>
                        <NavLink to={'forum'} className={({isActive}) =>
                            isActive ? "activeLink" : ""}
                        >
                            Forum Page
                        </NavLink>
                    </div>
                </nav>
                <div className="userBlock">
                    <h1 className="username">thats you!</h1>
                    <Link className="userImg" to={'user'}>
                        <img alt="userImg" src={silly}/>
                    </Link>
                </div>
            </header>
    );
}