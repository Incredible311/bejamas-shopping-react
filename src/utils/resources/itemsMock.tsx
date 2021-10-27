import React from 'react';
// import toAbsoluteUrl from '../helpers/AssetHelpers';
import ItemModel from '../models/ItemModel';
import RecommendModel from '../models/RecommendModel';

import book1 from '../../assets/images/slider/book1.png'
import book2 from '../../assets/images/slider/book2.png'
import book3 from '../../assets/images/slider/book3.png'
import book4 from '../../assets/images/slider/book4.png'
import book5 from '../../assets/images/slider/book5.png'
import video1 from '../../assets/images/slider/video1.png'
import video2 from '../../assets/images/slider/video2.png'
import video3 from '../../assets/images/slider/video3.png'
import video4 from '../../assets/images/slider/video4.png'
import video5 from '../../assets/images/slider/video5.png'
import blinkist1 from '../../assets/images/slider/blinkist1.png'
import blinkist2 from '../../assets/images/slider/blinkist2.png'
import blinkist3 from '../../assets/images/slider/blinkist3.png'
import blinkist4 from '../../assets/images/slider/blinkist4.png'
import blinkist5 from '../../assets/images/slider/blinkist5.png'
import freeArticle1 from '../../assets/images/slider/free-article1.png'
import freeArticle2 from '../../assets/images/slider/free-article2.png'
import freeArticle3 from '../../assets/images/slider/free-article3.png'
import freeArticle4 from '../../assets/images/slider/free-article4.png'
import freeArticle5 from '../../assets/images/slider/free-article5.png'
import podcast from '../../assets/images/slider/podcast.png'
import itunes1 from '../../assets/images/slider/itunes1.png'
import itunes2 from '../../assets/images/slider/itunes2.png'
import itunes3 from '../../assets/images/slider/itunes3.png'
import itunes4 from '../../assets/images/slider/itunes4.png'
import itunes5 from '../../assets/images/slider/itunes5.png'
import popular1 from '../../assets/images/slider/popular1.png'
import popular2 from '../../assets/images/slider/popular2.png'
import popular3 from '../../assets/images/slider/popular3.png'
import popular4 from '../../assets/images/slider/popular4.png'
import popular5 from '../../assets/images/slider/popular5.png'
import like1 from '../../assets/images/slider/like1.png'
import like2 from '../../assets/images/slider/like2.png'
import like3 from '../../assets/images/slider/like3.png'
import like4 from '../../assets/images/slider/like4.png'
import like5 from '../../assets/images/slider/like5.png'
import recommend1 from '../../assets/images/slider/recommend1.png'
import recommend2 from '../../assets/images/slider/recommend2.png'
import recommend3 from '../../assets/images/slider/recommend3.png'

export default class ItemsMock {
  public static booksTable: Array<ItemModel> = [
    {
        id: 0,
        img: <img src={book1} alt="book1" />,
        title: "HBR's 10 Must Reads on Reinventing HR",
        author: "Marcus Buckingham",
        time: "10-15 h"
      },
      {
        id: 1,
        img: <img src={book2} alt="book2" />,
        title: "The Little Book of Beyond Budgeting",
        author: "Steve Morlidge",
        time: "10-15 h"
      },
      {
        id: 2,
        img: <img src={book3} alt="book3" />,
        title: "Budgeting for Managers",
        author: "Sid Kemp",
        time: "12 hours"
      },
      {
        id: 3,
        img: <img src={book4} alt="book4" />,
        title: "Budgeting Workbook: Finance",
        author: "Jada Correia",
        time: "7-18 h"
      },
      {
        id: 4,
        img: <img src={book5} alt="book5" />,
        title: "Digital HR Strategy: Achieving",
        author: "Soumyasanto Sen",
        time: "4-6 h"
      },
      {
        id: 5,
        img: <img src={book1} alt="book1" />,
        title: "HBR's 10 Must Reads on Reinventing HR",
        author: "Marcus Buckingham",
        time: "10-15 h"
      },
      {
        id: 6,
        img: <img src={book2} alt="book2" />,
        title: "The Little Book of Beyond Budgeting",
        author: "Steve Morlidge",
        time: "10-15 h"
      }
  ];

  public static videosTable: Array<ItemModel> = [
    {
        id: 0,
        img: <img src={video1} alt="video1" />,
        title: "HBR's 10 Must Reads on Reinventing HR",
        author: "Marcus Buckingham",
        time: "10-15 h"
      },
      {
        id: 1,
        img: <img src={video2} alt="video2" />,
        title: "The Little Book of Beyond Budgeting",
        author: "Steve Morlidge",
        time: "10-15 h"
      },
      {
        id: 2,
        img: <img src={video3} alt="video3" />,
        title: "Budgeting for Managers",
        author: "Sid Kemp",
        time: "12 hours"
      },
      {
        id: 3,
        img: <img src={video4} alt="video4" />,
        title: "Budgeting Workbook: Finance",
        author: "Jada Correia",
        time: "7-18 h"
      },
      {
        id: 4,
        img: <img src={video5} alt="video5" />,
        title: "Digital HR Strategy: Achieving",
        author: "Soumyasanto Sen",
        time: "4-6 h"
      },
      {
        id: 5,
        img: <img src={video1} alt="video1" />,
        title: "HBR's 10 Must Reads on Reinventing HR",
        author: "Marcus Buckingham",
        time: "10-15 h"
      },
      {
        id: 6,
        img: <img src={video2} alt="video2" />,
        title: "The Little Book of Beyond Budgeting",
        author: "Steve Morlidge",
        time: "10-15 h"
      },
  ];

