import React from 'react';

import Main from '../general/Main';
import Attribution from '../general/Attribution';

import angela from '../../assets/notification-page/images/avatar-angela-gray.webp';
import anna from '../../assets/notification-page/images/avatar-anna-kim.webp';
import jacob from '../../assets/notification-page/images/avatar-jacob-thompson.webp';
import kimberly from '../../assets/notification-page/images/avatar-kimberly-smith.webp';
import mark from '../../assets/notification-page/images/avatar-mark-webber.webp';
import nathan from '../../assets/notification-page/images/avatar-nathan-peterson.webp';
import rizky from '../../assets/notification-page/images/avatar-rizky-hasanuddin.webp';
import chess from '../../assets/notification-page/images/image-chess.webp';

type Notification = {
  user: {
    name: string;
    image: string;
  };
  time: string;
  read: boolean;
  notification: {
    note: string;
    post?: string;
    message?: string;
  };
  content?: string;
};

const defaultNotifications: Notification[] = [
  {
    user: {
      name: 'Mark Webber',
      image: mark,
    },
    time: '1m',
    read: false,
    notification: {
      note: 'reacted to your recent post',
      post: 'My first tournament today!',
    },
  },
  {
    user: {
      name: 'Angela Gray',
      image: angela,
    },
    time: '5m',
    read: false,
    notification: {
      note: 'followed you',
    },
  },
  {
    user: {
      name: 'Jacob Thompson',
      image: jacob,
    },
    time: '1 day',
    read: false,
    notification: {
      note: 'has joined your group',
      post: 'Chess Club',
    },
  },
  {
    user: {
      name: 'Rizky Hasanuddin',
      image: rizky,
    },
    time: '5 days',
    read: true,
    notification: {
      note: 'has sent you a private message',
      message:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    },
  },
  {
    user: {
      name: 'Kimberly Smith',
      image: kimberly,
    },
    time: '1 week',
    read: true,
    notification: {
      note: 'commented on your picture',
    },
  },
  {
    user: {
      name: 'Nathan Peterson',
      image: nathan,
    },
    time: '2 weeks',
    read: true,
    notification: {
      note: 'reacted to your recent post',
      post: '5 end-game strategies to increase your win rate',
    },
  },
  {
    user: {
      name: 'Anna Kim',
      image: anna,
    },
    time: '2 weeks',
    read: true,
    notification: {
      note: 'left the group',
      post: 'Chess Club',
    },
  },
];

function NotificationItem({ notification }: { notification: Notification }) {
  return (
    <li
      className={`${notification.read ? null : 'bg-lightGB'}
      ' p-4 grid grid-cols-[40px_auto] gap-4 text-dGB rounded-xl '
      `}
    >
      <div className="flex w-12 gap-2 items-star">
        <img className="h-10 w-10" src={notification.user.image} />
      </div>
      <div className="flex-1">
        <p className="whitespace-pre-wrap">
          <a href={'*'} className="hover:text-femBlue inline cursor-pointer">
            {notification.user.name}
          </a>{' '}
          <span className="font-normal inline">{notification.notification.note}</span>{' '}
          {notification.notification.post ? (
            <a href={'*'} className="hover:text-femBlue whitespace-pre-wrap inline cursor-pointer">
              {notification.notification.post}
            </a>
          ) : null}
          {notification.read ? null : (
            <div className="h-2 w-2 bg-femRed whitespace-pre-wrap inline-block ml-2 -translate-y-1/4 rounded-full" />
          )}
        </p>
        <span className="font-normal text-sm">{notification.time} ago</span>

        {notification.notification.message ? (
          <div className="p-4 mt-4 border-2 border-lightGB2 hover:bg-lightGB2 font-normal cursor-pointer rounded-lg">
            {notification.notification.message}
          </div>
        ) : null}
      </div>
    </li>
  );
}

function NotificationPage({ notifications = defaultNotifications }: { notifications?: Notification[] }) {
  return (
    <Main font={'font-jakarta'} bg={'bg-lightGB'}>
      <div className="sm:mt-12">
        <section className="flex flex-col gap-4 bg-femWhite p-6 rounded-xl max-w-2xl">
          <header className="flex justify-between items-center">
            <h1 className="flex gap-2">
              <span>Notifications</span>
              <span className="bg-femBlue px-2 text-femWhite rounded">
                {notifications.filter((n) => n.read !== true).length}
              </span>
            </h1>
            <button className="text-dGB hover:text-femBlue font-normal">Mark all as read</button>
          </header>
          <ul className="flex flex-col gap-4">
            {notifications.map((n) => (
              <NotificationItem notification={n} />
            ))}
          </ul>
        </section>
        <Attribution href="https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC" />
      </div>
    </Main>
  );
}

export default NotificationPage;

/*

# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Red: hsl(1, 90%, 64%)
- Blue: hsl(219, 85%, 26%)

### Neutral

- White: hsl(0, 0%, 100%)
- Very light grayish blue: hsl(210, 60%, 98%)
- Light grayish blue 1: hsl(211, 68%, 94%)
- Light grayish blue 2: hsl(205, 33%, 90%)
- Grayish blue: hsl(219, 14%, 63%)
- Dark grayish blue: hsl(219, 12%, 42%)
- Very dark blue: hsl(224, 21%, 14%)

## Typography

### Body Copy

- Font size (paragraph): 16px

### Font

- Family: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
- Weights: 500, 800

*/
