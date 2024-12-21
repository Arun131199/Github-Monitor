import React from 'react';
import { format } from 'date-fns';
import { UserActivity } from '../types';
import ActivityItem from './ActivityItem';

interface ActivityListProps {
  activities: UserActivity[];
}

export default function ActivityList({ activities }: ActivityListProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-2">
        {activities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
}