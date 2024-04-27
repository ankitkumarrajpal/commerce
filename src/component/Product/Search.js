import React, { Fragment, useState } from "react";
import "./Search.css";
import MetaData from "../layout/MetaData";

const Search = () => {
 
    const [keyword, setKeyword] = useState("");

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            window.location.href = `/products/${keyword}`;
        }
        else {
            window.location.href = "/products";
        }
    };

    return (
        <Fragment>
            <MetaData title="SEARCH A PRODUCTS -- ECOMMERCE" />
            <form className="searchBox" onSubmit={searchSubmitHandler} >
                <input
                    type="text"
                    placeholder="Search Product ..."
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <input type="submit" value="Search" />
            </form>
        </Fragment>
    )
}

export default Search;







// import React, { Fragment, useState } from "react";
// import { useParams } from 'react-router-dom';
// import "./Search.css"

// const Search = ({ history }) => {
//     const [keyword, setKeyword] = useState("");
//     const { postId } = useParams();

//     const searchSubmitHandler = (e) => {
//       e.preventDefault();
//       if (keyword.trim()) {
//         history.push(`/products/${postId}`);
//       } else {
//         history.push("/products");
//       }
//     };
//     return (
//     <Fragment>
//         <form className="searchBox" onSubmit={searchSubmitHandler} >
//             <input
//             type="text"
//             placeholder="Search Product ..."
//             onChange={(e) => setKeyword(e.target.value)}
//             />
//             <input type="submit" value="Search" />
//         </form>
//     </Fragment>
//     )
// }

// export default Search;




/* Display postId if it exists
            {postId && (
                <p>Post ID: {postId}</p>
            )} */