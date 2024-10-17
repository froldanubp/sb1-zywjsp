import React, { useState } from 'react';
import { Home, Search, Bell, Mail, User, MoreHorizontal, Twitter } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import TrendingSection from './components/TrendingSection';

function App() {
  const [tweets, setTweets] = useState<string[]>([]);

  const addTweet = (tweet: string) => {
    setTweets([tweet, ...tweets]);
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      <Sidebar />
      <main className="flex-grow border-x border-gray-800 max-w-2xl">
        <Feed tweets={tweets} addTweet={addTweet} />
      </main>
      <TrendingSection />
    </div>
  );
}

export default App;