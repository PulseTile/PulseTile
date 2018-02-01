/*
  ~  Copyright 2017 Ripple Foundation C.I.C. Ltd
  ~  
  ~  Licensed under the Apache License, Version 2.0 (the "License");
  ~  you may not use this file except in compliance with the License.
  ~  You may obtain a copy of the License at
  ~  
  ~    http://www.apache.org/licenses/LICENSE-2.0

  ~  Unless required by applicable law or agreed to in writing, software
  ~  distributed under the License is distributed on an "AS IS" BASIS,
  ~  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  ~  See the License for the specific language governing permissions and
  ~  limitations under the License.
*/
import { combineReducers } from 'redux';

import pagesInfo from './pages/pages-reducer';
import patients from '../pulsetileui/pages/patients-list/patients-reducer-all';
import patientsGet from '../pulsetileui/pages/patients-list/patients-reducer-get';
import search from '../pulsetileui/search/search-reducer-all';
import chart from '../pulsetileui/search/chart-reducer-get';
import studies from '../pulsetileui/pages/dicom/studies-reducer-all';
import series from '../pulsetileui/pages/dicom/series-reducer-all';
import instanceGet from '../pulsetileui/pages/dicom/instance-reducer-get';
import instanceIdGet from '../pulsetileui/pages/dicom/instance-id-reducer-get';

import plugins from '../plugins';

let reducers = {
  pagesInfo,
  patients,
  patientsGet,
  search,
  chart,
  studies,
  series,
  instanceGet,
  instanceIdGet,
};

plugins.forEach((plugin)=>{
  reducers[plugin.name] = plugin.reducer;
});

export default combineReducers(reducers);