const DataTable=(config, data)=> {
  const parentObj={
    parent:document.querySelector(config.parent),
    table:document.createElement('table'),
    thead:document.createElement('thead'),
    tbody:document.createElement('tbody'),
    columns:config.columns,
    headerRow:document.createElement('tr'),
  }
  const thNum=document.createElement('th');
  thNum.innerHTML='№';
  parentObj.headerRow.appendChild(thNum);
  
  parentObj.columns.map((item)=>{
    const th=document.createElement('th');
    th.innerHTML=item.title;
    parentObj.headerRow.appendChild(th);
  })
 
  
  parentObj.thead.appendChild(parentObj.headerRow);
  parentObj.table.appendChild(parentObj.thead);
  data.map((rowData,index)=>{
    const indexTr=document.createElement('tr');
    const indexTd=document.createElement('td');
    indexTd.innerText=index+1;
    indexTr.appendChild(indexTd);
    parentObj.columns.map((elem)=>{
      const valuesTd=document.createElement('td');
      valuesTd.innerText=rowData[elem.value];
      indexTr.appendChild(valuesTd);
    })
    parentObj.tbody.appendChild(indexTr);
  })
  parentObj.table.appendChild(parentObj.tbody);
  parentObj.parent.appendChild(parentObj.table);
}  

const config1 = {
  parent: '#usersTable',
  columns: [
    {title: 'Ім’я', value: 'name'},
    {title: 'Прізвище', value: 'surname'},
    {title: 'Вік', value: 'age'},
  ]
};
 
const users = [  
  {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
  {id: 30051, name: 'Вася', surname: 'Васечкін', age: 15},  
  {id: 30051, name: 'Петя', surname: 'Васечкін', age: 16},
];
 
DataTable(config1, users);
