// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeIndex: 0}

  getReview = reviewsList => {
    const {activeIndex} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      activeIndex
    ]

    return (
      <div className="review-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} className="image" />
        <p className="para">{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }

  getLeftArrow = () => {
    const {activeIndex} = this.state

    if (activeIndex > 0) {
      this.setState(prevState => ({activeIndex: prevState.activeIndex - 1}))
    }
  }

  getRightArrow = () => {
    const {activeIndex} = this.state
    const {reviewsList} = this.props

    if (activeIndex < reviewsList.length - 1) {
      this.setState(prevState => ({activeIndex: prevState.activeIndex + 1}))
    }
  }

  render() {
    const {activeIndex} = this.state
    const {reviewsList} = this.props
    return (
      <div className="app-container">
        <button
          type="button"
          data-testid="leftArrow"
          onClick={this.getLeftArrow}
          className="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
            className="img"
          />
        </button>
        {this.getReview(reviewsList)}
        <button
          type="button"
          data-testid="rightArrow"
          onClick={this.getRightArrow}
          className="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
            className="img"
          />
        </button>
      </div>
    )
  }
}

export default ReviewsCarousel
