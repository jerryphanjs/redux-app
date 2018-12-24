import React from 'react';

const BreadCrumb = () => {
  return (
    <ul className="breadcrumb">
      <li><a href="index.html">Home</a> <span className="divider">/</span></li>
      <li className="active">Registration</li>
    </ul>
  )
}
export default BreadCrumb;