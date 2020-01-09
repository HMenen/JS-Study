import React, { useState } from 'react';
import './project.less';
import QueryHeader from './QueryHeader';
import ProjectQualityContent from './ProjectQualityContent';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

const ProjectQuality = () => {
  const [graphDatas, setGraphDatas] = useState([]);

  function getQualityData(data) {
    setGraphDatas(data);
  }

  return(
    <div className="content-wrap">
      <QueryHeader getQualityData={getQualityData}/>
      <div>
        <ProjectQualityContent graphDatas={graphDatas}/>
      </div>
    </div>
  );
};

export default ProjectQuality;