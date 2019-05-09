import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAnArticle } from '../actions/articleActions';
import postComments from '../actions/postComments';
import getComments from '../actions/getComments';
import replyComments from '../actions/replyComments';
import ArticleHeader from '../components/article/ArticleHeader';
import ArticleBody from '../components/article/ArticleBody';
import Comment from '../components/article/Comment';


export class Article extends Component {
  state = {
    commentBody: '',
    replyBody: '',
  }

  componentWillMount = () => {
    const { match, getAnArticle: getArticle, getComments: getArticleComments } = this.props;
    const { slug } = match.params;

    if (slug) {
      getArticle(slug);
      getArticleComments(slug);
    }
  }

  handleChange = (event) => {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleKeyPress = (event) => {
    if (event.charCode === 13 && !event.shiftKey) {
      event.preventDefault();
      if (event.target.getAttribute('name') === 'replyBody') {
        const commentId = event.target.getAttribute('data-id');
        this.handleSubmitReply(commentId);
      } else {
        this.handleSubmitComment();
      }
    }
  }

  handleSubmitComment = async () => {
    const { commentBody: body } = this.state;
    const commentsPayload = {
      body,
    };
    const { match } = this.props;
    // eslint-disable-next-line react/destructuring-assignment
    this.props.postComments(commentsPayload, match.params.slug);
  }

  handleSubmitReply = async (commentId) => {
    const { replyBody: body } = this.state;
    const commentsPayload = {
      body,
    };
    // eslint-disable-next-line react/destructuring-assignment
    this.props.replyComments(commentsPayload, commentId);
  }

  singleArticle() {
    const { article, comments, userId } = this.props;
    return (
      <div>
        <div className="single-page">
          <ArticleHeader article={article} userId={userId} />
          <ArticleBody article={article} userId={userId} />
          <Comment
            article={article}
            comments={comments}
            handleKeyPress={this.handleKeyPress}
            handleChange={this.handleChange}
          />
        </div>
      </div>

    );
  }

  renderArticle() {
    const { article, error } = this.props;
    if (article) {
      return this.singleArticle();
    }
    return <div>{error}</div>;
  }


  render() {
    return (
      <div>
        { this.renderArticle() }
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  error: state.articles.articleError,
  article: state.articles.article,
  comment: state.postComments,
  replyComment: state.replyComments,
  comments: state.getComments.comments,
  userId: state.auth.ownProfile.userId,
});

export default connect(mapStateToProps, {
  replyComments, postComments, getComments, getAnArticle,
})(Article);
