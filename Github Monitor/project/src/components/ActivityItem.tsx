import React from 'react';
import { format } from 'date-fns';
import { UserActivity } from '../types';

interface ActivityItemProps {
  activity: UserActivity;
}

export default function ActivityItem({ activity }: ActivityItemProps) {
  const getActivityDescription = () => {
    switch (activity.type) {
      case 'PushEvent':
        return `Pushed ${activity.payload.commits?.length} commits to`;
      case 'CreateEvent':
        return 'Created';
      case 'WatchEvent':
        return 'Starred';
      default:
        return activity.type.replace('Event', '');
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-800">
            {getActivityDescription()}{' '}
            <span className="font-medium">{activity.repo.name}</span>
          </p>
          {activity.payload.commits && (
            <div className="mt-2 text-sm text-gray-600">
              {activity.payload.commits.map((commit, index) => (
                <p key={index} className="truncate">
                  {commit.message}
                </p>
              ))}
            </div>
          )}
        </div>
        <span className="text-sm text-gray-500">
          {format(new Date(activity.created_at), 'MMM d, yyyy')}
        </span>
      </div>
    </div>
  );
}