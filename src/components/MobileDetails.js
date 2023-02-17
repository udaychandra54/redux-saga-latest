import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  sellMobile,
  buyMobile,
  getAllUsers,
  getSingleUser,
  addUser,
  editUser,
  deleteUser,
} from "../redux/actions/mobile";

const MobileDetails = (props) => {
  //   console.log(props);
  const sellMobile = () => {
    props.sellMobile();
  };
  const buyMobile = () => {
    props.buyMobile();
  };
  const getAllUsers = () => {
    props.getAllUsers();
  };
  const getSingleUser = () => {
    props.getSingleUser(2);
  };
  const addUser = () => {
    props.addUser({ name: "uday chandra" });
  };
  const editUser = () => {
    props.editUser({ id: 1, name: "uday" });
  };
  const deleteUser = () => {
    props.deleteUser(10);
  };
  return (
    <div>
      <h2>No Of Mobiles : {props.mobiles}</h2>
      <h2>
        Users : {props.users.length} and deatils :{props.user.name}
      </h2>
      <div className="container">
        <div className="row">
          <div className="col">
            <button className="btn btn-info" onClick={sellMobile}>
              SELL MOBILES
            </button>
          </div>
          <div className="col">
            <button className="btn btn-info" onClick={buyMobile}>
              BUY MOBILES
            </button>
          </div>
          <div className="col">
            <button className="btn btn-info" onClick={getSingleUser}>
              GET SINLE USER
            </button>
          </div>
          <div className="col">
            <button className="btn btn-info" onClick={getAllUsers}>
              GET ALL USERS
            </button>
          </div>
          <div className="col">
            <button className="btn btn-info" onClick={addUser}>
              ADD USER
            </button>
          </div>
          <div className="col">
            <button className="btn btn-info" onClick={editUser}>
              EDIT USER
            </button>
          </div>
          <div className="col">
            <button className="btn btn-info" onClick={deleteUser}>
              DELETE USER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state.users);
  return {
    mobiles: state.noOfMobiles,
    users: state.users,
    user: state.user,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     sellMobile: () => dispatch(sellMobile()),
//     buyMobile: () => dispatch(buyMobile()),
//   };
// };
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      sellMobile,
      buyMobile,
      getAllUsers,
      getSingleUser,
      addUser,
      editUser,
      deleteUser,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(MobileDetails);
