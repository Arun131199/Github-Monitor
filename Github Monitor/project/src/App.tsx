import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUser, getUserActivities, getUserRepositories } from './services/github';
import UserProfile from './components/UserProfile';
import ActivityList from './components/ActivityList';
import RepositoryList from './components/RepositoryList';

export default function App() {
  const [username, setUsername] = useState('');
  const [searchedUsername, setSearchedUsername] = useState('');

  const { data: user, isLoading: isLoadingUser } = useQuery({
    queryKey: ['user', searchedUsername],
    queryFn: () => getUser(searchedUsername),
    enabled: !!searchedUsername
  });

  const { data: activities } = useQuery({
    queryKey: ['activities', searchedUsername],
    queryFn: () => getUserActivities(searchedUsername),
    enabled: !!searchedUsername
  });

  const { data: repositories } = useQuery({
    queryKey: ['repositories', searchedUsername],
    queryFn: () => getUserRepositories(searchedUsername),
    enabled: !!searchedUsername
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchedUsername(username);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex gap-2">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter GitHub username"
              className="flex-1 p-2 border rounded"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Search
            </button>
          </div>
        </form>

        {isLoadingUser && <p>Loading...</p>}

        {user && (
          <div className="space-y-6">
            <UserProfile
              username={user.login}
              avatarUrl={user.avatar_url}
              name={user.name}
              bio={user.bio}
              followers={user.followers}
              following={user.following}
            />
            
            {activities && <ActivityList activities={activities} />}
            {repositories && <RepositoryList repositories={repositories} />}
          </div>
        )}
      </div>
    </div>
  );
}