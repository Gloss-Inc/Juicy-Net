import './ThreadsPage.scss'
import {Outlet} from "react-router-dom";

export default function ThreadsPage() {
    return (
        <div>
            <div>
                <h1>Threads page</h1>
            </div>
            <Outlet/>
        </div>
    );
}