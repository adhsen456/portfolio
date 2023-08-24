import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
// import posts from '../data/posts';
import ImageResize from 'quill-image-resize-module-react';
import 'react-quill/dist/quill.snow.css';

function TextInput() {
  // const [posts, setPosts] = useState([]);
  // const [title, setTitle] = useState('');
  // const [desc, setDesc] = useState('');
  const [content, setContent] = useState('');
  // const [img, setImg] = useState(null);
  const [post, setPost] = useState({
    title: '',
    desc: '',
    // content: '',
    img: '',
  });

  //   const maxId = posts.map((posting) => parseInt(posting.id, 10))[posts.length - 1];
  //   console.log(maxId);
  // eslint-disable-next-line prefer-const
  // console.log(content);

  const onChange = (e) => {
    setPost((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };
  console.log(content);

  console.log(post);
  // const onChangeDesc = (e) => {
  //   setDesc(e.target.value);
  // };

  //   const onChangeImg = (e) => {
  //     setImg(e.target.value);
  //   };

  // const onSubmitHandle = (e) => {
  //   e.preventDefault();
  //   setPost({
  //     id: '5',
  //     title,
  //     desc,
  //     detail: content,
  //     img: '/',
  //   });
  //   setPosts(posts.push(post));
  // };
  console.log(post);
  Quill.register('modules/imageResize', ImageResize);

  //   console.log(postes);
  return (
    <div className="textInput">
      <div className="container">
        <form method="post">
          <label htmlFor="title">Judul</label>
          <input type="text" name="title" onChange={onChange} />
          <label htmlFor="title">Deskripsi Singkat</label>
          <input type="text" name="desc" onChange={onChange} />
          <label htmlFor="title">Deskripsi</label>
          <ReactQuill
            theme="snow"
            modules={{
              toolbar: [
                [{ header: '1' }, { header: '2' }, { font: [] }],
                [{ size: [] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [
                  { list: 'ordered' },
                  { list: 'bullet' },
                  { indent: '-1' },
                  { indent: '+1' },
                ],
                ['link', 'image', 'video'],
                ['clean'],
              ],
              clipboard: {
                // toggle to add extra line breaks when pasting HTML:
                matchVisual: false,
              },
              imageResize: {
                parchment: Quill.import('parchment'),
                modules: ['Resize', 'DisplaySize'],
              },
            }}
            name="content"
            value={content}
            onChange={setContent}
          />
          {/* <label htmlFor="img">Gambar</label>
          <input type="file" name="img" id="img" value={img} onChange={onChangeImg} /> */}
          {/* <button type="submit" onClick={onSubmitHandle}>Kirim data</button> */}
        </form>
      </div>
    </div>
  );
}

export default TextInput;
