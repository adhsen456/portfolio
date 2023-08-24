import React, { useState } from 'react';
import ReactQuill from 'react-quill';
// import posts from '../data/posts';
import 'react-quill/dist/quill.snow.css';

function TextInput() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [content, setContent] = useState('');
  //   const [img, setImg] = useState(null);
  const [post, setPost] = useState({});

  //   const maxId = posts.map((posting) => parseInt(posting.id, 10))[posts.length - 1];
  //   console.log(maxId);
  // eslint-disable-next-line prefer-const
  console.log(post);
  console.log(content);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeDesc = (e) => {
    setDesc(e.target.value);
  };

  //   const onChangeImg = (e) => {
  //     setImg(e.target.value);
  //   };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    setPost({
      id: '5',
      title,
      desc,
      detail: content,
      img: '/',
    });
    setPosts(posts.push(post));
  };
  console.log(posts);

  //   console.log(postes);
  return (
    <div className="textInput">
      <div className="container">
        <form method="post">
          <label htmlFor="title">Judul</label>
          <input type="text" name="title" value={title} onChange={onChangeTitle} />
          <label htmlFor="title">Deskripsi Singkat</label>
          <input type="text" name="desc" value={desc} onChange={onChangeDesc} />
          <label htmlFor="title">Deskripsi</label>
          <ReactQuill
            theme="snow"
            modules={{
              toolbar: {
                container: [[{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
                  [{ size: [] }],
                  ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                  [{ list: 'ordered' }, { list: 'bullet' }],
                  ['link', 'image', 'video'],
                  ['clean'],
                  ['code-block']],
              },
            }}
            value={content}
            onChange={setContent}
          />
          {/* <label htmlFor="img">Gambar</label>
          <input type="file" name="img" id="img" value={img} onChange={onChangeImg} /> */}
          <button type="submit" onClick={onSubmitHandle}>Kirim data</button>
        </form>
      </div>
    </div>
  );
}

export default TextInput;
