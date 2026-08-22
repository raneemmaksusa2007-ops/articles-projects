import { NavLink, Link } from "react-router";
function Navbar() {

    return (
        <div>
            <h2>ArticleWebsite</h2>
            <div>
                 <Link to="/">Home</Link>
                 <Link to="/about">About</Link>
                 <Link to="/articles">Articles</Link>
            </div>
        </div>
    );
}
export default Navbar;