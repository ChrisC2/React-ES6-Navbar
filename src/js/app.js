import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from "./components/Navbar"

const app = document.getElementById('app');

const items = [{
  title: 'Nav-Item1',
    subMenu: [{
      item: 'Slider-Item1',
      subItems: ['sub-Item1','sub-Item2','sub-Item3','sub-Item4']
    },
    {
      item: 'Slider-Item2',
      subItems: ['sub-Item1','sub-Item2','sub-Item3','sub-Item4']
    },
    {
      item: 'SliderItem3',
      subItems: ['subItem1','subItem2','subItem3','subItem4']
    },
    {
      item: 'SliderItem4',
      subItems: ['sub-Item1','sub-Item2','sub-Item3','sub-Item4']
    }]
  },{
    title: 'Nav-Item2',
      subMenu: [{
        item: 'Slider-Item1',
        subItems: ['sub-Item1','sub-Item2','sub-Item3','sub-Item4']
      },
      {
        item: 'Slider-Item2',
        subItems: ['sub-Item1','sub-Item2','sub-Item3','sub-Item4']
      },
      {
        item: 'Slider-Item3',
        subItems: ['sub-Item1','sub-Item2','sub-Item3','sub-Item4']
      },
      {
        item: 'Slider-Item4',
        subItems: ['sub-Item1','sub-Item2','sub-Item3','sub-Item4']
      }]
    },{
      title: 'Nav-Item3',
        subMenu: [{
          item: 'SliderItem-1',
          subItems: ['sub-Item1','sub-Item2','sub-Item3','sub-Item4']
        },
        {
          item: 'Slider-Item2',
          subItems: ['sub-Item1','sub-Item2','sub-Item3','sub-Item4']
        },
        {
          item: 'Slider-Item3',
          subItems: ['sub-Item1','sub-Item2','sub-Item3','sub-Item4']
        },
        {
          item: 'Slider-Item4',
          subItems: ['sub-Item1','sub-Item2','sub-Item3','sub-Item4']
        }]
      }, {
        title: 'Nav-Item4',
          subMenu: [{
            item: 'Slider-Item1',
            subItems: ['sub-Item1','sub-Item2','sub-Item3','sub-Item4']
          },
          {
            item: 'Slider-Item2',
            subItems: ['sub-Item1','sub-Item2','sub-Item3','sub-Item4']
          },
          {
            item: 'Slider-Item3',
            subItems: ['sub-Item1','sub-Item2','sub-Item3','sub-Item4']
          },
          {
            item: 'Slider-Item4',
            subItems: ['sub-Item1','sub-Item2','sub-Item3','sub-Item4']
          }]
        },{
          title: 'Nav-Item5',
            subMenu: [{
              item: 'Slider-Item1',
              subItems: ['sub-Item1','sub-Item2','sub-Item3','sub-Item4']
            },
            {
              item: 'Slider-Item2',
              subItems: ['sub-Item1','sub-Item2','sub-Item3','sub-Item4']
            },
            {
              item: 'Slider-Item3',
              subItems: ['sub-Item1','sub-Item2','sub-Item3','sub-Item4']
            },
            {
              item: 'Slider-Item4',
              subItems: ['sub-Item1','sub-Item2','sub-Item3','sub-Item4']
            }]
          }
        ]

ReactDOM.render(<Navbar menuItems={items}/>, app);
