import React, { Component } from 'react';

class Link extends Component{

    comment(ev){
        ev.preventDefault()
        return(
            <div className="article-links">
               <h3>yay</h3>
            </div>
        )
    }

    post(ev){
        ev.preventDefault()
        console.log('ok')
    }

    render(){
        return(
            <div>
                <div className="article-links">
                <a className="article-link" href="#">
                    <i className="fa fa-comments-o"></i>
                    <span className="article-link-text"onClick={this.comment}>Comments</span>
                </a>
                <a className="article-link" href="#">
                    <i className="fa fa-share"></i>
                    <span className="article-link-text" onClick={this.post}>Share Post</span>
                </a>
                </div>
            </div>
        )
    }
}

export default Link