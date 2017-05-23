import React, { Component } from 'react'
import Article from './Article'
import Ad from './Ad'
import OtherArticles from './OtherArticles'

const otherArticles = [
  {
    imageUrl: "https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif",
    caption: "Single Orcs in Indianapolis",
    alt: "orcs"
  },
  {
    imageUrl: "https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg",
    caption: "You won't believe what's under this mountain",
    alt: "mountain"
  },
  {
    imageUrl: "http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg",
    caption: "Mine 20% more gold with One Weird Trick",
    alt: "gold"
  },
  {
    imageUrl: "http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg",
    caption: "Surprise for Indiana Hobbits born before 1999",
    alt: "hobbit"
  },
]

class MainContent extends Component {
  render() {
    return (
      <main className="expanded row">
        <Article />
        
        <Ad />

        <OtherArticles links={otherArticles} />
      </main>
    )
  }
}

export default MainContent