"use client";

import React, { useState } from "react";
import {
  Home,
  TrendingUp,
  Play,
  Trophy,
  MessageCircle,
  ArrowLeft,
  Search,
  Filter,
  Send,
  MoreVertical,
  Star,
} from "lucide-react";

const NECSMobileApp = () => {
  const [currentScreen, setCurrentScreen] = useState("scores");
  const [selectedMatch, setSelectedMatch] = useState(null);

  // Screen 1: Live Scores
  const LiveScoresScreen = () => (
    <div className="flex flex-col h-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="flex items-center justify-between mb-4">
          <h1 className="ml-2 text-2xl font-bold text-white">Live Matches</h1>
          <div className="flex gap-2">
            <button className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
              <Search size={20} className="text-white" />
            </button>
            <button className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
              <Filter size={20} className="text-white" />
            </button>
          </div>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {["All", "Valorant", "Rocket League", "Smash Bros"].map((game) => (
            <button
              key={game}
              className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm whitespace-nowrap"
            >
              {game}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {[
          {
            team1: "Cloud9",
            team2: "Sentinels",
            score1: 11,
            score2: 9,
            game: "Valorant",
            status: "LIVE",
            map: "Haven",
          },
          {
            team1: "NRG Esports",
            team2: "100 Thieves",
            score1: 8,
            score2: 13,
            game: "Valorant",
            status: "LIVE",
            map: "Bind",
          },
          {
            team1: "Team Liquid",
            team2: "FaZe Clan",
            score1: 2,
            score2: 1,
            game: "Rocket League",
            status: "LIVE",
            time: "3:24",
          },
        ].map((match, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-4 border border-purple-500/30 shadow-lg shadow-purple-500/20"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
                • {match.status}
              </span>
              <span className="text-purple-400 text-sm font-semibold">
                {match.game}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                    {match.team1[0]}
                  </div>
                  <span className="text-white font-semibold">
                    {match.team1}
                  </span>
                </div>
                <span className="text-2xl font-bold text-white">
                  {match.score1}
                </span>
              </div>

              <div className="border-t border-slate-600/50"></div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
                    {match.team2[0]}
                  </div>
                  <span className="text-white font-semibold">
                    {match.team2}
                  </span>
                </div>
                <span className="text-2xl font-bold text-white">
                  {match.score2}
                </span>
              </div>
            </div>

            {match.map && (
              <div className="mt-3 pt-3 border-t border-slate-600/50">
                <span className="text-slate-400 text-sm">
                  Map: <span className="text-purple-400">{match.map}</span>
                </span>
              </div>
            )}
            {match.time && (
              <div className="mt-3 pt-3 border-t border-slate-600/50">
                <span className="text-slate-400 text-sm">
                  Time: <span className="text-purple-400">{match.time}</span>
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  // Screen 2: Player Stats
  const PlayerStatsScreen = () => (
    <div className="flex flex-col h-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="ml-2 text-2xl font-bold text-white flex-1">
            Player Stats
          </h1>
          <button className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
            <Search size={20} className="text-white" />
          </button>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {["Top Players", "K/D", "Win Rate", "MVP"].map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm whitespace-nowrap"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {[
          {
            name: "TenZ",
            team: "Cloud9",
            kills: 284,
            deaths: 156,
            assists: 89,
            rating: 1.42,
            game: "Valorant",
          },
          {
            name: "Zekken",
            team: "Sentinels",
            kills: 267,
            deaths: 178,
            assists: 102,
            rating: 1.38,
            game: "Valorant",
          },
          {
            name: "s0m",
            team: "NRG",
            kills: 245,
            deaths: 189,
            assists: 94,
            rating: 1.29,
            game: "Valorant",
          },
          {
            name: "Asuna",
            team: "100T",
            kills: 238,
            deaths: 195,
            assists: 87,
            rating: 1.24,
            game: "Valorant",
          },
        ].map((player, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-4 border border-blue-500/30 shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {player.name[0]}
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-xs font-bold text-slate-900">
                  #{idx + 1}
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-white font-bold text-lg">{player.name}</h3>
                <p className="text-slate-400 text-sm">
                  {player.team} • {player.game}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded">
                    Rating: {player.rating}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <div className="text-white font-bold text-lg">
                  {player.kills}
                </div>
                <div className="text-slate-400 text-xs">Kills</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-slate-600/50">
              <div className="text-center">
                <div className="text-white font-semibold">{player.deaths}</div>
                <div className="text-slate-400 text-xs">Deaths</div>
              </div>
              <div className="text-center">
                <div className="text-white font-semibold">{player.assists}</div>
                <div className="text-slate-400 text-xs">Assists</div>
              </div>
              <div className="text-center">
                <div className="text-purple-400 font-semibold">
                  {(player.kills / player.deaths).toFixed(2)}
                </div>
                <div className="text-slate-400 text-xs">K/D</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Screen 3: Match Replays
  const MatchReplaysScreen = () => (
    <div className="flex flex-col h-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="p-4 bg-gradient-to-r from-pink-600 to-orange-600">
        <h1 className="ml-2 text-2xl font-bold text-white mb-4">
          Match Replays
        </h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search replays..."
            className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <Search size={20} className="absolute right-3 top-3 text-white/60" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {[
          {
            title: "Cloud9 vs Sentinels - Finals",
            thumbnail: "C9",
            duration: "45:23",
            views: "152K",
            game: "Valorant",
          },
          {
            title: "NRG Clutch Moment",
            thumbnail: "NRG",
            duration: "2:34",
            views: "89K",
            game: "Valorant",
          },
          {
            title: "Rocket League Championship",
            thumbnail: "RL",
            duration: "38:12",
            views: "234K",
            game: "RL",
          },
          {
            title: "Smash Bros Top 8 Highlights",
            thumbnail: "SSB",
            duration: "15:47",
            views: "178K",
            game: "Smash",
          },
        ].map((replay, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl overflow-hidden border border-pink-500/30 shadow-lg shadow-pink-500/20"
          >
            <div className="relative h-48 bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center">
              <div className="text-white text-6xl font-bold opacity-30">
                {replay.thumbnail}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-all">
                  <Play size={32} className="text-white ml-1" fill="white" />
                </button>
              </div>
              <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-white text-sm font-semibold">
                {replay.duration}
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-white font-bold text-lg mb-2">
                {replay.title}
              </h3>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">{replay.views} views</span>
                <span className="px-2 py-1 bg-pink-500/20 text-pink-400 rounded">
                  {replay.game}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Screen 4: Bracket Updates
  const BracketScreen = () => (
    <div className="flex flex-col h-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="p-4 bg-gradient-to-r from-green-600 to-teal-600">
        <h1 className="ml-2 text-2xl font-bold text-white mb-4">
          Tournament Bracket
        </h1>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {["Valorant", "Rocket League", "Smash Bros"].map((game) => (
            <button
              key={game}
              className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm whitespace-nowrap"
            >
              {game}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-6">
          {/* Semifinals */}
          <div>
            <h2 className="text-green-400 font-bold text-lg mb-3 flex items-center gap-2">
              <Trophy size={20} />
              Semifinals
            </h2>
            <div className="space-y-3">
              {[
                {
                  team1: "Cloud9",
                  team2: "NRG Esports",
                  score1: 2,
                  score2: 1,
                  winner: "team1",
                },
                {
                  team1: "Sentinels",
                  team2: "100 Thieves",
                  score1: 2,
                  score2: 0,
                  winner: "team1",
                },
              ].map((match, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-4 border border-green-500/30"
                >
                  <div
                    className={`flex items-center justify-between mb-2 ${
                      match.winner === "team1" ? "opacity-100" : "opacity-60"
                    }`}
                  >
                    <span className="text-white font-semibold">
                      {match.team1}
                    </span>
                    <span className="text-white font-bold text-xl">
                      {match.score1}
                    </span>
                  </div>
                  <div className="border-t border-slate-600/50 my-2"></div>
                  <div
                    className={`flex items-center justify-between ${
                      match.winner === "team2" ? "opacity-100" : "opacity-60"
                    }`}
                  >
                    <span className="text-white font-semibold">
                      {match.team2}
                    </span>
                    <span className="text-white font-bold text-xl">
                      {match.score2}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Finals */}
          <div>
            <h2 className="text-yellow-400 font-bold text-lg mb-3 flex items-center gap-2">
              <Star size={20} />
              Grand Finals
            </h2>
            <div className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 rounded-xl p-4 border-2 border-yellow-500/50 shadow-lg shadow-yellow-500/30">
              <div className="text-center mb-4">
                <span className="px-3 py-1 bg-yellow-500 text-slate-900 text-sm font-bold rounded-full">
                  May 9, 1:00 PM CT
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold">Cloud9</span>
                  <span className="text-slate-400">TBD</span>
                </div>
                <div className="text-center text-yellow-400 font-bold">VS</div>
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold">Sentinels</span>
                  <span className="text-slate-400">TBD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Screen 5: Community Chat
  const ChatScreen = () => (
    <div className="flex flex-col h-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="flex items-center justify-between mb-4">
          <h1 className="ml-2 text-2xl font-bold text-white">Community Chat</h1>
          <button className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
            <MoreVertical size={20} className="text-white" />
          </button>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {["General", "Match Talk", "Memes", "LFG"].map((channel) => (
            <button
              key={channel}
              className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm whitespace-nowrap"
            >
              #{channel}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {[
          {
            user: "ProGamer99",
            message: "That clutch by TenZ was insane! 🔥",
            time: "2m ago",
            avatar: "P",
          },
          {
            user: "EsportsFan",
            message: "Cloud9 looking strong this tournament",
            time: "5m ago",
            avatar: "E",
          },
          {
            user: "ValLover",
            message: "Anyone else hyped for the finals tomorrow?",
            time: "8m ago",
            avatar: "V",
          },
          {
            user: "GameMaster",
            message: "Sentinels vs Cloud9 is going to be epic!",
            time: "12m ago",
            avatar: "G",
          },
          {
            user: "NashvilleNerd",
            message: "Who else is here in Nashville? This event is amazing!",
            time: "15m ago",
            avatar: "N",
          },
        ].map((msg, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
              {msg.avatar}
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-white font-semibold">{msg.user}</span>
                <span className="text-slate-500 text-xs">{msg.time}</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {msg.message}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-slate-800/50 backdrop-blur-sm border-t border-slate-700">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-3 bg-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl">
            <Send size={20} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );

  // Navigation Bar
  const NavBar = () => {
    const navItems = [
      { id: "scores", icon: Home, label: "Scores" },
      { id: "stats", icon: TrendingUp, label: "Stats" },
      { id: "replays", icon: Play, label: "Replays" },
      { id: "bracket", icon: Trophy, label: "Bracket" },
      { id: "chat", icon: MessageCircle, label: "Chat" },
    ];

    return (
      <div className="bg-slate-900 border-t border-slate-700 px-2 py-3">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentScreen(item.id)}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "text-slate-400"
                }`}
              >
                <Icon size={22} />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="scale-[0.85] origin-center md:scale-100">
        <div className="w-full max-w-md h-[812px] bg-black rounded-[3rem] shadow-2xl overflow-hidden border-8 border-slate-800 relative">
          {/* Screen Content */}
          <div className="h-full flex flex-col">
            <div className="flex-1 overflow-hidden">
              {currentScreen === "scores" && <LiveScoresScreen />}
              {currentScreen === "stats" && <PlayerStatsScreen />}
              {currentScreen === "replays" && <MatchReplaysScreen />}
              {currentScreen === "bracket" && <BracketScreen />}
              {currentScreen === "chat" && <ChatScreen />}
            </div>
            <NavBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NECSMobileApp;
