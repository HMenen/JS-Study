import React, { useState, useEffect, useRef, useMemo } from 'react';
import { TreeSelect, DatePicker, Radio, Button, Icon, message } from 'antd';
import { getSlowsqlOrg, getProjectQuality } from '@/services/data-center';
import locale from 'antd/es/date-picker/locale/zh_CN';
import CheckedAll from './CheckedAll';
import generatorRefManager from './refManager';

const { SHOW_PARENT } = TreeSelect;
const { RangePicker } = DatePicker;
const ZYBTEAMCODE = '1';

const QueryHeader = (props) => {
  const [casaOptions, setCasaOptions] = useState([]);
  const [dataItems, setDataItems] = useState([]);
  const [selectTeamCode, setSelectTeamCode] = useState();
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [timeSign, setTimeSign] = useState('month');
  const [isHidden, setIsHidden] = useState('inline-block');

  const RefManager = useMemo(generatorRefManager, []);

  useEffect(() => {
    if (casaOptions && casaOptions.length > 0){
      setSelectTeamCode([ZYBTEAMCODE]);
    }
  }, [casaOptions]);

  function getOptions() {
    const obj = {
      option: 'projectQuality'
    };
    getSlowsqlOrg(obj).then(data => {
      const list = [].concat(data.list);
      let { dataItems } = data;
      setCasaOptions(transformDataToTreeData(list));
      setDataItems(dataItems);
    }).catch(err => message.error(err));
  }
  useEffect(getOptions, []);

  function onTimeChange(value, dateString) {
    setStartTime(dateString[0]);
    setEndTime(dateString[1]);
  }

  function getProjectQualityData() {
    const params = {};
    params.dataItemStr = getDataItems();
    params.startTime = startTime;
    params.endTime = endTime;
    if (params.dataItemStr === '' || params.startTime === '' || params.endTime === '') {
      message.error('数据项或时间不能为空 ！！！');
      return;
    }
    params.teamCodeStr = selectTeamCode.join(',');
    params.timeSign = timeSign;
    getProjectQuality(params).then(data => {
      props.getQualityData(data);
    }).catch(err => message.error(err));
  }

  function getDataItems() {
    let data = RefManager.refs.map(item => item.current.checkedList);
    return data.flat().join(',');
  }

  const checkGroups = Object.keys(dataItems).map(key => (
    <div key={key} className="flex data-item">
      <div className="select-second-title item-first-column">{key}</div>
      <RefManager.HocCollectRef>
        <CheckedAll options={dataItems[key]}/>
      </RefManager.HocCollectRef>
    </div>
  ));

  let isHiddenIcon;
  if (isHidden !== 'none') {
    isHiddenIcon =  <Icon type="down" onClick={() => setIsHidden('none')}/>;
  }
  else {
    isHiddenIcon = <Icon type="up" onClick={() => setIsHidden('inline-block')}/>;
  }

  function transformDataToTreeData(data) {
    if (data) {
      return data.map(item => {
        item.key = item.value;
        item.title = item.label;
        if (item.children && item.children.length > 0) {
          transformDataToTreeData(item.children);
        }
        return item;
      });
    }
  }
  function onSelectChange(values) {
    setSelectTeamCode(values);
  }
  
  return(
    <div className="border-bottom">
      <div className='flex' style={{justifyContent: 'space-between'}}>
        <TreeSelect
          style={{ width: 240 }}
          value={selectTeamCode}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          treeData={casaOptions}
          placeholder="Please select"
          onChange={onSelectChange}
          treeCheckable={true}
          showCheckedStrategy={SHOW_PARENT}
          maxTagCount={5}
        />
        <div className="flex">
          <div style={{marginRight: '50px'}}>
            <Button type="primary" size="default" onClick={getProjectQualityData}>查询</Button>
          </div>
          <div>
            {isHiddenIcon}
          </div>
        </div>
      </div>
      <div style={{display: isHidden}}>
        <div className="qTime">
          <RangePicker onChange={onTimeChange} locale={locale}/>
          <Radio.Group onChange={(e) => setTimeSign(e.target.value)} value={timeSign} defaultValue={timeSign} style={{marginLeft: '35px'}}>
            <Radio value='week'>周</Radio>
            <Radio value='month'>月</Radio>
            <Radio value='year'>年</Radio>
            <Radio value='quarter'>季度</Radio>
          </Radio.Group>
        </div>
        <div className="flex header-data-items">
          <div className="item-first-column">数据项</div>
          <div>
            {checkGroups}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryHeader;