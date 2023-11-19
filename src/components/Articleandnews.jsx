import React from 'react'
import article25 from '../assets/images/article_25mar.png'
import article17 from '../assets/images/article_17mar.png'
import article13 from '../assets/images/article_13mar.png'

const Articleandnews = () => {
  return (
    <section className="articles_and_news">
    <div className="container">
       <div className="title-button">
          <div className="section-title">
             <p>Article & News</p>
             <h2>Get Every Single Articles & News</h2>
          </div>
          <div className="button">
             <a className="btn-transparent" href="services.html">Browse Articles <i
                   className="fa-regular fa-arrow-up-right"></i></a>
          </div>
       </div>
       <div className="articles">
          <div className="article">
             <div className="date">
                <h3>25</h3>
                <p>Mar</p>
             </div>
             <img className="article25" src={article25} alt=""/>
             <p>Business</p>
             <a href="#">
                <h3>How To Use Digitalization In The Classroom</h3>
             </a>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
          </div>
          <div className="article">
             <div className="date">
                <h3>17</h3>
                <p>Mar</p>
             </div>
             <img className="article17" src={article17} alt=""/>
             <p>Business</p>
             <a href="#">
                <h3>How To Implement Chat GPT In Your Projects</h3>
             </a>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
          </div>
          <div className="article">
             <div className="date">
                <h3>13</h3>
                <p>Mar</p>
             </div>
             <img className="article13" src={{article13}} alt=""/>
             <p>Business</p>
             <a href="#">
                <h3>The Guide To Support Modern CSS Design</h3>
             </a>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
          </div>
       </div>
       <div className="dots">
          <a href=""><i className="fa-solid fa-circle"></i></a>
          <a href=""><i className="fa-solid fa-circle"></i></a>
          <a href=""><i className="fa-solid fa-circle"></i></a>
          <a href=""><i className="fa-solid fa-circle"></i></a>
          <a href=""><i className="fa-solid fa-circle"></i></a>
       </div>
    </div>
 </section>
  )
}

export default Articleandnews