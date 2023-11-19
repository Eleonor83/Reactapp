import React from 'react'
import article1 from "../assets/images/article-image-1.png"
import article2 from "../assets/images/article-image-2.png"
import article3 from "../assets/images/article-image-3.png"
import article4 from "../assets/images/article-image-4.png"

const Projectcase = () => {
  return (
    <section className="project-case">
    <div className="container">
       <div className="section-title">
          <p>Project & Case Studies</p>
          <h2>Let’s Looks Our Global Projects</h2>
       </div>
       <div className="project-and-cases">
          <a className="project" href="#">
             <img className='article1' src={article1} alt="A mans hands reading a buisness papper"/>
             <h3>Grow your buisness</h3>
             <div className="readmore"> Read More <i className="fa-regular fa-arrow-up-right"></i></div>
          </a>
          <a className="project" href="#">
             <img className='article2' src={article2} alt="pink Apple products on a desk"/>
             <h3>Why your client needs a responsive website</h3>
             <div className="readmore"> Read More <i className="fa-regular fa-arrow-up-right"></i></div>
          </a>
          <a className="project" href="#">
             <img className='article3' src={article3} alt="Desk with office supplies"/>
             <h3>Educate your employees to get better results</h3>
             <div className="readmore"> Read More <i className="fa-regular fa-arrow-up-right"></i></div>
          </a>
          <a className="project" href="#">
             <img className='article4' src={article4} alt="Laptop with Buisness Intelligence Insights"/>
             <h3>Business Insights is a important piece of your business</h3>
             <div className="readmore"> Read More <i className="fa-regular fa-arrow-up-right"></i></div>
          </a>
       </div>
       <div className="center-content">
          <a className="btn-black" href="projects.html">All Recent Projects <i
                className="fa-regular fa-arrow-up-right"></i></a>
       </div>
    </div>
 </section>
  )
}

export default Projectcase