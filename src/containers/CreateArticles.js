import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import Editor from 'react-medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';
import ImageUploader from '../components/articles/imageUpload';
import publishArticle from '../actions/publishArticle';
import '../styles/views/createArticles.scss';
import { Loader } from '../components/shared/Loading';


export class CreateArticles extends Component {
  state = {
    title: '',
    body: '',
    imageLoad: false,
  }

  componentDidUpdate(prevProps) {
    const { status, history, publishedArticle } = this.props;
    if (prevProps.status.success !== status.success && status.success) {
      swal('Good job!', 'Article Saved Successfully!', 'success');
      setTimeout(() => history.push(`/articles/${publishedArticle.article.slug}`), 3000);
    } else if (prevProps.status.error !== status.error && status.error) {
      swal('Error!', 'Something Went Wrong!', 'error');
    }
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

  handleSubmit = (event) => {
    const { history } = this.props;
    event.preventDefault();
    const { title, body } = this.state;
    if (!title || title === '<p><br></p>') return swal('Please add a title', 'Your article needs to have a title', 'warning');
    if (!body || body === '<p><br></p>') { return swal('Please add a body', 'The body of your article cannot be empty!', 'warning'); }
    const articlePayload = {
      ...this.state,
      description: body.split(' ').slice(0, 10).join(' '),
    };
    history.push({
      pathname: '/tags',
      state: { articlePayload },
    });
  }

  render() {
    const handleEditorChange = (text, key) => this.setState({ [key]: text });
    const { imageUploadStatus } = this.props;
    const { title, body } = this.state;
    return (
      <div className="article-body">
        <div className="articles-card">
          <div className="article-buttons">
            <button className="btn article-whitebutton" type="submit" onClick={this.handleSubmit}>
            Publish
            </button>
          </div>
          <ImageUploader imageUploaded={this.imageUploaded} />

          <form>
            <Editor
              name="title"
              id="title"
              data-placeholder="Title"
              text={title}
              onChange={(e) => handleEditorChange(e, 'title')}
              options={{
                toolbar: {
                  buttons: ['bold', 'italic', 'underline', 'strikethrough', 'quote', 'anchor', 'h2', 'h3', 'orderedlist'],
                },
              }}
            />
            {imageUploadStatus.loading ? <Loader /> : (
              <Editor
                name="body"
                className="editable"
                data-placeholder="What would you like to talk about?"
                text={body}
                onChange={(e) => handleEditorChange(e, 'body')}
                options={{
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
            Publish
          </button>
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({
  imageUploadReducer: { status: imageUploadStatus },
  publishArticleReducer: { status, publishedArticle },
}) => ({
  status,
  publishedArticle,
  imageUploadStatus,
});

export default connect(mapStateToProps, { publishArticle })(CreateArticles);
