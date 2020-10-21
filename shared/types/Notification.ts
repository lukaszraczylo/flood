export interface BaseNotification {
  _id?: string;
  read: boolean;
  ts: number; // timestamp
}

export interface TorrentNotification extends BaseNotification {
  id: 'notification.torrent.finished' | 'notification.torrent.errored';
  data: {
    name: string;
  };
}

export interface FeedNotification extends BaseNotification {
  id: 'notification.feed.torrent.added';
  data: {
    title: string;
    feedLabel: string;
    ruleLabel: string;
  };
}

export type Notification = TorrentNotification | FeedNotification;

export interface NotificationCount {
  total: number;
  unread: number;
  read: number;
}

export interface NotificationState {
  id: string;
  count: NotificationCount;
  limit: number;
  start: number;
  notifications: Array<Notification>;
}

export type NotificationFetchOptions = Pick<NotificationState, 'id' | 'limit' | 'start'> & {allNotifications?: boolean};
