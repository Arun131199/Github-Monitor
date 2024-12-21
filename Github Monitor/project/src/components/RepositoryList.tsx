import React from 'react';
import { Repository } from '../types';
import RepositoryItem from './RepositoryItem';

interface RepositoryListProps {
  repositories: Repository[];
}

export default function RepositoryList({ repositories }: RepositoryListProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Top Repositories</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {repositories.map((repo) => (
          <RepositoryItem key={repo.id} repository={repo} />
        ))}
      </div>
    </div>
  );
}