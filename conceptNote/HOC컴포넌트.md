# HOC 컴포넌트

다음과 같은 컴포넌트가 각각 존재한다고 하자.



Post.js

```react
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Post = () => {
  const [data, setData] = useState(null);

  const initialize = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/comments?postId=1'
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  if (!data) return null;

  return <div>{JSON.stringify(data)}</div>;
};

export default Post;
```



Comment.js

```react
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Comment = () => {
  const [data, setData] = useState(null);

  const initialize = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/1'
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  if (!data) return null;

  return <div>{JSON.stringify(data)}</div>;
};

export default Comment;

```



이렇게 두개의 비슷한 컴포넌트 구조를 발견하는 것이 HOC 컴포넌트를 만드는 것의 시작이다.

이 두개를 간소화 해주는 HOC 컴포넌트를 만들어보자

## HOC 컴포넌트 만들기

withRequest.js

```react
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const withRequest = (WrappedComponent, url) => {
  return function () {
    const [data, setData] = useState(null);

    const initialize = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    useEffect(() => {
      initialize();
    }, []);

    return <WrappedComponent url={url} data={data} />;
  };
};

export default withRequest;
```



그러면 이를 다음과 같이 Post와 Comment에서 활용이 가능하다.

Post.js

```react
import React from 'react';
import withRequest from '../WithRequest';

const Post = ({ data }) => {
  if (!data) return null;

  return <div>{JSON.stringify(data)}</div>;
};

export default withRequest(
  Post,
  'https://jsonplaceholder.typicode.com/posts/1'
);
```



Comment.js

```react
import React from 'react';
import withRequest from '../WithRequest';

const Comment = ({ data }) => {
  if (!data) return null;

  return <div>{JSON.stringify(data)}</div>;
};

export default withRequest(
  Comment,
  'https://jsonplaceholder.typicode.com/comments?postId=1'
);
```



## HOC 장점

반복되는 코드를 줄일 수 있다.



## 참고

- [velopert님 블로그](https://velopert.com/3537)
- [NHN 기술 블로그 - 리액트 HOC 집중 탐구 (1)](https://meetup.toast.com/posts/137)
- [NHN 기술 블로그 - 리액트 HOC 집중 탐구 (2)](https://meetup.toast.com/posts/144)