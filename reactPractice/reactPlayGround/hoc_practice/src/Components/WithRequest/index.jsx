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
