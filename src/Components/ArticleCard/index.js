import {Link} from 'react-router-dom'

import './index.css'

const ArticleCard = props => {
  const {article} = props
  const {title, summary, author, imageUrl} = article

  return (
    <>
      <li className="user-card-container">
        <Link to={`/article/${article.id}`}>
          <img
            src={imageUrl}
            alt="news-article-img"
            className="news-article-img"
          />
          <h1 className="title">{title}</h1>
          <p className="para">
            <span className="card-content-heading">summary :</span>
            {summary}
          </p>

          <p className="para">
            <span className="card-content-heading">author :</span>
            {author}
          </p>

          <button className="card-btn" type="button">
            Read more
          </button>
        </Link>
      </li>
    </>
  )
}

export default ArticleCard
