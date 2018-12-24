import React from 'react';

const clients = [
  './assets/img/1.png',
  './assets/img/2.png',
  './assets/img/3.png',
  './assets/img/4.png',
  './assets/img/5.png',
  './assets/img/6.png',
]
const Client = () => {
  return (
     <section className="our_client">
      <hr className="soften" />
      <h4 className="title cntr"><span className="text">Manufactures</span></h4>
      <hr className="soften" />
      <div className="row">
        {
          clients.map((client, index) => (
            <div className="span2" key={index}>
             <a href="/"><img alt="" src={client} /></a>
            </div>
          ))
          
        }
      </div>
    </section>
  )
}
export default Client;