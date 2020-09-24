import React, { useState } from 'react';

export type InformationAreaProps = {
  tel: string;
  mail: string;
  organization: string;
  account: string;
};

const InformationArea = ({ tel, mail, organization, account }: InformationAreaProps) => {
  const [flag, setFlag] = useState(false);
  const handleOpenEverything = () => setFlag(!flag);
  return (
    <div>
      <p>
        전화번호: <a href={`tel: ${tel}`}>{tel}</a>
      </p>
      <p>
        이메일 주소: <a href={`mailto:${mail}`}>{mail}</a>
      </p>
      <button onClick={handleOpenEverything}>더 자세한 정보 보기</button>
      <div style={{ display: flag ? 'block' : 'none' }}>
        <p>
          소속 : <a href={organization}>{organization}</a>
        </p>
        <p>
          SNS 계정: <a href={account}>{account}</a>
        </p>
      </div>
    </div>
  );
};

export default InformationArea;
