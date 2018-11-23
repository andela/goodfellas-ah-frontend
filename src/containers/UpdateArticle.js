import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import Editor from 'react-medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';
import ImageUploader from '../components/articles/imageUpload';
import updateArticle from '../actions/updateArticle';
import { getAnArticle } from '../actions/articleActions';
import '../styles/views/createArticles.scss';
import { Loader } from '../components/shared/Loading';


export class UpdateArticles extends Component {
  state = {
    title: '',
    body: '',
    imageLoad: false,
  }

  componentDidMount = () => {
    const { getAnArticle: fetchArticle, match } = this.props;
    fetchArticle(match.params.slug);
  }

  componentDidUpdate = (prevProps) => {
    const {
      status, article, history, match,
    } = this.props;
    if (prevProps.status.success !== status.success && status.success) {
      swal('Good job!', 'Article Updated Successfully!', 'success');
      setTimeout(() => history.push(`/articles/${match.params.slug}`), 3000);
    } else if (prevProps.status.error !== status.error && status.error) {
      swal('Error!', 'Something Went Wrong!', 'error');
    }
    if (prevProps.article !== article) this.setState({ title: article.title, body: article.body });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  generateImageTag = (url) => `<img class="inline-image" src="${url}" />`


  imageUploaded = (url) => {
    const imageHtml = this.generateImageTag(url);
    this.setState((prevState) => ({ body: prevState.body + imageHtml, imageLoad: false }));
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { title, body } = this.state;
    if (!title || title === '<p><br></p>') return swal('Please add a title', 'Your article needs to have a title', 'warning');
    if (!body || body === '<p><br></p>') { return swal('Please add a body', 'The body of your article cannot be empty!', 'warning'); }
    const { match } = this.props;
    const articlePayload = {
      ...this.state,
      description: body.split(' ').slice(0, 10).join(' '),
    };
    // eslint-disable-next-line react/destructuring-assignment
    this.props.updateArticle(articlePayload, match.params.slug);
  }

  render() {
    const handleEditorChange = (text, key) => this.setState({ [key]: text });
    const { imageUploadStatus, articleLoading } = this.props;
    const { title, body } = this.state;
    if (articleLoading) return <Loader />;
    return (

      <div className="article-body">
        <div className="articles-card">
          <div className="article-buttons">
            <button className="btn article-whitebutton" type="submit" onClick={this.handleSubmit}>
            Update
            </button>
          </div>
          <ImageUploader imageUploaded={this.imageUploaded} />

          <form>
            <Editor
              name="title"
              id="title"
              text={title}
              onChange={(e) => handleEditorChange(e, 'title')}
              options={{
                placeholder: false,
                toolbar: {
                  buttons: ['bold', 'italic', 'underline', 'strikethrough', 'quote', 'anchor', 'h2', 'h3', 'orderedlist'],
                },
              }}
            />
            {imageUploadStatus.loading ? <Loader /> : (
              <Editor
                name="body"
                className="editable"
                text={body}
                onChange={(e) => handleEditorChange(e, 'body')}
                options={{
                  placeholder: false,
                  toolbar: {
                    buttons: ['bold', 'italic', 'underline', 'strikethrough', 'quote', 'anchor', 'h2', 'h3', 'orderedlist'],
                  },
                }}
              />
            )}
          </form>

        </div>
        <div className="article-fixed-buttons">
          <button className="btn article-fixed-whitebutton" type="submit" onClick={this.handleSubmit}>
            Update
          </button>
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({
  imageUploadReducer: { status: imageUploadStatus },
  updateArticleReducer: { status, updatedArticle },
  articles: { article, articleLoading },
}) => ({
  status,
  updatedArticle,
  imageUploadStatus,
  article,
  articleLoading,
});

export default connect(mapStateToProps, { updateArticle, getAnArticle })(UpdateArticles);
