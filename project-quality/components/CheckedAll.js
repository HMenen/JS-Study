import React, { useMemo, useState, useRef, useImperativeHandle } from 'react';
import { Checkbox } from 'antd';
import PropTypes from 'prop-types';

const CheckboxGroup = Checkbox.Group;

const CheckedAll = React.forwardRef((props, ref) => {
  const [checkOptions, setCheckOptions] = useState({options: [], valueOptions: {}});
  const [indeterminate, setIndeterminate] = useState(false);
  const [checkedList, setCheckedList] = useState([]);
  const [checkedAll, setCheckedAll] = useState(false);
  const myRef = useRef(false);

  useImperativeHandle(ref, () => ({
    checkedList,
  }));

  useMemo(() => {
    const options = handleOptions(props.options);
    setCheckOptions(options);
  }, []);
  
  function handleOptions(arr) {
    const valueOptions = [];
    const newArr = arr.map(data => {
      const item = {};
      item.value = data.value;
      item.label = data.name;
      valueOptions.push(item.value);
      return item;
    });
    const ret = {};
    ret.options = newArr;
    ret.valueOptions = valueOptions;
    return ret;
  }

  function onCheckAllChange(e) {
    const isCheckedAll = e.target.checked;
    setIndeterminate(false);
    setCheckedAll(isCheckedAll);
    if (isCheckedAll) {
      setCheckedList(checkOptions.valueOptions);
    } else {
      setCheckedList([]);
    }
  }

  function onCheckedChange(checkedList) {
    setCheckedAll(checkOptions.valueOptions.length === checkedList.length);
    setCheckedList(checkedList);
    setIndeterminate(checkedList.length && checkedList.length < checkOptions.valueOptions.length);
  }

  return(
    <div className="flex">
      <div>
        <Checkbox
          indeterminate={indeterminate}
          checked={checkedAll}
          onChange={onCheckAllChange}
          style={{width: '70px', fontSize: '12px', lineHeight: '25px'}}
        >
          全选
        </Checkbox>
      </div>
      <div style={{flexWrap: 'wrap'}}>
        <CheckboxGroup
          options={checkOptions.options}
          value={checkedList}
          onChange={onCheckedChange}
          ref={myRef}
          className="check-item"
        >
        </CheckboxGroup>
      </div>
    </div>
  );
});

CheckedAll.prototype = {
  options: PropTypes.array
};
export default CheckedAll;
