import React, { Component } from 'react';

const mainFooter = [
  {
    title: 'Your Account',
    link1: 'YOUR ACCOUNT',
    link2: 'PERSONAL INFORMATION',
    link3: 'ADDRESSES',
    link4: 'DISCOUNT',
    link5:  'ORDER HISTORY',
  },
  {
    title: 'Information',
    link1: 'CONTACT',
    link2: 'SITEMAP',
    link3: 'LEGAL NOTICE',
    link4: 'TERMS AND CONDITIONS',
    link5: 'ABOUT US',
  },
  {
    title: 'Our Offer',
    link1: 'NEW PRODUCTS',
    link2: 'TOP SELLERS',
    link3: 'SPECIALS',
    link4: 'MANUFACTURERS',
    link5: 'SUPPLIERS',
  }
];
const quote = {
  title: 'The standard chunk of Lorem',
  content: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
  Malorum" by Cicero are also reproduced in their exact original form,
  accompanied by English versions from the 1914 translation by H. Rackham.`
};

class FooterMain extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="row-fluid">
          {
            mainFooter.map((main, index) => (
              <div className="span2" key={index}>
                <h5>{main.title}</h5>
                <a href="/">{main.link1}</a> <br />
                <a href="/">{main.link2}</a> <br />
                <a href="/">{main.link3}</a> <br />
                <a href="/">{main.link4}</a> <br />
                <a href="/">{main.link5}</a> <br />
              </div>
            ))
          }
          <div className="span6">
            <h5>{quote.title}</h5>
              {quote.content}
          </div>
        </div>
      </footer>
    )
  }
}
export default FooterMain;