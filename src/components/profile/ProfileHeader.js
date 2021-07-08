import React from "react";
import logo from "../../assets/icons/logo_large.png";
import "./CssProfile.scss";

function ProfileHeader() {
  return (
    <>
      <h1>asd</h1>
    </>
    // <div classNameName="container bootstrap snippets">
    //   <div className="row">
    //     <div className="col-lg-3 col-md-3 col-sm-4">
    //       <div className="panel rounded shadow">
    //         <div className="panel-body">
    //           <div className="inner-all">
    //             <ul className="list-unstyled">
    //               <li className="text-center">
    //                 <img
    //                   data-no-retina=""
    //                   className="img-circle img-responsive img-bordered-primary"
    //                   src="http://bootdey.com/img/Content/avatar/avatar1.png"
    //                   alt="John Doe"
    //                 />
    //               </li>
    //               <li className="text-center">
    //                 <h4 className="text-capitalize">John Doe</h4>
    //                 <p className="text-muted text-capitalize">web designer</p>
    //               </li>
    //               <li>
    //                 <a
    //                   href=""
    //                   className="btn btn-success text-center btn-block"
    //                 >
    //                   PRO Account
    //                 </a>
    //               </li>
    //               <li>
    //                 <br />
    //               </li>
    //               <li>
    //                 <div className="btn-group-vertical btn-block">
    //                   <a href="" className="btn btn-default">
    //                     <i className="fa fa-cog pull-right"></i>Edit Account
    //                   </a>
    //                   <a href="" className="btn btn-default">
    //                     <i className="fa fa-sign-out pull-right"></i>Logout
    //                   </a>
    //                 </div>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="panel panel-theme rounded shadow">
    //         <div className="panel-heading">
    //           <div className="pull-left">
    //             <h3 className="panel-title">Contact</h3>
    //           </div>
    //           <div className="pull-right">
    //             <a href="#" className="btn btn-sm btn-success">
    //               <i className="fa fa-facebook"></i>
    //             </a>
    //             <a href="#" className="btn btn-sm btn-success">
    //               <i className="fa fa-twitter"></i>
    //             </a>
    //             <a href="#" className="btn btn-sm btn-success">
    //               <i className="fa fa-google-plus"></i>
    //             </a>
    //           </div>
    //           <div className="clearfix"></div>
    //         </div>
    //         <div className="panel-body no-padding rounded">
    //           <ul className="list-group no-margin">
    //             <li className="list-group-item">
    //               <i className="fa fa-envelope mr-5"></i> support@bootdey.com
    //             </li>
    //             <li className="list-group-item">
    //               <i className="fa fa-globe mr-5"></i> www.bootdey.com
    //             </li>
    //             <li className="list-group-item">
    //               <i className="fa fa-phone mr-5"></i> +6281 903 xxx xxx
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-lg-9 col-md-9 col-sm-8">
    //       <div className="profile-cover">
    //         <div className="cover rounded shadow no-overflow">
    //           <div className="inner-cover">
    //             <div className="btn-group cover-menu-mobile hidden-lg hidden-md">
    //               <button
    //                 type="button"
    //                 className="btn btn-theme btn-sm dropdown-toggle"
    //                 data-toggle="dropdown"
    //               >
    //                 <i className="fa fa-bars"></i>
    //               </button>
    //               <ul
    //                 className="dropdown-menu pull-right no-border"
    //                 role="menu"
    //               >
    //                 <li className="active">
    //                   <a href="#">
    //                     <i className="fa fa-fw fa-clock-o"></i>{" "}
    //                     <span>Timeline</span>
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#">
    //                     <i className="fa fa-fw fa-user"></i> <span>About</span>
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#">
    //                     <i className="fa fa-fw fa-photo"></i>{" "}
    //                     <span>Photos</span> <small>(98)</small>
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#">
    //                     <i className="fa fa-fw fa-users"></i>
    //                     <span> Friends </span>
    //                     <small>(23)</small>
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#">
    //                     <i className="fa fa-fw fa-envelope"></i>{" "}
    //                     <span>Messages</span> <small>(7 new)</small>
    //                   </a>
    //                 </li>
    //               </ul>
    //             </div>
    //             <img
    //               src="http://bootdey.com/img/Content/flores-amarillas-wallpaper.jpeg"
    //               className="img-responsive full-width"
    //               alt="cover"
    //               style={{ maxHeight: "200px" }}
    //             />
    //           </div>
    //           <ul className="list-unstyled no-padding hidden-sm hidden-xs cover-menu">
    //             <li className="active">
    //               <a href="#">
    //                 <i className="fa fa-fw fa-clock-o"></i>{" "}
    //                 <span>Timeline</span>
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#">
    //                 <i className="fa fa-fw fa-user"></i> <span>About</span>
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#">
    //                 <i className="fa fa-fw fa-photo"></i> <span>Photos</span>{" "}
    //                 <small>(98)</small>
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#">
    //                 <i className="fa fa-fw fa-users"></i>
    //                 <span> Friends </span>
    //                 <small>(23)</small>
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="divider"></div>
    //       <div className="panel rounded shadow">
    //         <form action="...">
    //           <textarea
    //             className="form-control input-lg no-border"
    //             rows="2"
    //             placeholder="What are you doing?..."
    //           ></textarea>
    //         </form>
    //         <div className="panel-footer">
    //           <button className="btn btn-success pull-right mt-5">POST</button>
    //           <ul className="nav nav-pills">
    //             <li>
    //               <a href="#">
    //                 <i className="fa fa-user"></i>
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#">
    //                 <i className="fa fa-map-marker"></i>
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#">
    //                 <i className="fa fa-camera"></i>
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#">
    //                 <i className="fa fa-smile-o"></i>
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="row">
    //         <div className="col-md-6">
    //           <div className="panel panel-success rounded shadow">
    //             <div className="panel-heading no-border">
    //               <div className="pull-left half">
    //                 <div className="media">
    //                   <div className="media-object pull-left">
    //                     <img
    //                       src="http://bootdey.com/img/Content/avatar/avatar2.png"
    //                       alt="..."
    //                       className="img-circle img-post"
    //                     />
    //                   </div>
    //                   <div className="media-body">
    //                     <a
    //                       href="#"
    //                       className="media-heading block mb-0 h4 text-white"
    //                     >
    //                       John Doe
    //                     </a>
    //                     <span className="text-white h6">on 8th June, 2014</span>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="pull-right">
    //                 <a href="#" className="text-white h4">
    //                   <i className="fa fa-heart"></i> 15.5K
    //                 </a>
    //               </div>
    //               <div className="clearfix"></div>
    //             </div>
    //             <div className="panel-body no-padding">
    //               <img
    //                 src="http://lorempixel.com/340/210/nature/4/"
    //                 alt="..."
    //                 className="img-responsive full-width"
    //               />
    //               <div className="inner-all block">
    //                 view all <a href="#">7 comments</a>
    //               </div>
    //               <div className="line no-margin"></div>
    //               <div className="media inner-all no-margin">
    //                 <div className="pull-left">
    //                   <img
    //                     src="http://bootdey.com/img/Content/avatar/avatar6.png"
    //                     alt="..."
    //                     className="img-post2"
    //                   ></img>
    //                 </div>
    //                 <div className="media-body">
    //                   <a href="#" className="h4">
    //                     John Doe
    //                   </a>
    //                   <small className="block text-muted">
    //                     Lorem ipsum dolor sit amet, consectetur adipisicing
    //                     elit.{" "}
    //                   </small>
    //                   <em className="text-xs text-muted">
    //                     Posted on{" "}
    //                     <span className="text-danger">Dec 08, 2014</span>
    //                   </em>
    //                 </div>
    //               </div>
    //               <div className="line no-margin"></div>
    //               <div className="media inner-all no-margin">
    //                 <div className="pull-left">
    //                   <img
    //                     src="http://bootdey.com/img/Content/avatar/avatar4.png"
    //                     alt="..."
    //                     className="img-post2"
    //                   />
    //                 </div>
    //                 <div className="media-body">
    //                   <a href="#" className="h4">
    //                     John Doe
    //                   </a>
    //                   <small className="block text-muted">
    //                     Quaerat, impedit minus non commodi facere doloribus nemo
    //                     ea voluptate nesciunt deleniti.
    //                   </small>
    //                   <em className="text-xs text-muted">
    //                     Posted on{" "}
    //                     <span className="text-danger">Dec 08, 2014</span>
    //                   </em>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="panel-footer">
    //               <form action="#" className="form-horizontal">
    //                 <div className="form-group has-feedback no-margin">
    //                   <input
    //                     className="form-control"
    //                     type="text"
    //                     placeholder="Your comment here..."
    //                   />
    //                   <button
    //                     type="submit"
    //                     className="btn btn-theme fa fa-search form-control-feedback"
    //                   ></button>
    //                 </div>
    //               </form>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-md-6">
    //           <div className="panel panel-success rounded shadow">
    //             <div className="panel-heading no-border">
    //               <div className="pull-left half">
    //                 <div className="media">
    //                   <div className="media-object pull-left">
    //                     <img
    //                       src="http://bootdey.com/img/Content/avatar/avatar6.png"
    //                       alt="..."
    //                       className="img-circle img-post"
    //                     />
    //                   </div>
    //                   <div className="media-body">
    //                     <a
    //                       href="#"
    //                       className="media-heading block mb-0 h4 text-white"
    //                     >
    //                       John Doe
    //                     </a>
    //                     <span className="text-white h6">on 8th June, 2014</span>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="pull-right">
    //                 <a href="#" className="text-white h4">
    //                   <i className="fa fa-heart"></i> 15.5K
    //                 </a>
    //               </div>
    //               <div className="clearfix"></div>
    //             </div>
    //             <div className="panel-body no-padding">
    //               <div className="inner-all block">
    //                 <h4>Upload on my album :D</h4>
    //                 <p>
    //                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //                   Expedita, iste omnis fugiat porro consequuntur ratione
    //                   iure error reprehenderit cum est ab similique magnam
    //                   molestias aperiam voluptatibus quia aliquid! Sed, minima.
    //                 </p>
    //                 <blockquote className="mb-10">
    //                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //                   A, delectus!
    //                 </blockquote>

    //                 <img
    //                   data-no-retina=""
    //                   src="http://lorempixel.com/340/210/nature/1/"
    //                   alt="..."
    //                   width="100"
    //                 />
    //                 <img
    //                   data-no-retina=""
    //                   src="http://lorempixel.com/340/210/nature/2/"
    //                   alt="..."
    //                   width="100"
    //                 />
    //                 <img
    //                   data-no-retina=""
    //                   src="http://lorempixel.com/340/210/nature/3/"
    //                   alt="..."
    //                   width="100"
    //                 />
    //               </div>
    //               <div className="inner-all bg-success">
    //                 view all <a href="#">7 comments</a>
    //               </div>
    //             </div>
    //             <div className="panel-footer no-padding no-border">
    //               <div className="media inner-all no-margin">
    //                 <div className="pull-left">
    //                   <img
    //                     src="http://bootdey.com/img/Content/avatar/avatar3.png"
    //                     alt="..."
    //                     className="img-post2"
    //                   />
    //                 </div>
    //                 <div className="media-body">
    //                   <a href="#" className="h4">
    //                     John Doe
    //                   </a>
    //                   <small className="block text-muted">
    //                     Lorem ipsum dolor sit amet, consectetur adipisicing
    //                     elit.{" "}
    //                   </small>
    //                   <em className="text-xs text-muted">
    //                     Posted on{" "}
    //                     <span className="text-danger">Dec 08, 2014</span>
    //                   </em>
    //                 </div>
    //               </div>
    //               <div className="line no-margin"></div>
    //               <div className="media inner-all no-margin">
    //                 <div className="pull-left">
    //                   <img
    //                     src="http://bootdey.com/img/Content/avatar/avatar5.png"
    //                     alt="..."
    //                     className="img-post2"
    //                   />
    //                 </div>
    //                 <div className="media-body">
    //                   <a href="#" className="h4">
    //                     John Doe
    //                   </a>
    //                   <small className="block text-muted">
    //                     Quaerat, impedit minus non commodi facere doloribus nemo
    //                     ea voluptate nesciunt deleniti.
    //                   </small>
    //                   <em className="text-xs text-muted">
    //                     Posted on{" "}
    //                     <span className="text-danger">Dec 08, 2014</span>
    //                   </em>
    //                 </div>
    //               </div>
    //               <div className="line no-margin"></div>
    //               <form action="#" className="form-horizontal inner-all">
    //                 <div className="form-group has-feedback no-margin">
    //                   <input
    //                     className="form-control"
    //                     type="text"
    //                     placeholder="Your comment here..."
    //                   />
    //                   <button
    //                     type="submit"
    //                     className="btn btn-theme fa fa-search form-control-feedback"
    //                   ></button>
    //                 </div>
    //               </form>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default ProfileHeader;
