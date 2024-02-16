import {Link, useParams} from 'react-router-dom'

import Header from '../Header'

import articles from '../articles'

import './index.css'

const ArticleDetail = () => {
  const {id} = useParams()
  const articleDetail = articles.find(article => article.id === id)

  if (!articleDetail) {
    return <div>Article not found</div>
  }

  return (
    <>
      <Header />
      <div className="article-detail-container">
        <img src={articleDetail.imageUrl} alt={articleDetail.title} />
        <h1>{articleDetail.title}</h1>
        <p className="para">
          <span className="card-content-heading">summary :</span>
          {articleDetail.summary}
        </p>
        <p className="para">
          <span className="card-content-heading">content :</span>
          {articleDetail.content}
        </p>
        <p className="para">
          <span className="card-content-heading">author :</span>
          {articleDetail.author}
        </p>
        <p className="para">
          <span className="card-content-heading">publishedDate :</span>
          {articleDetail.publishedDate}
        </p>

        <Link to="/" className="btn">
          Back to Home
        </Link>
      </div>
    </>
  )
}

export default ArticleDetail