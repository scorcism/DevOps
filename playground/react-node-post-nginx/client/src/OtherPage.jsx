import { Link } from "react-router-dom";

const OtherPage = () => {
    return (
        <div>
            <h1>
                I'm an other page!
            </h1>
            <br />
            <br />
            <Link to="/">Go back to home screen</Link>
        </div>
    );
};

export default OtherPage;
