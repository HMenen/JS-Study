import React from 'react';
import ProjectGraph from './ProjectGraph';

function ProjectQualityContent(props) {
  const graphDatas = props.graphDatas;
  const graphDataExportTitle = "项目质量";
  const EXPORTPATH = location.origin + '/qm/report/downloadexcelfile';

  const graphs = graphDatas.map((data, index) => (
    <ProjectGraph
      graphData={data}
      key={data.title}
      type='line'
      domIndex={index}
      exportTitle={graphDataExportTitle}
      exportPath={EXPORTPATH} />
  ));

  return(
    <div className="flex" style={{flexWrap: 'wrap'}}>
      {graphs}
    </div>
  );
}

export default ProjectQualityContent;