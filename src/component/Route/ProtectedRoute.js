import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom"; // Import Navigate
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { loading, isAuthenticated, user} = useSelector((state) => state.user);
    const navigate = useNavigate();

    if (loading) {
        return null; // You may want to return a loader component or something else while loading
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" />; // Use Navigate outside the JSX
    }

    return <Route {...rest} element={<Component />} />; // Use element prop to render the component
}

export default ProtectedRoute;


// import React, { Fragment } from "react";
// import { useSelector } from "react-redux";
// import { Route, Routes } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//     const { loading, isAuthenticated, user} = useSelector((state) => state.user);
//     const navigate = useNavigate();
//     return (
//        <Fragment>
        
//         {!loading && (
            
//            <Route
//            {...rest}
//            render={(props) => {
//             if (!isAuthenticated) {
//                 return navigate("/login");

//             }
//             return <Component {...props} />;
//            }}
//            />
           
//         )}
        
//        </Fragment>
//     )
// }

// export default ProtectedRoute;

// db.users.updateOne({name: "a singh"},{$set: {role:"admin"}}
// import React, { Fragment } from "react";
// import { useSelector } from "react-redux";
// import { Redirect, Route } from "react-router-dom";

// const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
//   const { loading, isAuthenticated, user } = useSelector((state) => state.user);

//   return (
//     <Fragment>
//       {loading === false && (
//         <Route
//           {...rest}
//           render={(props) => {
//             if (isAuthenticated === false) {
//               return <Redirect to="/login" />;
//             }

//             if (isAdmin === true && user.role !== "admin") {
//               return <Redirect to="/login" />;
//             }

//             return <Component {...props} />;
//           }}
//         />
//       )}
//     </Fragment>
//   );
// };

// export default ProtectedRoute;



       /* <ProtectedRoute exact path="/account" Component={ Prifile } /> */
