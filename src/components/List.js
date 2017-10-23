import React, { Component } from 'react';

class List extends Component {
  constructor(props){
    super(props);
  }

  render() {

    if(this.props.documents !== undefined){
      return (

          <div className="grid article_list">


            {this.props.documents.map(function(article, index){
                       return <a href={article._self}>
                         <article>
                           <div className="photo">
                             <img src={article.mainImage.reference}/>
                             <div className="photo-overlay">
                               <p>{article.heading}</p>
                             </div>
                           </div>
                           <h2>{article.homepageTeaser}</h2>
                         </article>

                         </a>;
                     })}
          </div>




      );
    }
    else{
      return (<div>Error</div>);
    }


  }


}

export default List;