  public static blinkistsTable: Array<ItemModel> = [
    {
      id: 0,
      img: <img src={blinkist1} alt="blinkist1" />,
      title: "Deep Work: Rules for Focused Success",
      author: "Cal Newport",
      time: "20 min"
    },
    {
      id: 1,
      img: <img src={blinkist2} alt="blinkist2" />,
      title: "Think Again",
      author: "Adam Grant",
      time: "10 min"
    },
    {
      id: 2,
      img: <img src={blinkist3} alt="blinkist3" />,
      title: "Digital Minimalism",
      author: "Cal Newport",
      time: "12 hours"
    },
    {
      id: 3,
      img: <img src={blinkist4} alt="blinkist4" />,
      title: "Focus, The Hidden Driver of Excellence",
      author: "Jada Correia",
      time: "10 min"
    },
    {
      id: 4,
      img: <img src={blinkist5} alt="blinkist5" />,
      title: "Personal Kanban",
      author: "Soumyasanto Sen",
      time: "4-6 h"
    },
    {
      id: 5,
      img: <img src={blinkist1} alt="blinkist1" />,
      title: "Deep Work: Rules for Focused Success",
      author: "Cal Newport",
      time: "20 min"
    },
    {
      id: 6,
      img: <img src={blinkist2} alt="blinkist2" />,
      title: "Think Again",
      author: "Adam Grant",
      time: "10 min"
    }
  ];

  public static freeArticlesTable: Array<ItemModel> = [
    {
      id: 0,
      img: <img src={freeArticle1} alt="freeArticle1" />,
      title: "The Pomodoro Technique",
      author: "Todoist",
      time: "20 min"
    },
    {
      id: 1,
      img: <img src={freeArticle2} alt="freeArticle2" />,
      title: "How to Prevent Employee Burnout",
      author: "Neil Patel",
      time: "20-30 min"
    },
    {
      id: 2,
      img: <img src={freeArticle3} alt="freeArticle3" />,
      title: "The Complete Guide to Deep Work",
      author: "Fadeke Adegbuyi",
      time: "7 min"
    },
    {
      id: 3,
      img: <img src={freeArticle4} alt="freeArticle4" />,
      title: "11 Ways to Avoid Burnout",
      author: "Sasha VanHoven",
      time: "12-15 min"
    },
    {
      id: 4,
      img: <img src={freeArticle5} alt="freeArticle5" />,
      title: "Not Your Usual Time Management",
      author: "Tj Condon",
      time: "1 hour"
    },
    {
      id: 5,
      img: <img src={freeArticle1} alt="freeArticle1" />,
      title: "The Pomodoro Technique",
      author: "Todoist",
      time: "20 min"
    },
    {
      id: 6,
      img: <img src={freeArticle2} alt="freeArticle2" />,
      title: "How to Prevent Employee Burnout",
      author: "Neil Patel",
      time: "20-30 min"
    }
  ];

  public static podcastsTable: Array<ItemModel> = [
    {
      id: 0,
      img: <img src={podcast} alt="podcast" />,
      title: "CIPD Podcast 174 - Environmental Sustainability",
      author: "",
      time: "20 min"
    },
    {
      id: 1,
      img: <img src={podcast} alt="podcast" />,
      title: "Podcast 173: Embracing and leading",
      author: "",
      time: "30 min"
    },
    {
      id: 2,
      img: <img src={podcast} alt="podcast" />,
      title: "Podcast 172: Evidence-based L&D -business",
      author: "",
      time: "7 min"
    },
    {
      id: 3,
      img: <img src={podcast} alt="podcast" />,
      title: "Podcast 171: Pulling the plug on digital fatigue",
      author: "",
      time: "12-15 min"
    },
    {
      id: 4,
      img: <img src={podcast} alt="podcast" />,
      title: "Podcast 169: Evidence-based L&D - why does",
      author: "",
      time: "1 hour"
    },
    {
      id: 5,
      img: <img src={podcast} alt="podcast" />,
      title: "Podcast 171: Pulling the plug on digital fatigue",
      author: "",
      time: "20 min"
    },
    {
      id: 6,
      img: <img src={podcast} alt="podcast" />,
      title: "Podcast 169: Evidence-based L&D - why does",
      author: "",
      time: "30 min"
    }
  ];

