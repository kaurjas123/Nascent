import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import data from "./resource_data";
import Card from "./Card";
import  { useState } from 'react';

export default function RichObjectTreeView() {
  const [treeViewData, setTreeData] = useState(null);

  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name} onClick={()=>{
      setTreeData(nodes)
    }}>
      {Array.isArray(nodes.resourceList)
        ? nodes.resourceList.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <>
    {data.map((treeData)=> <TreeView
      aria-label="rich object"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{  flexGrow: 1 }}
    >
      {renderTree(treeData)}
    </TreeView>)
    }
    <Card treeViewData={treeViewData}/>
    </>
  );
}
