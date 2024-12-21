import React from 'react';

interface UserProfileProps {
  username: string;
  avatarUrl: string;
  name: string;
  bio?: string;
  followers: number;
  following: number;
}

export default function UserProfile({
  username,
  avatarUrl,
  name,
  bio,
  followers,
  following
}: UserProfileProps) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow">
      <img
        src={avatarUrl}
        alt={username}
        className="w-20 h-20 rounded-full"
      />
      <div>
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-gray-600">{username}</p>
        {bio && <p className="text-gray-700 mt-2">{bio}</p>}
        <div className="mt-2 flex space-x-4 text-sm text-gray-600">
          <span>{followers} followers</span>
          <span>{following} following</span>
        </div>
      </div>
    </div>
  );
}