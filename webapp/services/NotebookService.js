import NWBFileService from './NWBFileService';
import PythonConsole from '@geppettoengine/geppetto-ui/python-console/PythonConsole';
import React from 'react';

export function getNotebookPath (forceNew = true, useFilename = true) {
  const nwbFileParam = NWBFileService.getNWBFileUrl();
  if (nwbFileParam && useFilename){
    return "notebook?path=workspace/" + nwbFileParam.split('/').slice(-1) + '.ipynb';
  }
  const key = forceNew ? Math.random().toString(36).slice(3) : '';

  return "notebook?path=workspace/nwbexplorer" + key + '.ipynb';
}

var console = null;


export function getConsole (forceNew = true, useFilename = true) {
  if (console === null) {
    console = [<PythonConsole key="console" pythonNotebookPath={getNotebookPath(forceNew, useFilename)} />]
  }
  return console;
}