  public static itunesListTable: Array<ItemModel> = [
    {
      id: 0,
      img: <img src={itunes1} alt="itunes1" />,
      title: "Ronda Wakefield on How HR Can Serve Those Who Served",
      author: "",
      time: "20 min"
    },
    {
      id: 1,
      img: <img src={itunes2} alt="itunes2" />,
      title: "Bug In The Ear -- Angela Shaw",
      author: "",
      time: "30 min"
    },
    {
      id: 2,
      img: <img src={itunes3} alt="itunes3" />,
      title: "Ep 21 What is Employee Motivation with",
      author: "",
      time: "7 min"
    },
    {
      id: 3,
      img: <img src={itunes4} alt="itunes4" />,
      title: "When Shit Hits The Fan - What To Do Recruiters",
      author: "",
      time: "15 min"
    },
    {
      id: 4,
      img: <img src={itunes5} alt="itunes5" />,
      title: "When Entrepreneurs Distort the Truth",
      author: "",
      time: "1 hour"
    },
    {
      id: 5,
      img: <img src={itunes1} alt="itunes1" />,
      title: "Ep 21 What is Employee Motivation with",
      author: "",
      time: "20 min"
    },
    {
      id: 6,
      img: <img src={itunes2} alt="itunes2" />,
      title: "Bug In The Ear -- Angela Shaw",
      author: "",
      time: "20-30 min"
    }
  ];

  public static popularsTable: Array<ItemModel> = [
    {
      id: 0,
      img: <img src={popular1} alt="popular1" />,
      title: "Karen May on how Googlers teach",
      author: "Work with Google",
      time: "20 min"
    },
    {
      id: 1,
      img: <img src={popular2} alt="popular2" />,
      title: "Learning and Development",
      author: "GreggU",
      time: "10 min"
    },
    {
      id: 2,
      img: <img src={popular3} alt="popular3" />,
      title: "The Learning Organization",
      author: "Sprouts",
      time: "7 min"
    },
    {
      id: 3,
      img: <img src={popular4} alt="popular4" />,
      title: "The Future of Learning & ...",
      author: "Cal Newport",
      time: "15 min"
    },
    {
      id: 4,
      img: <img src={popular5} alt="popular5" />,
      title: "HR Analytics Webinar",
      author: "CHRMP",
      time: "1 hour"
    },
    {
      id: 5,
      img: <img src={popular1} alt="popular1" />,
      title: "Karen May on how Googlers teach",
      author: "Work with Google",
      time: "20 min"
    },
    {
      id: 6,
      img: <img src={popular2} alt="popular2" />,
      title: "Learning and Development",
      author: "GreggU",
      time: "10 min"
    }
  ];

  public static likesTable: Array<ItemModel> = [
    {
      id: 0,
      img: <img src={like1} alt="like1" />,
      title: "How to Design The Perfect Onboarding",
      author: "Actimo",
      time: "20 min"
    },
    {
      id: 1,
      img: <img src={like2} alt="like2" />,
      title: "How To Onboard Employees",
      author: "Chandler Bolt",
      time: "10 min"
    },
    {
      id: 2,
      img: <img src={like3} alt="like3" />,
      title: "Why HR business partners need to",
      author: "AIHR",
      time: "7 min"
    },
    {
      id: 3,
      img: <img src={like4} alt="like4" />,
      title: "Effective decision-making",
      author: "Culture Recruitment",
      time: "15 min"
    },
    {
      id: 4,
      img: <img src={like5} alt="like5" />,
      title: "The Evolving Role Of HR Business Partners",
      author: "Ehab Hafez",
      time: "1 hour"
    },
    {
      id: 5,
      img: <img src={like1} alt="like1" />,
      title: "How to Design The Perfect Onboarding",
      author: "Actimo",
      time: "20 min"
    },
    {
      id: 6,
      img: <img src={like2} alt="like2" />,
      title: "How To Onboard Employees",
      author: "Chandler Bolt",
      time: "10 min"
    }
  ];

  public static recommendsTable: Array<RecommendModel> = [
    {
      id: 0,
      img: <img src={recommend1} alt="recommend1" />,
      title: "Deep Work: Maximize your focus and productivity",
      content: "Learn the productivity secrets of Bill Gates, J. K. Rowling, and Elon Musk.",
      time: "30 minutes a week / 4 weeks"
    },
    {
      id: 1,
      img: <img src={recommend2} alt="recommend2" />,
      title: "Time management for procrastinators",
      content: "Learn how to do it less and double your productivity.",
      time: "15 minutes a week / 4 weeks"
    },
    {
      id: 2,
      img: <img src={recommend3} alt="recommend3" />,
      title: "Avoiding burnout",
      content: "Learn how to avoid a health problem that affects two-thirds of workers.",
      time: "15 minutes a week / 4 weeks"
    },
    {
      id: 3,
      img: <img src={recommend1} alt="recommend1" />,
      title: "Deep Work: Maximize your focus and productivity",
      content: "Learn the productivity secrets of Bill Gates, J. K. Rowling, and Elon Musk.",
      time: "30 minutes a week / 4 weeks"
    },
    {
      id: 4,
      img: <img src={recommend2} alt="recommend2" />,
      title: "Time management for procrastinators",
      content: "Learn how to do it less and double your productivity.",
      time: "15 minutes a week / 4 weeks"
    },
  ];
}
