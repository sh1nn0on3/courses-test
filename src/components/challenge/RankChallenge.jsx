import { Table } from "antd";
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
  const columns = [
    {
      title: "Rank",
      dataIndex: "index",
      key: "index",
      render: (_, record, index) => index + 1,
    },
    {
      title: "Code",
      dataIndex: "rank",
      key: "rank",
      className: "custom-column", // Thêm lớp CSS tùy chỉnh
      render: (rank) => {
        return rank < 10 ? `000${rank}` : `00${rank}`;
      },
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      className: "w-[400px]", // Thêm lớp CSS tùy chỉnh
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "score",
      className: "custom-column", // Thêm lớp CSS tùy chỉnh
    },
  ];

  const paginationConfig = {
    pageSize: 10, // Số bản ghi hiển thị trên mỗi trang
  };

  return (
    <Table
      dataSource={rankingData}
      columns={columns}
      className="w-full cursor-pointer"
      pagination={paginationConfig} // Sử dụng phân trang
    />
  );
};

export default RankChallenge;
