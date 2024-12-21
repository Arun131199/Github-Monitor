import React from 'react';
import { format } from 'date-fns';
import { Repository } from '../types';

interface RepositoryItemProps {
  repository: Repository;
}

export default function RepositoryItem({ repository }: RepositoryItemProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="font-medium text-lg">
        <a 
          href={repository.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {repository.name}
        </a>
      </h3>
      {repository.description && (
        <p className="text-gray-600 mt-2">{repository.description}</p>
      )}
      <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
        {repository.language && (
          <span className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
            {repository.language}
          </span>
        )}
        <span>⭐ {repository.stargazers_count}</span>
        <span>Updated {format(new Date(repository.updated_at), 'MMM d, yyyy')}</span>
      </div>
    </div>
  );
}