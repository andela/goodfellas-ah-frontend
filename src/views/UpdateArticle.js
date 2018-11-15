import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import Editor from 'react-medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';
import ImageUploader from '../components/articles/imageUpload';
import updateArticle from '../actions/updateArticle';
import '../styles/views/createArticles.scss';
import { Loader } from '../components/shared/Loading';
import Body from '../components/layout/DefaultLayout';

export class UpdateArticles extends Component {
  state = {
    title: '',
    body: '',
    imageLoad: false,
  }

  componentDidUpdate(prevProps) {
    const { status } = this.props;
    if (prevProps.status.success !== status.success && status.success) {
      swal('Good job!', 'Article Updated Successfully!', 'success');
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

  handleSubmit = async (event) => {
    event.preventDefault();
    const { body } = this.state;
    const articlePayload = {
      ...this.state,
      description: body.split(' ').slice(0, 3).join(' '),
    };
    // eslint-disable-next-line react/destructuring-assignment
    this.props.updateArticle(articlePayload);
  }

  render() {
    const handleEditorChange = (text, key) => this.setState({ [key]: text });
    const { imageUploadStatus } = this.props;
    const { title, body } = this.state;
    return (
      <Body>
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
                data-placeholder="Title"
                text={title}
                onChange={(e) => handleEditorChange(e, 'title')}
                options={{
                  toolbar: {
                    static: true,
                    sticky: false,
                    buttons: ['bold', 'italic', 'underline', 'strikethrough', 'quote', 'anchor', 'h2', 'h3', 'orderedlist'],
                    updateOnEmptySelection: true,
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
                      activeButtonClass: 'medium-editor-button-active',
                      allowMultiParagraphSelection: true,
                      static: true,
                      sticky: false,
                      buttons: ['bold', 'italic', 'underline', 'strikethrough', 'quote', 'anchor', 'h2', 'h3', 'orderedlist'],
                      updateOnEmptySelection: true,
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
      </Body>
    );
  }
}


const mapStateToProps = ({
  imageUploadReducer: { status: imageUploadStatus },
  updateArticleReducer: { status, updatedArticle },
}) => ({
  status,
  updatedArticle,
  imageUploadStatus,
});

export default connect(mapStateToProps, { updateArticle })(UpdateArticles);
