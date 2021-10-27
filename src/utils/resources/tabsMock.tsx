import React from 'react';
import { BookOpen, Volume2, Video, Flag } from 'react-feather';
import TabModel from "../models/TabModel";

export default class TabsMock {
  public static table: Array<TabModel> = [
    {
      id: 0,
      title: 'Read',
      value: 32,
      color: '#5A55AB',
      icon: <BookOpen size={24} color="#BDBBDD" />
    },
    {
      id: 1,
      title: 'Listen',
      value: 17,
      color: '#2FBBB0',
      icon: <Volume2 size={24} color="#BDBBDD" />
    },
    {
      id: 2,
      title: 'Watch',
      value: 48,
      color: '#347EB6',
      icon: <Video size={24} color="#BDBBDD" />
    },
    {
      id: 3,
      title: 'Learning paths',
      value: 11,
      color: '#E89C36',
      icon: <Flag size={24} color="#BDBBDD" />
    }
  ];
}
