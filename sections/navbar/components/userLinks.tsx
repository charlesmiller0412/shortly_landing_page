import { Btn } from "../../../components/btn";

export const UserLinks = () => {
    return (
        <div className="userLinks">
            <ul>
                <li>
                    <a href="#">login</a>
                </li>
                <Btn text="sign up" href="#" className="btn" />
            </ul>
        </div>
    );
};
