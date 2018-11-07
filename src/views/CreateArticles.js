import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import Editor from 'react-medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';
import Header from '../components/shared/header';
import publishArticle from '../actions/publishArticle';
import '../styles/components/createArticles.scss';

class CreateArticles extends Component {
  state = {
    title: '',
    body: '',
  }


  // componentDidUpdate() {
  //   if (this.props.status.success) {
  //     swal('Good job!', 'Article Published Successfully!', 'success');
  //   } else if (this.props.status.error) {
  //     swal('Error!', 'Something Went Wrong!', 'error');


  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { body } = this.state;
    const articlePayload = {
      ...this.state,
      description: body.split(' ').slice(0, 3).join(' '),
    };
    const publishStatus = await this.props.publishArticle(articlePayload);
    if (publishStatus) {
      swal('Good job!', 'Article Published Successfully!', 'success');
    } else if (this.props.status.error) {
      swal('Error!', 'Something Went Wrong!', 'error');
    }
  }

  render() {
    const handleEditorChange = (text, key) => this.setState({ [key]: text });
    return (
      <div className="article">
        <Header />
        <hr />
        <div className="articles-card">
          <div className="article-buttons">
            <button className="btn article-whitebutton" type="submit" onClick={this.handleSubmit}>
            Publish
            </button>
            <button className="btn article-whitebutton" type="submit">
            Save for later
            </button>
          </div>
          <div className="fab" id="masterfab">+</div>
          <form>
            <Editor
              name="title"
              id="title"
              data-placeholder="Title"
              text={this.state.title}
              onChange={(e) => handleEditorChange(e, 'title')}
              options={{ toolbar: true }}
            />
            <Editor
              name="body"
              className="editable"
              data-placeholder="What would you like to talk about?"
              text={this.state.body}
              onChange={(e) => handleEditorChange(e, 'body')}
              options={{ toolbar: true }}
            />
          </form>

        </div>
        <div className="article-fixed-buttons">
          <button className="btn article-fixed-whitebutton" type="submit">
            Save for later
          </button>
          <button className="btn article-fixed-whitebutton" type="submit" onClick={this.handleSubmit}>
            Publish
          </button>
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({ publishArticleReducer: { status, publishedArticle } }) => ({
  status,
  publishedArticle,
});

export default connect(mapStateToProps, { publishArticle })(CreateArticles);
