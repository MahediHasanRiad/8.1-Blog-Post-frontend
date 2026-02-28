import { useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';

export default function Test() {
  
  const [article, setArticle] = useState('')

  useEffect(() => {
    axios.get('/api/v1/article/all').then((res) => console.log(res.data))
  }, [])

  return (
    <>
      <span>{article}</span>
    </>
  );
}