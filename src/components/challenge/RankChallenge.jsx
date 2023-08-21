const RankChallenge = () => {
  const rankingData = [
    { rank: 1, username: "User1", score: 100 },
    { rank: 2, username: "User2", score: 90 },
    { rank: 3, username: "User3", score: 80 },
    { rank: 4, username: "User4", score: 70 },
    { rank: 5, username: "User5", score: 60 },
    { rank: 6, username: "User6", score: 50 },
    { rank: 7, username: "User7", score: 40 },
    { rank: 8, username: "User8", score: 30 },
    { rank: 9, username: "User9", score: 20 },
    { rank: 10, username: "User10", score: 10 },
    { rank: 11, username: "User11", score: 100 },
    { rank: 12, username: "User12", score: 90 },
    { rank: 13, username: "User13", score: 80 },
    { rank: 14, username: "User14", score: 70 },
    { rank: 15, username: "User15", score: 60 },
    { rank: 16, username: "User16", score: 50 },
    { rank: 17, username: "User17", score: 40 },
    { rank: 18, username: "User18", score: 30 },
    { rank: 19, username: "User19", score: 20 },
    { rank: 20, username: "User20", score: 10 },
  ];

  rankingData.sort((a, b) => b.score - a.score);

  return (
    <div className="h-[500px] overflow-y-auto w-full flex-col">
      {/* Phần đầu (header) cố định */}
      <div className="sticky top-0 bg-white py-3 flex">
        <p className="rank w-[15%] text-center">Rank</p>
        <p className="code w-[15%] text-center">Code</p>
        <p className="username w-[55%] text-center">UserName</p>
        <p className="score w-[15%] text-center">Score</p>
      </div>
      <table className="w-full">
        {rankingData.map((item, index) => (
          <tbody className="" key={index}>
            <tr
              className={`h-[60px] border border-black    ${
                index < 1
                  ? "bg-red-200"
                  : index < 2
                  ? "bg-yellow-200"
                  : index < 3
                  ? "bg-blue-200"
                  : "bg-gray-200"
              }`}
            >
              <td className="w-[15%] text-center">{index + 1}</td>
              <td className="w-[15%] text-center">0000</td>
              <td className="w-[55%] text-center">{item.username}</td>
              <td className="w-[15%] text-center">{item.score}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default RankChallenge;
