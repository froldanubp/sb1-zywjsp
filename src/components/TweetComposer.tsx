import React, { useState } from 'react';

interface TweetComposerProps {
  addTweet: (tweet: string) => void;
}

const TweetComposer: React.FC<TweetComposerProps> = ({ addTweet }) => {
  const [tweetContent, setTweetContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tweetContent.trim()) {
      addTweet(tweetContent);
      setTweetContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-b border-gray-800">
      <textarea
        className="w-full bg-transparent resize-none focus:outline-none"
        placeholder="What's happening?"
        value={tweetContent}
        onChange={(e) => setTweetContent(e.target.value)}
        rows={3}
      />
      <div className="flex justify-between items-center mt-2">
        <div>{/* Add tweet options like media upload, polls, etc. */}</div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-full px-4 py-2 font-bold hover:bg-blue-600 transition-colors duration-200"
          disabled={!tweetContent.trim()}
        >
          Tweet
        </button>
      </div>
    </form>
  );
};

export default TweetComposer;