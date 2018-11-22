import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import ImageUploaderClass, { ImageUploader } from '../../components/articles/imageUpload';
import Root from '../../root';

let wrapped;
let wrapper;

const status = {
  success: true,
  error: false,
};

const imageUploadfn = jest.fn();
const store = mockStore({
  imageUploadReducer: {
    status, uploadedImage: 'url',
  },
});

beforeEach(() => {
  wrapped = shallow(
    <Root>
      <MemoryRouter>
        <ImageUploaderClass
          imageUpload={imageUploadfn}
          store={store}
          status={status}
          uploadedImage="url"
        />
      </MemoryRouter>
    </Root>,
  );

  wrapper = shallow(
    <ImageUploader
      imageUpload={imageUploadfn}
      status={status}
      uploadedImage="url"
    />,
  );
});


describe('Create Articles UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});

describe('ImageUploader functionality', () => {
  it('should simulate image upload', () => {
    const imageUpload = wrapper.find('input');
    imageUpload.simulate('change', {
      target: {
        files: 'file',
      },
    });
    expect(imageUploadfn).toBeCalledWith('file');
  });
});
