import {Component} from 'react'

import Header from '../Header'

import ArticleCard from '../ArticleCard'

import './index.css'

const articles = [
  {
    id: '1',
    title:
      'The Power of AI: How Artificial Intelligence is Transforming Industries',
    summary:
      'This article explores the remarkable impact of artificial intelligence (AI) across various industries, from healthcare and finance to manufacturing and retail.',
    content:
      'The article delves into the diverse ways AI is being harnessed to solve complex problems and enhance efficiency.It discusses the ethical and societal implications of AI, emphasizing the importance of responsible development and implementation. The piece concludes by providing insights into the future of AI and its potential to shape our world in the years to come.',
    author: 'Alex Jones',
    publishedDate: '2024-03-08',
    imageUrl: 'https://i.im.ge/2024/02/14/cWVgI4.image.png',
  },
  {
    id: '2',
    title: 'The Rise of EdTech: Technology Impact on Education',
    summary:
      'This article examines the growing influence of educational technology (EdTech) in transforming the learning experience. ',
    content:
      'The article provides a comprehensive overview of the EdTech landscape, highlighting successful case studies and innovative approaches to teaching and learning.',
    author: 'Sarah Miller',
    publishedDate: '2024-04-12',
    imageUrl: 'https://i.im.ge/2024/02/14/cWpIwp.image.png',
  },
  {
    id: '3',
    title: 'Sustainable Fashion: The Future of the Apparel Industry',
    summary:
      'This article investigates the growing movement towards sustainable fashion and its impact on the apparel industry. ',
    content:
      'The article delves into the intricate supply chain of the fashion industry, exposing the hidden costs of clothing production.',
    author: ' Emma Green',
    publishedDate: '2024-05-19',
    imageUrl: 'https://i.im.ge/2024/02/14/cWJcmK.image.png',
  },
  {
    id: '4',
    title: 'The Future of Work: Automation and Its Impact on the Job Market',
    summary:
      'This article explores the implications of automation and technological advancements on the job market',
    content:
      'The article provides a balanced perspective on the impact of automation, highlighting both the challenges and opportunities it presents.',
    author: 'David Smith',
    publishedDate: '2024-06-23',
    imageUrl: 'https://i.im.ge/2024/02/14/cW4Ck6.image.png',
  },
  {
    id: '5',
    title: 'Beyond Borders: The Rise of Global E-commerce',
    summary:
      'This article examines the rapid growth of global e-commerce and its impact on businesses and consumers worldwide.',
    content:
      'The article provides insights into the evolving landscape of global e-commerce, focusing on emerging markets and the role of technology in breaking down barriers to international trade.',
    author: 'Olivia Brown',
    publishedDate: '2024-07-28',
    imageUrl: 'https://i.im.ge/2024/02/14/cWGndr.image.png',
  },
  {
    id: '6',
    title: 'The Changing Face of Healthcare: Innovations in Medical Technology',
    summary:
      'This article explores the remarkable advancements in medical technology and their impact on healthcare.',
    content:
      'The article provides a comprehensive overview of the latest medical technologies, highlighting real-world examples of their successful implementation.',
    author: 'Dr. Mark Johnson',
    publishedDate: '2024-08-16',
    imageUrl: 'https://i.im.ge/2024/02/14/cWeFdy.image.png',
  },
  {
    id: '7',
    title:
      'The Power of Collaboration: Unlocking Innovation Through Partnerships',
    summary:
      'This article investigates the importance of collaboration and partnerships in driving innovation and achieving success.',
    content:
      'The article delves into the various forms of collaboration, from strategic alliances to joint ventures and open innovation initiatives. It examines the role of trust, communication, and shared goals in forming successful partnerships. The piece concludes by providing insights into the future of collaboration and its potential to address complex global challenges.',
    author: 'Lisa Walker',
    publishedDate: '2024-09-20',
    imageUrl: 'https://i.im.ge/2024/02/15/cV9XB6.image.png',
  },
  {
    id: '8',
    title: 'Climate Action: The Urgency of Addressing Climate Change',
    summary:
      'This article examines the critical need for urgent action to address climate change and its devastating impact on the planet.',
    content:
      'The article provides a comprehensive overview of the latest climate science, explaining the greenhouse effect and the role of human activities in driving climate change. It delves into the various impacts of climate change, including rising sea levels, extreme weather events, and biodiversity loss. ',
    author: ' Dr. Emily Carter',
    publishedDate: '2024-10-25',
    imageUrl: 'https://i.im.ge/2024/02/15/cV5gtp.image.png',
  },
  {
    id: '9',
    title: 'Space Exploration: Unraveling the Mysteries of the Universe',
    summary:
      'This article explores the captivating world of space exploration and its contribution to our understanding of the universe.',
    content:
      ' The article provides an overview of the history of space exploration, from early rocket launches to the development of space telescopes and interplanetary spacecraft. It delves into the various scientific disciplines involved in space exploration, including astronomy, astrophysics, and planetary science. ',
    author: 'Professor Brian Anderson',
    publishedDate: ' 2024-11-14',
    imageUrl: 'https://i.im.ge/2024/02/15/cV5NzX.image.png',
  },
]

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-container">
          <h1 className="news-heading">News Articles</h1>
          <div>
            <ul className="responsive-container">
              {articles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default Home
