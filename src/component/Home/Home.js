import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./productCard.js";
import MetaData from "../layout/MetaData";
import { getProduct, clearErrors } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader.js";
import { useAlert } from "react-alert";

const Home = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, error, products } = useSelector((state) => state.products);
    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct());
    }, [dispatch, error, alert, error, alert]);
    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <MetaData title="Ecommerce" />
                    <div className="banner">
                        <p>Welcome to Ecommerce</p>
                        <h1>FIND AMAZING PRODUCTS BELOW</h1>

                        <a href="#container">
                            <button>
                                Scrool <CgMouse />
                            </button>
                        </a>
                    </div>
                    <h2 className="homeHeading">Feature PRODUCTS</h2>
                    <div className="container" id="container">
                        {products && products.map((product) => <Product product={product} />)}
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
}
export default Home;


// import React, { Fragment, useEffect } from "react";
// import { CgMouse } from "react-icons/cg";
// import "./Home.css";
// import Product from "./product.js";
// import MetaData from "../layout/MetaData";
// import { getProduct } from "../../actions/productAction";
// import { useSelector, useDispatch } from "react-redux";

// const Home = () => {
//     const dispatch = useDispatch();
//     const { loading, error, products, productsCount } = useSelector((state) => state.products);

//     useEffect(() => {
//         dispatch(getProduct());
//     }, [dispatch]);

//     // Render each product individually using a for loop
//     const renderProducts = () => {
//         const productsList = [];
//         for (let i = 0; i < products.length; i++) {
//             const product = products[i];
//             productsList.push(<Product key={product._id} product={product} />);
//         }
//         return productsList;
//     };

//     return (
//         <Fragment>
//             <MetaData title="Ecommerce" />
//             <div className="banner">
//                 <p>Welcome to Ecommerce</p>
//                 <h1>FIND AMAZING PRODUCTS BELOW</h1>
//                 <a href="#container">
//                     <button>
//                         Scroll <CgMouse />
//                     </button>
//                 </a>
//             </div>
//             <h2 className="homeHeading">Feature PRODUCTS</h2>
//             <div className="container" id="container">
//                 {renderProducts()}
//             </div>
//         </Fragment>
//     );
// };








// export default Home;


// // const alert = useAlert();

// // const dispatch = useDispatch();
// // const { loading, error, productsCount, products } = useSelector(
// //     (state) => state.products
// // )
// // useEffect(() => {
// //     if(error) {
// //         return alert.error(error);
// //     }
// //     dispatch(getProduct());
// // }, [dispatch, error]);

// // {products && products.map((product) => <Product product={product} /> )}
// //

// /* <Product product={product} />
// <Product product={product} />
// <Product product={product} />
// <Product product={product} />
// <Product product={product} />
// <Product product={product} />
// <Product product={product} /> */

// // const product = {
// //     name: "Tshirt",
// //     images: [{ url: "https://images.unsplash.com/photo-1622445272461-c6580cab8755?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D" }],
// //     price: "$200",
// //     _id: "abhishek",
// // }