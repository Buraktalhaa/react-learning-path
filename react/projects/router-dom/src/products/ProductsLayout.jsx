import { Outlet } from "react-router-dom";
import { Categories } from ".";

export default function ProductLayout() {
    return (<>
        <div className="row">
            <div className="col-sm-8">
                <Outlet></Outlet>
            </div>
            <div className="col-sm-4">
                <Categories></Categories>
            </div>
        </div>
    </>)
}