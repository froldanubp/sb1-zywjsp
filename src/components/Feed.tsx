import React, { useState } from 'react';
import TweetComposer from './TweetComposer';

interface FeedProps {
  tweets: string[];
  addTweet: (tweet: string) => void;
}

const Feed: React.FC<FeedProps> = ({ tweets, addTweet }) => {
  return (
    <div>
      <h1 className="text-xl font-bold p-4 border-b border-gray-800">Home</h1>
      <TweetComposer addTweet={addTweet} />
      <div>
        {tweets.map((tweet, index) => (
          <div key={index} className="p-4 border-b border-gray-800">
            <p>{tweet}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;